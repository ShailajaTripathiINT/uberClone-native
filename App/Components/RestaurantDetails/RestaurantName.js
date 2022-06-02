import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function RestaurantName(props) {
  return (
    <>
      <Text style={styles.RestaurantTitle}>{props.name}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  RestaurantTitle: {
    fontSize: 29,
    fontWeight: '600',
    marginTop: 10,
    marginHorizontal: 15,
  },
});
