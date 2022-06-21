import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default function RestaurantInfo(props) {
  return (
    <View style={styles.restaurantImgView}>
      <View style={{flex: 1}}>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text
            style={
              props.name.length > 22
                ? {padding: 5, color: 'black'}
                : {textAlign: 'center', padding: 5, color: 'black'}
            }>

            {props.name}
          </Text>
        </View>
        <Text style={styles.restaurantTime}>30-45 min</Text>
      </View>
      <View style={styles.restaurantRating}>
        <Text style={{color: 'white'}}>
          {props.rating === 4 ? props.rating + '.0 ' : props.rating + ' '}
        </Text>
        <Entypo name="star" size={15} style={{color: 'white'}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  restaurantImgView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 1,
  },

  restaurantTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  restaurantTime: {
    fontSize: 13,
    color: 'grey',
  },

  restaurantRating: {
    backgroundColor: 'green',
    height: 30,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 4,
    marginHorizontal: 10,
    flexDirection: 'row',
    display: 'flex',
  },
});
