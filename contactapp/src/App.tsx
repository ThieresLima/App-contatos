import React from 'react';
import { StatusBar } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const App: React.FC = () => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={['#FF8292', '#6B70C2']}>
      <StatusBar barStyle="light-content" backgroundColor="#FF8292" />
    </LinearGradient>
  );
};

export default App;
