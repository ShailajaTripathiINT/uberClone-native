import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import configureStore from '../Redux/Store';
import HomeScreen from '../Screens/Home/HomeScreen';
import RestaurantDetailsScreen from '../Screens//Home/RestaurantDetailsScreen';
import CategoriesScreen from '../Screens/Home/CategoriesScreen';
import OrderCompleted from '../Screens/Home/OrderCompleted';

const store = configureStore();

export default function HomeNavigation() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
    
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
          <Stack.Screen
            name="CategoriesScreen"
            component={CategoriesScreen}
          />
          <Stack.Screen name="OrderCompleted"
          component={OrderCompleted}/>
          
        </Stack.Navigator>
     
    </Provider>
  );
}
