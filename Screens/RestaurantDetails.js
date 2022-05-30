import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import About from '../Components/RestaurantDetails/About';
import {Divider} from 'react-native-elements';
import MenuItem from '../Components/RestaurantDetails/MenuItem';

const RestaurantDetails = () => {
  return (
    <View>
      <About />
      <Divider width={1.8} style={styles.aboutRestaurant} />
      <MenuItem />
    </View>
  );
};

export default RestaurantDetails;
const styles = StyleSheet.create({
  aboutRestaurant: {
    marginVertical: 20,
  },
});
