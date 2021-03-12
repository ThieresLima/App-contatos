import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Info from '../pages/Info';
import NewContact from '../pages/NewContact';
import EditContact from '../pages/EditContact';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
  } }
  >
    <Screen
      name="Home"
      component={Home}
    />
    <Screen
      name="Info"
      component={Info}
    />
    <Screen
      name="NewContact"
      component={NewContact}
    />
    <Screen
      name="EditContact"
      component={EditContact}
    />
  </Navigator>
);

export default AppRoutes;
