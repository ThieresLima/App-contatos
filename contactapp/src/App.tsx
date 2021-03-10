import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './context/AuthProvider';

import LinearGradient from 'react-native-linear-gradient';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <LinearGradient style={{ flex: 1 }} colors={['#FF8292', '#6B70C2']}>
        <StatusBar barStyle="light-content" backgroundColor="#FF8292" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </LinearGradient>
    </NavigationContainer>
  );
};

export default App;
