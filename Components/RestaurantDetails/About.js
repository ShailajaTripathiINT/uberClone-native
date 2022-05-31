import {View} from 'react-native';
import React from 'react';
import RestaurantImage from './RestaurantImage';
import RestaurantName from './RestaurantName';
import RestaurantDescription from './RestaurantDescription';

// const yelpRestaurantapi = {
//   name: 'Farmhouse Kitchen Thai cuisine',
//   price: '$$',
//   reviews: '1500',
//   rating: 4.5,
//   image:
//     'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
//   categories: [
//     {title: 'Indian'},
//     {title: 'Comfort Food'},
//     {title: 'coffee'},
//     {title: 'Ice-cream'},
//     {title: 'snacks'},
//   ],
// };

const About =(props) => {
  const {name, price, reviews, rating, image, categories} = props.routes.params;

  console.log("reviews",props.routes);

  const formattedCategories = categories.map(cat => cat.title).join(' • ');

  const description = `${formattedCategories} ${
    price ? " • " + price+ ' 20' : ""
  } • 🎫 • ${rating} ⭐ (1500+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

export default About;
