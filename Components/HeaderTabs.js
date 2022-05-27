import React from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderButton from './HeaderButton';

const HeaderTabs = (props) => {

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
};

export default HeaderTabs;

const styles = StyleSheet.create({
  HeaderButton: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
