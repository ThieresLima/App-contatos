import React from 'react';
import { ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import avatar from '../../assets/avatarfe.jpg';

import {
  Container,
  CreateContactButton,
  CreateContactButtonText,
  Contact,
  ContactIndex,
  ContactImage,
  ContactName,
 } from './styles';

const Home: React.FC = () => {
  return (
    <Container colors={['#FF8292', '#6B70C2']}>
      <CreateContactButton>
        <Icon name="user-plus" color="#FFF" size={24} />
        <CreateContactButtonText>Criar novo contato</CreateContactButtonText>
      </CreateContactButton>

      <ScrollView>
        <Contact>
          <ContactIndex>1</ContactIndex>
          <ContactImage source={avatar} />
          <ContactName>Maria</ContactName>
        </Contact>
      </ScrollView>
    </Container>
  );
}

export default Home;
