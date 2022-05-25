import {ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import React from 'react';

const items = [
  {
    image: require('../assests/Images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../assests/Images/soft-drink.png'),
    text: 'Soft Drinks',
  },

  {
    image: require('../assests/Images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../assests/Images/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    image: require('../assests/Images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../assests/Images/coffee.png'),
    text: 'coffee & Tea',
  },
  {
    image: require('../assests/Images/desserts.png'),
    text: 'Desserts',
  },
];

export default function Categories() {
  return (
    <View style={style.categoryMainContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* loop start from here */}
        {items.map((item, index) => (
          <View key={index} style={style.categoryContainer}>
            <Image source={item.image} style={style.categoryImg} />
            <Text style={style.categoryText}>{item.text}</Text>
          </View>
        ))}

        {/* loop ends here */}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  categoryMainContainer: {
    marginTop: 5,
    backgroundColor: 'white',
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
