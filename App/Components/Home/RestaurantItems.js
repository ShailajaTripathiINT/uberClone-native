import React from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Colors} from '../../Utils/Styles/styles';
import RestaurantImage from './RestaurantImage';
import RestaurantInfo from './RestaurantInfo';

export default function RestaurantItems(props) {
  return (
    <>
      <FlatList
        data={props.restaurantData}
        showsVerticalScrollIndicator={false}
        renderItem={itemData => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              //style={[styles.restaurantItemTouch,{backgroundColor:'red'}]}
              style={{...styles.restaurantItemTouch}}
              onPress={() =>
                props.navigation.navigate('RestaurantDetailsScreen', {
                  name: itemData.item.name,
                  image: itemData.item.image_url,
                  price: itemData.item.price,
                  reviews: itemData.item.reviews_count,
                  rating: itemData.item.rating,
                  categories: itemData.item.categories,
                })
              }>
              <View style={styles.restaurantItemDiv}>
                <RestaurantImage image={itemData.item.image_url} />
                <RestaurantInfo
                  name={itemData.item.name}
                  rating={itemData.item.rating}
                />
              </View>
            </TouchableOpacity>
          );
        }}
        
        keyExtractor={(item, index) => index}
        contentContainerStyle={{ paddingBottom: 250 }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  restaurantItemTouch: {
    margin: 1,
    flex: 1,
  },

  restaurantItemDiv: {
    marginTop: 10,
    padding: 15,
    backgroundColor: Colors.primary500,
    elevation: 4,
    borderRadius: 10,
  },
});
