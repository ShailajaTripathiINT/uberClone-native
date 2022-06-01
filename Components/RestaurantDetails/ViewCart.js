import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const ViewCart = () => {
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
  console.log(totalUSD)
  return (
    <View style={styles.viewCartContainer}>
      <View style={styles.viewCartBox}>
        <TouchableOpacity style={styles.viewCartBtn}>
          <View>
            <Text style={styles.viewCartText}>View Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewCart;

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
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: 'relative',
  },
  viewCartText: {
    color: 'white',
    fontSize: 20,
  },
});
