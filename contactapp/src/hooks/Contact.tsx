import React, { createContext, useState, useCallback, useEffect, useContext } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import api from '../service/api';

import { useAuth } from './Auth';

interface ContactState {
  id?: string;
  avatar?: string;
  name: string;
  number: string;
  email?: string;
}

interface UserContactContextData {
  contacts: ContactState[];
  createContact(data: ContactState): Promise<object>;
  updateContact(data: ContactState): Promise<object>;
  deleteContact(id: string): Promise<void>;
}


const UserContactContext = createContext<UserContactContextData>(
  {} as UserContactContextData
);

export const UserContactProvider: React.FC = ({ children }) => {
  const [data, setData] = useState([] as any);
  const { user } = useAuth();

  useEffect(() => {
    async function loadUserContact() {
        try {
          if (user) {
            const contactExists = await AsyncStorage.getItem('@ContactApp:contact');

            if (contactExists) {
              setData(JSON.parse(contactExists));
              return;
            }

            const response = await api.get('/contacts');

            await AsyncStorage.setItem('@ContactApp:contact', JSON.stringify(response.data));
            setData(response.data);
          }
        } catch {}
    }
    loadUserContact();
  }, [user]);

  const createContact = useCallback(
    async ({ avatar, name, number, email }) => {
      const response = await api.post('/contacts', {
        avatar,
        name,
        number,
        email,
      });

      let newData = [...data, response.data];

      newData.sort(function compare(a: ContactState, b: ContactState) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

      setData(newData);
      // setData((state: any) => [response.data,...state]);

      await AsyncStorage.setItem('@ContactApp:contact', JSON.stringify(newData));

      return response.data;
    }, [data]);

    const updateContact = useCallback(
      async ({ id, avatar, name, number, email }) => {
        const response = await api.put(`/contacts/${id}`, {
          avatar,
          name,
          number,
          email,
        });

        const state = [...data];
        const index = state.findIndex(contact => contact.id === id);
        state[index] = response.data;

        setData(state);
        await AsyncStorage.setItem('@ContactApp:contact', JSON.stringify(state));

        return response.data;
    }, [data]);

    const deleteContact = useCallback(async (id) => {
      await api.delete(`/contacts/${id}`);

      const state = [...data];
      const index = state.findIndex(contact => contact.id === id);
      state.splice(index, 1);

      setData(state);
      await AsyncStorage.setItem('@ContactApp:contact', JSON.stringify(state));
    }, [data]);

  return (
    <UserContactContext.Provider value={{ contacts: data, createContact, updateContact, deleteContact }}>
      {children}
    </UserContactContext.Provider>
  );
};

export function useContact(): UserContactContextData {
  const context = useContext(UserContactContext);

  if (!context) {
    throw new Error('useContact must be used within a UserContactContextProvider');
  }

  return context;
}
