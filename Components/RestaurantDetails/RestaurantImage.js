import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

const RestaurantImage = props => {
  return (
    <View>
      <Image source={{uri: props.image}} style={styles.RestaurantImage} />
    </View>
  );
};

export default RestaurantImage;

const styles = StyleSheet.create({
  RestaurantImage: {
    width: '100%',
    height: 180,
  },
});
