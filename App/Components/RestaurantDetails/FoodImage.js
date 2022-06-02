import React from 'react';
import {Image, StyleSheet} from 'react-native';

export default function FoodImage(props) {
  return (
    <>
      <Image source={{uri: props.food.image}} style={styles.foodImage} />
    </>
  );
}

const styles = StyleSheet.create({
  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});
