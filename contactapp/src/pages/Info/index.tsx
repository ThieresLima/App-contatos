import React, { useCallback } from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

import { useContact } from '../../hooks/Contact';

import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  BackButton,
  DeleteButton,
  ContactImage,
  ContactName,
  Option,
  OptionButton,
  OptionText,
  ContainerInfo,
  InfoContainer,
  InfoNumber,
  CellText,
  ContainerIcon,
  EditButton,
  EditText,
 } from './styles';

export interface ContactState {
  id: string;
  avatar: string;
  name: string;
  number: string;
  email: string;
}

type RootStackParamList = {
  contact: ContactState;
};

type Props = StackScreenProps<RootStackParamList, 'contact'>;

const Info: React.FC<Props> = ({ route }) => {
  const { id, avatar, name, number } = route.params;

  const { navigate } = useNavigation();
  const { deleteContact } = useContact();

  const onDelete = useCallback( async () => {
    try {
      await deleteContact(id);

      navigate('Home');

      Alert.alert(
        'Contato Deletado!'
      );
    } catch (e) {
      console.log(e.message)
      Alert.alert(
        'Erro ao deletar contato.'
      );
    }
  }, []);

  return (
    <Container colors={['#FF8292', '#6B70C2']}>
      <BackButton onPress={() => navigate('Home')}>
        <FeatherIcon name="arrow-left" color="#FFF" size={26} />
      </BackButton>

      <DeleteButton onPress={onDelete}>
        <MaterialIcon name="delete" color="#FFF" size={26} />
      </DeleteButton>

      <ContactImage source={{ uri: avatar }} />

      <ContactName>{name}</ContactName>

      <Option>
        <OptionButton>
          <FeatherIcon name="phone" color="#FFF" size={30} />
          <OptionText>Ligar</OptionText>
        </OptionButton>

        <OptionButton>
          <MaterialIcon name="email" color="#FFF" size={31} />
          <OptionText>E-mail</OptionText>
        </OptionButton>

        <OptionButton>
          <FeatherIcon name="video" color="#FFF" size={30} />
          <OptionText>Video</OptionText>
        </OptionButton>
      </Option>

      <ContainerInfo>
      <FeatherIcon name="phone" color="#FFF" size={30} />
        <InfoContainer>
          <InfoNumber>{number}</InfoNumber>
          <CellText>Celular</CellText>
        </InfoContainer>

        <ContainerIcon>
          <MaterialIcon
           style={{ marginRight: 12}}
           name="email" color="#FFF" size={31} />
          <FeatherIcon name="video" color="#FFF" size={30} />
        </ContainerIcon>
      </ContainerInfo>

      <EditButton onPress={() => navigate('EditContact', route.params)}>
        <FeatherIcon name="edit" color="#FFF" size={28} />
        <EditText>Editar contato</EditText>
      </EditButton>
  </Container>
  );
}
export default Info;
