import React, { useState, useCallback } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';

import { useContact } from '../../hooks/Contact';

import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import addUser from '../../assets/add-user.png';

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

const NewContact: React.FC = () => {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const { createContact } = useContact();
  const { navigate } = useNavigation();
  // const navigation = useNavigation<StackNavigationProp<any>>();

  const onCreate = useCallback( async () => {
    if (!name ||!number) {
      Alert.alert(
        'Cheque se os campos estão preechidos.',
      );
      return;
    }

    function toUpperFirstChar(str: string) {
      const strToUpper = str.charAt(0).toUpperCase() + str.substr(1);

      return strToUpper;
    }

    const strName = toUpperFirstChar(name);
    const strLastName = toUpperFirstChar(lastName);

    try {
      const response = await createContact({
        avatar,
        name: `${strName} ${strLastName}`,
        number,
        email,
      });

      navigate('Info', response);

      Alert.alert(
        'Contato criado!',
        'Contato criado com sucesso.'
      );
    } catch (err) {
      Alert.alert(
        'Erro ao criar contato!',
      );
    }
  }, [avatar, name, lastName, number, email]); //////////////

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
          <BackButton onPress={() => navigate('Home')}>
            <FeatherIcon name="arrow-left" color="#FFF" size={26} />
          </BackButton>

          <ContactImage source={addUser} />

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

          <ButtonContainer onPress={onCreate}>
            <ButtonText>Salvar</ButtonText>
          </ButtonContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NewContact;
