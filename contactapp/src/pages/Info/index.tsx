import React from 'react';

import { useNavigation } from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import avatar from '../../assets/avatarfe.jpg';

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

const Info: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <Container colors={['#FF8292', '#6B70C2']}>
      <BackButton onPress={() => goBack()}>
        <FeatherIcon name="arrow-left" color="#FFF" size={26} />
      </BackButton>

      <DeleteButton>
        <MaterialIcon name="delete" color="#FFF" size={26} />
      </DeleteButton>

      <ContactImage source={avatar} />

      <ContactName>Maria</ContactName>

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
          <InfoNumber>99876123</InfoNumber>
          <CellText>Celular</CellText>
        </InfoContainer>

        <ContainerIcon>
          <MaterialIcon
           style={{ marginRight: 12}}
           name="email" color="#FFF" size={31} />
          <FeatherIcon name="video" color="#FFF" size={30} />
        </ContainerIcon>
      </ContainerInfo>

      <EditButton>
        <FeatherIcon name="edit" color="#FFF" size={28} />
        <EditText>Editar contato</EditText>
      </EditButton>
  </Container>
  );
}
export default Info;
