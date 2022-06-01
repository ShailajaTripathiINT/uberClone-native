import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Screens/Home';
import RestaurantDetails from './Screens/RestaurantDetails';
import {Provider} from 'react-redux';
// import Store from './Redux/Store'
import configureStore from './Redux/Store';

const store = configureStore();

function RootNavigation() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="RestaurantDetails"
            component={RestaurantDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default RootNavigation;
