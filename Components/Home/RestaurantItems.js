import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import RestaurantImage from './RestaurantImage';
import RestaurantInfo from './RestaurantInfo';
// import RestaurantDetails from '../../Screens/RestaurantDetails';

export const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
  },
];

export default function RestaurantItems({navigation, ...props}) {

  return (
    <> 
    {props.restaurantData.map ((restaurant,index)=>(
      <TouchableOpacity key={index} activeOpacity={1} style={styles.restaurantItemTouch}
      onPress ={()=> navigation.navigate('RestaurantDetails',
      {
        name:restaurant.name,
        image:restaurant.image_url,
        price:restaurant.price,
        reviews:restaurant.reviews_count,
        rating:restaurant.rating,
        categories:restaurant.categories,
      })}>
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
    backgroundColor: 'white',
  },
});
