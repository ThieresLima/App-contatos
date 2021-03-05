import styled from 'styled-components/native';
import { Image } from 'react-native';

import LinerGradient from 'react-native-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled(LinerGradient)`
  flex: 1;
  padding: 20px;
`;

export const BackButton = styled(BorderlessButton)`
  width: 28px;
  margin-bottom: 20px;
`;

export const DeleteButton = styled(BorderlessButton)`
  width: 28px;
  align-self: flex-end;
  margin-top: 80px;
`;

export const ContactImage = styled(Image)`
  width: 90px;
  height: 90px;
  border-radius: 45px;

  align-self: center;
  margin: 24px 0;
`;

export const ContactName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 34px;
  color: #FFF;
`;

export const Option = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 20px 0;
  padding: 20px 0;
  border-top-width: 0.6px;
  border-bottom-width: 0.6px;
  border-color: #FFF;
`;

export const OptionButton = styled(BorderlessButton)`
  align-items: center;
`;

export const OptionText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: #FFF;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 0.6px;
  border-color: #FFF;
`;

export const InfoContainer = styled.View`
  align-items: flex-start;
  margin-left: 12px;
`;

export const InfoNumber = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #FFF;
`;

export const CellText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: #FFF;
`;

export const ContainerIcon = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const EditButton = styled(BorderlessButton)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 18px;
`

export const EditText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #FFF;
  margin-left: 8px;
`;
