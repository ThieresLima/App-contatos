import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  margin-bottom: 8px;

  border-width: 2px;
  border-color: #FFF;
  border-radius: 10px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #FFF;
  padding-right: 32px;
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
`;
