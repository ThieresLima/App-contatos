import React, { useState, useEffect, useCallback } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

import { useContact } from '../../hooks/Contact';

import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { ContactState } from '../Info';

import {
  Container,
  BackButton,
  ContactImage,
  InputImg,
  InputGroup,
  InputContainer,
  Input,
  ButtonContainer,
  ButtonText
 } from './styles';

 type RootStackParamList = {
  contact: ContactState;
};

type Props = StackScreenProps<RootStackParamList, 'contact'>;

const EditContact: React.FC<Props> = ({ route }) => {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const { goBack, navigate } = useNavigation();
  const { updateContact } = useContact();

  useEffect(() => {
    const [nameParams, lastNameParams] = route.params.name.split(' ');
    const { avatar, number, email } = route.params;

    setName(nameParams);
    setLastName(lastNameParams);
    setAvatar(avatar);
    setNumber(number);
    setEmail(email);
}, []);

  const onUpdate = useCallback(async () => {
    const id = route.params.id;

    try {
      const response = await updateContact({
        id,
        avatar,
        name: `${name} ${lastName}`,
        number,
        email,
      });

      navigate('Info', response);

      Alert.alert(
        'Contato atualizado!',
        'Contato atualizado com sucesso.'
      );
    } catch {
      Alert.alert(
        'Erro ao atualizar contato!',
      );
    }
  }, [updateContact, avatar, name, lastName, number, email]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >

      <ScrollView
        contentContainerStyle={{ flex: 1}}
        keyboardShouldPersistTaps="handled"
      >
        <Container colors={['#FF8292', '#6B70C2']}>
          <BackButton onPress={() => goBack()}>
            <FeatherIcon name="arrow-left" color="#FFF" size={26} />
          </BackButton>

          <ContactImage source={{ uri: avatar ? avatar : 'https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/user-512.png' }} />

          {/* falta upload imagens */}
          <InputImg
            value={avatar}
            onChangeText={avatar => setAvatar(avatar)}
          />

          <InputGroup>
          <MaterialIcon
            name="person-outline" size={35} color="#FFF" />
            <InputContainer>
              <Input
                autoCapitalize="words"
                value={name}
                onChangeText={name => setName(name)}
                placeholder="Nome"
                placeholderTextColor="#c0bbbb"
                returnKeyType="next"
              />
              <Input
                placeholder="Sobrenome"
                placeholderTextColor="#c0bbbb"
                autoCapitalize="words"
                value={lastName}
                onChangeText={lastName => setLastName(lastName)}
                returnKeyType="next"
              />
            </InputContainer>
          </InputGroup>

          <InputGroup>
            <MaterialIcon name="local-phone" size={35} color="#FFF" />

            <InputContainer>
              <Input
                placeholder="Número"
                placeholderTextColor="#c0bbbb"
                keyboardType="numeric"
                value={number}
                onChangeText={number => setNumber(number)}
                returnKeyType="next"
              />
            </InputContainer>
          </InputGroup>

          <InputGroup>
            <MaterialIcon name="email" size={35} color="#FFF" />

            <InputContainer>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={email => setEmail(email)}
                placeholder="E-mail"
                placeholderTextColor="#c0bbbb"
                returnKeyType="send"
              />
            </InputContainer>
          </InputGroup>

          <ButtonContainer onPress={onUpdate}>
            <ButtonText>Atualizar</ButtonText>
          </ButtonContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditContact;
