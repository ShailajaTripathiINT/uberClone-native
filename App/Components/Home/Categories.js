import React from 'react';
import {ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {Items} from '../../Utils/Data/Data';
import { Colors } from '../../Utils/Styles/styles';

export default function Categories() {
  return (
    <View style={style.categoryMainContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Items.map((item, index) => (
          <View key={index} style={style.categoryContainer}>
            <Image source={item.image} style={style.categoryImg} />
            <Text style={style.categoryText}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  categoryMainContainer: {
    marginTop: 5,
    backgroundColor: Colors.primary500,
    paddingVertical: 10,
    paddingLeft: 20,
  },
  categoryContainer: {
    alignItems: 'center',
    marginRight: 30,
  },
  categoryImg: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  categoryText: {
    fontSize: 13,
    fontWeight: '900',
  },
});
