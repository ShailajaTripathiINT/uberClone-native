import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import { Colors } from '../../Utils/Styles/styles';

export default function ViewCart() {
  const {items, restaurantName} = useSelector(
    state => state.cartReducer.selectedItems,
  );

  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });
  console.log(totalUSD);
  return (
    <>
      {total ? (
        <View style={styles.viewCartContainer}>
          <View style={styles.viewCartBox}>
            <TouchableOpacity style={styles.viewCartBtn}>
              <Text style={styles.viewCartText}>View Cart </Text>
              <Text style={styles.viewCartPrice}>${totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  viewCartContainer: {
    flex: 1,
    alignItem: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
    zindex: 999,
    justifyContent: 'center',
  },
  viewCartBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  viewCartBtn: {
    marginTop: 20,
    backgroundColor: Colors.primary700,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: 'relative',
  },
  viewCartText: {
    color: Colors.primary500,
    fontSize: 20,
    marginRight: 30,
  },
  viewCartPrice: {
    color: Colors.primary500,
    fontSize: 20,
  },
});
