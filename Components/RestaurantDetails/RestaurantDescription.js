import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const RestaurantDescription = props => {
  return (
    <View>
      <Text style={styles.RestaurantDescription}>{props.description}</Text>
    </View>
  );
};

export default RestaurantDescription;

const styles = StyleSheet.create({
  RestaurantDescription: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: '400',
    fontSize: 15.5,
  },
});
