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
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText
} from './styles';

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();

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
        <Container colors={['#FF8292', '#6B70C2']}>
          <Logo>Contatos</Logo>

            <View>
              <TextLogin>Faça seu logon</TextLogin>
            </View>

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
              name="password"
              icon="lock"
              placeholder="Senha"
              secureTextEntry
              returnKeyType="send"
            />

          <Button>Entrar</Button>

          <ForgotPassword>
            <ForgotPasswordText>
              Esqueci minha senha
            </ForgotPasswordText>
          </ForgotPassword>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>

    <CreateAccountButton onPress={() => navigate('SignUp')}>
      <Icon name="log-in" size={20} color="#FFF" />
      <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
    </CreateAccountButton>
  </>
  );
}

export default SignIn;
