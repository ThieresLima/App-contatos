import React from 'react';
import { ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/Auth';
import { useContact } from '../../hooks/Contact';

import {
  Container,
  CreateContactButton,
  CreateContactButtonText,
  Contact,
  Header,
  LogoutButton,
  LogoutText,
  ContactIndex,
  ContactImage,
  ContactName,
 } from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const { contacts } = useContact();
  const { signOut } = useAuth()
  // console.log(contacts);
  return (
    <Container colors={['#FF8292', '#6B70C2']}>
      <Header>
        <LogoutButton onPress={signOut}>
          <Icon name="log-in" size={22} color="#FFF" />
          <LogoutText>Sair</LogoutText>
        </LogoutButton>

        <CreateContactButton>
          <Icon name="user-plus" color="#FFF" size={24} />
          <CreateContactButtonText onPress={() => navigate('NewContact')}>
            Criar novo contato
          </CreateContactButtonText>
        </CreateContactButton>
      </Header>

      <ScrollView>
        {
          contacts && contacts.map((contact, index) => (
            <Contact key={contact.id} onPress={() => navigate('Info', contact)}>
              <ContactIndex>{index + 1}</ContactIndex>
              <ContactImage source={{ uri: contact.avatar }} />
              <ContactName>{contact.name}</ContactName>
            </Contact>
          ))
        }
      </ScrollView>
    </Container>
  );
}

export default Home;
