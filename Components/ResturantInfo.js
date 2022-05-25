import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function ResturantInfo() {
  return (
    <View style={styles.resturantImgView}>
      {/* left section */}
      <View>
        <Text style={styles.resturantTitle}>
          Farmhouse Kitchen Thai Cuisine
        </Text>
        <Text style={styles.resturantTime}>30-45 min</Text>
      </View>

      {/*right section */}
      <View style={styles.resturantRating}>
        <Text>4.5</Text>
      </View>
      {/* ----------- */}
    </View>
  );
}

const styles = StyleSheet.create({
  resturantImgView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  resturantTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  resturantTime: {
    fontSize: 13,
    color: 'grey',
  },
  resturantRating: {
    backgroundColor: '#eee',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});
