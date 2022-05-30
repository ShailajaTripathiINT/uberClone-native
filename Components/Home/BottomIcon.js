import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomIcon = props => {
  return (
    <TouchableOpacity>
    <View style={styles.iconDiv}>
      <FontAwesome5 name={props.icon} size={25} style={styles.BottomIcon} />
      <Text>{props.text}</Text>
    </View>
    </TouchableOpacity>
  );
};

export default BottomIcon;

const styles = StyleSheet.create({
  iconDiv: {},
  BottomIcon: {
    marginBottom: 3,
    alignSelf: 'center',
  },
});