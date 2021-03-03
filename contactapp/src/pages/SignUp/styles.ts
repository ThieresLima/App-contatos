import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`

export const Logo = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 48px;
  color: #FFF;
  margin-bottom: 34px;
`;

export const TextLogin = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 22px;
  color: #FFF;

  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
    font-family: 'RobotoSlab-Regular';
    font-size: 16px;
    color: #c0bbbb;
`;

export const BackToSignInButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  border-top-width: 1px;
  border-color: #c0bbbb;
  padding: 16px 0 ${16 + getBottomSpace()}px; /*Apenas iphone*/

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInButtonText = styled.Text`
  color: #c0bbbb;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
