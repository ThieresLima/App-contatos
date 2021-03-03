import React from 'react';
import { KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Logo,
  TextLogin,
  BackToSignInButton,
  BackToSignInButtonText
} from './styles';

const SignUp: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <>
    <KeyboardAvoidingView
      style={{ flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        contentContainerStyle={{ flex: 1}}
        keyboardShouldPersistTaps="handled"
      >
        <Container style={{ flex: 1 }} colors={['#FF8292', '#6B70C2']}>
          <Logo>Contatos</Logo>

            <View>
              <TextLogin>Crie sua conta</TextLogin>
            </View>

            <Input
              autoCapitalize="words"
              name="name"
              icon="user"
              placeholder="Nome"
              returnKeyType="next"
            />

            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              name="email"
              icon="mail"
              placeholder="E-mail"
              returnKeyType="next"
            />

            <Input
              secureTextEntry
              name="password"
              icon="lock"
              placeholder="Senha"
              returnKeyType="send"
            />

          <Button>Entrar</Button>

        </Container>
      </ScrollView>
    </KeyboardAvoidingView>

    <BackToSignInButton onPress={() => goBack()}>
        <Icon name="arrow-left" size={20} color="#FFF" />
        <BackToSignInButtonText>Voltar para logon</BackToSignInButtonText>
    </BackToSignInButton>
  </>
  );
}

export default SignUp;
