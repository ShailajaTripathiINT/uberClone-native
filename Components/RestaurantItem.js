import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ResturantImage from './ResturantImage';
import ResturantInfo from './ResturantInfo';

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.resturantItemTouch}>
      <View style={styles.resturantItemDiv}>
        <ResturantImage />
        <ResturantInfo />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  resturantItemTouch: {
    marginBottom: 30,
  },

  resturantItemDiv: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'white',
  },
});
