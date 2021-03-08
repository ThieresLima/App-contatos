import styled from 'styled-components/native';
import { Image } from 'react-native';
import LinerGradient from 'react-native-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(LinerGradient)`
  flex: 1;
  padding: 20px;
`;

export const BackButton = styled(BorderlessButton)`
  width: 28px;
  margin-bottom: 40px;
`;


export const ContactImage = styled(Image)`
  width: 90px;
  height: 90px;
  border-radius: 50px;

  align-self: center;
  margin: 20px 0;
`;

  //temporário
export const InputImg = styled.TextInput`
  width: 90px;
  height: 90px;
  border-radius: 50px;
  margin-top: -100px;
  align-self: center;
  color: #FFF;
`;

export const InputGroup = styled.View`
  flex-direction: row;
`;

export const InputContainer = styled.View`
  flex: 1;
  margin-left: 4px;
`;

export const Input = styled.TextInput`
  width: 100%;
  border-width: 2px;
  border-color: #FFF;
  border-radius: 10px;
  align-self: flex-end;
  margin-bottom: 10px;

  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #FFF;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ButtonContainer = styled(RectButton)`
  width: 100px;
  height: 40px;
  background-color: #FFF;
  border-radius: 6px;

  align-items: center;
  justify-content: center;
  align-self: flex-end;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #6B70C2;
  font-size: 18px;
`;
