import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Colors } from '../../Utils/Styles/styles';
export default function RestaurantInfo(props) {
  return (
    <View style={styles.restaurantImgView}>
      <View>
        <Text style={styles.restaurantTitle}>{props.name}</Text>
        <Text style={styles.restaurantTime}>30-45 min</Text>
      </View>
      <View style={styles.restaurantRating}>
        <Text>{props.rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  restaurantImgView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  restaurantTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  restaurantTime: {
    fontSize: 13,
    color: 'grey',
  },
  restaurantRating: {
    backgroundColor: Colors.primary600,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});
