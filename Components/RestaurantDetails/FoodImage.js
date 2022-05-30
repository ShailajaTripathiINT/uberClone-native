import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

const FoodImage = props => {
  return (
    <View>
      <Image source={{uri: props.food.image}} style={styles.foodImage} />
    </View>
  );
};

export default FoodImage;

const styles = StyleSheet.create({
  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});
