import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import configureStore from '../Redux/Store';
import HomeScreen from '../Screens/HomeScreen';
import RestaurantDetailsScreen from '../Screens/RestaurantDetailsScreen';

const store = configureStore();

export default function HomeNavigation() {
  const Stack = createStackNavigator();
console.log("root")
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="RestaurantDetailsScreen"
            component={RestaurantDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
