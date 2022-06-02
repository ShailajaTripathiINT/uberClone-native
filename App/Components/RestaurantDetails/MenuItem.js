import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import FoodInfo from './FoodInfo';
import FoodImage from './FoodImage';
import {Foods} from '../../Utils/Data/Data';

export default function MenuItem({restaurantName}) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });
  };

  const cartItems = useSelector(state => state.cartReducer.selectedItems.items);

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find(item => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {Foods.map((food, index) => (
        <View key={index}>
          <View style={styles.MenuItem}>
            <BouncyCheckbox
              iconStyle={{borderRadius: 0, borderColor: 'lightgrey'}}
              fillColor="green"
              onPress={checkboxValue => selectItem(food, checkboxValue)}
              isChecked={isFoodInCart(food, cartItems)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={styles.MenuDivider}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  MenuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  MenuDivider: {
    marginHorizontal: 20,
  },
});
