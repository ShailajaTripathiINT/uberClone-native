import React from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderButton from './HeaderButton';

export default function HeaderTabs(props) {
  return (
    <View style={styles.HeaderButton}>
      <HeaderButton
        text="Delivery"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderButton: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
