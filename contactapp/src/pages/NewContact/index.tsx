import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
  const { goBack } = useNavigation();

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

          <ContactImage source={addUser} />

          {/* falta upload imagens */}
          <InputImg />

          <InputGroup>
          <MaterialIcon
            name="person-outline" size={35} color="#FFF" />
            <InputContainer>
              <Input
                placeholder="Nome"
                placeholderTextColor="#c0bbbb"
              />
              <Input
                placeholder="Sobrenome"
                placeholderTextColor="#c0bbbb"
              />
            </InputContainer>
          </InputGroup>

          <InputGroup>
            <MaterialIcon name="local-phone" size={35} color="#FFF" />

            <InputContainer>
              <Input
                placeholder="Número"
                placeholderTextColor="#c0bbbb"
              />
            </InputContainer>
          </InputGroup>

          <InputGroup>
            <MaterialIcon name="email" size={35} color="#FFF" />

            <InputContainer>
              <Input
                placeholder="E-mail"
                placeholderTextColor="#c0bbbb"
              />
            </InputContainer>
          </InputGroup>

          <ButtonContainer>
            <ButtonText>Salvar</ButtonText>
          </ButtonContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NewContact;
