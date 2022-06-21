import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'AuthNavigation'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
