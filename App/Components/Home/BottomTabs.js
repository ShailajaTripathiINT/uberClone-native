import React from 'react';
import {StyleSheet, View} from 'react-native';
import BottomIcon from './BottomIcon';

export default function BottomTabs() {
  return (
    <View style={styles.BottomDiv}>
      <BottomIcon icon="home" text="Home" />
      <BottomIcon icon="search" text="Browse" />
      <BottomIcon icon="shopping-bag" text="Grocery" />
      <BottomIcon icon="receipt" text="Orders" />
      <BottomIcon icon="user" text="Account" />
    </View>
  );
}

const styles = StyleSheet.create({
  BottomDiv: {
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
});
