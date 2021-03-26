import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;
  width: 100%;
`;

export const Header = styled.View``;

export const LogoutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-self: flex-end;

  padding: 5px;
`;

export const LogoutText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #FFF;
  margin-left: 4px;
`;

export const CreateContactButton = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CreateContactButtonText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #FFF;
  margin-left: 8px;
`;

export const Contact = styled(RectButton)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 14px 20px;
`;

export const ContactIndex = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 24px;
  color: #FFF;
  margin-right: 38px;
`;

export const ContactImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const ContactName = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #FFF;
  margin-left: 18px;
`;
