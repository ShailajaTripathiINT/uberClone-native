import React from 'react';
import {Image, StyleSheet} from 'react-native';

export default function RestaurantImage(props) {
  return (
    <>
      <Image source={{uri: props.image}} style={styles.RestaurantImage} />
    </>
  );
}

const styles = StyleSheet.create({
  RestaurantImage: {
    width: '100%',
    height: 180,
  },
});
