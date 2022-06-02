import React from 'react';
import RestaurantImage from './RestaurantImage';
import RestaurantName from './RestaurantName';
import RestaurantDescription from './RestaurantDescription';

export default function About(props) {
  const {name, price, rating, image, categories} = props.routes.params;
  const formattedCategories = categories.map(cat => cat.title).join(' • ');
  const description = `${formattedCategories} ${
    price ? ' • ' + price + ' 20' : ''
  } • 🎫 • ${rating} ⭐ (1500+)`;

  return (
    <>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </>
  );
}

About;
