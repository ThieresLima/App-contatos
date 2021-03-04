import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}

    initialRouteName="Home"
  >
    <Screen
      name="SignIn"
      component={SignIn}
    />
    <Screen
      name="SignUp"
      component={SignUp}
    />
    <Screen
      name="Home"
      component={Home}
    />
  </Navigator>
);

export default AuthRoutes;
