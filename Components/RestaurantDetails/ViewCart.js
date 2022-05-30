import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const ViewCart = () => {
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
      flex:1,
      alignItem:"center",
      flexDirection:"row",
      position:"absolute",
      bottom:30,
      zindex:999,
      justifyContent:"center"
     
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
