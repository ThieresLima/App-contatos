import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen
      name="SignIn"
      component={SignIn}
    />
    <Screen
      name="SignUp"
      component={SignUp}
    />
  </Navigator>
);

export default AuthRoutes;
