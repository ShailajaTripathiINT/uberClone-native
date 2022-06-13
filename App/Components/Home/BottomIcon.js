import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomIcon(props) {
  return (
    <TouchableOpacity>
      <FontAwesome5 name={props.icon} size={25} style={styles.BottomIcon} />
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
} 

const styles = StyleSheet.create({
  BottomIcon: {
    marginBottom: 3,
    alignSelf: 'center',
  },
});
