import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FoodInfo = props => {
  return (
    <View style={styles.foodInfo}>
      <Text style={styles.titleStyle}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  );
};

export default FoodInfo;

const styles = StyleSheet.create({
  foodInfo: {
    width: 240,
    justifyContent: 'space-evenly',
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
  },
});
