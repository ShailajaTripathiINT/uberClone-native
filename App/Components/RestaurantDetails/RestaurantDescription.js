import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function RestaurantDescription(props) {
  return (
    <>
      <Text style={styles.RestaurantDescription}>{props.description}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  RestaurantDescription: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: '400',
    fontSize: 15.5,
  },
});
