import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Colors } from '../../Utils/Styles/styles';

export default function HeaderButton(props) {
  return (
    <>
      <TouchableOpacity
        style={{
          ...styles.touchable,
          backgroundColor: props.activeTab === props.text ? Colors.primary700 : Colors.primary500,
        }}
        onPress={() => props.setActiveTab(props.text)}>
        <Text
          style={{
            ...styles.propsText,
            color: props.activeTab === props.text ? Colors.primary500 :Colors.primary700,
          }}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  touchable: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  propsText: {
    fontSize: 18,
    fontWeight: '900',
  },
});
