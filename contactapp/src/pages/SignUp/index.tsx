import React, { useState, useCallback } from 'react';
import { KeyboardAvoidingView, Platform, View, ScrollView, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import api from '../../service/api';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { goBack } = useNavigation();

  const handleSignUp = useCallback(async () => {
    try {
      if (!name ||!email ||!password) {
        Alert.alert(
          'Cheque se os campos estão preechidos.',
        );
        return;
      }
      console.log('oooooook')
      await api.post('users', {
        name,
        email,
        password,
      });

      Alert.alert(
        'Cadastro realizado com sucesso!',
        'Você já pode fazer login na aplicação',
      );

      goBack();
    } catch (err) {
      Alert.alert(
        'Erro no cadastro',
        'Ocorreu um erro ao fazer cadastro, tente novamente.',
      );
    }
    },[goBack, name, email, password],
  );

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
              <TextLogin>Crie sua conta</TextLogin>
            </View>

            <Input
              value={name}
              onChangeText={name => setName(name)}
              autoCapitalize="words"
              name="name"
              icon="user"
              placeholder="Nome"
              returnKeyType="next"
            />

            <Input
              value={email}
              onChangeText={email => setEmail(email)}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              name="email"
              icon="mail"
              placeholder="E-mail"
              returnKeyType="next"
            />

            <Input
              value={password}
              onChangeText={password => setPassword(password)}
              secureTextEntry
              name="password"
              icon="lock"
              placeholder="Senha"
              returnKeyType="send"
            />

          <Button onPress={handleSignUp}>Entrar</Button>

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
