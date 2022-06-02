import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Colors } from '../../Utils/Styles/styles';
import RestaurantImage from './RestaurantImage';
import RestaurantInfo from './RestaurantInfo';

export default function RestaurantItems({navigation, ...props}) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={styles.restaurantItemTouch}
          onPress={() =>
            navigation.navigate('RestaurantDetailsScreen', {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.reviews_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }>
          <View style={styles.restaurantItemDiv}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  restaurantItemTouch: {
    marginBottom: 30,
  },

  restaurantItemDiv: {
    marginTop: 10,
    padding: 15,
    backgroundColor: Colors.primary500,
  },
});
