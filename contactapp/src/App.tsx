import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Provider from './hooks';

import LinearGradient from 'react-native-linear-gradient';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <LinearGradient style={{ flex: 1 }} colors={['#FF8292', '#6B70C2']}>
        <StatusBar barStyle="light-content" backgroundColor="#FF8292" />
        <Provider>
          <Routes />
        </Provider>
      </LinearGradient>
    </NavigationContainer>
  );
};

export default App;
