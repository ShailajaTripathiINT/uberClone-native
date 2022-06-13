import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SigninScreen from '../Screens/Auth/SigninScreen';
import ForgotpwdScreen from '../Screens/Auth/ForgotpwdScreen';
import SignupScreen from '../Screens/Auth/SignupScreen';
import OtpScreen from '../Screens/Auth/OtpScreen';


export default function AuthNavigation() {
  const Stack = createStackNavigator();

  return (

  
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="SignupScreen">
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
        
          <Stack.Screen
            name="SigninScreen"
            component={SigninScreen}
          />
            <Stack.Screen
            name="ForgotpwdScreen"
            component={ForgotpwdScreen}
          />
           <Stack.Screen
            name="OtpScreen"
            component={OtpScreen}
          />
        </Stack.Navigator>
    
    
  );
}
