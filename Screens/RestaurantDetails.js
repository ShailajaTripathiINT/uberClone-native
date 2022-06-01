import {StyleSheet} from 'react-native';
import React from 'react';
import About from '../Components/RestaurantDetails/About';
import {Divider} from 'react-native-elements';
import MenuItem from '../Components/RestaurantDetails/MenuItem';
import ViewCart from '../Components/RestaurantDetails/ViewCart';

const RestaurantDetails = ({route, navigation}) => {
  return (
    <>
      <About routes={route} />
      <Divider width={1.8} style={styles.aboutRestaurant} />
      <MenuItem restaurantName={route.params.name} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </>
  );
};

export default RestaurantDetails;
const styles = StyleSheet.create({
  aboutRestaurant: {
    marginVertical: 20,
  },
});
