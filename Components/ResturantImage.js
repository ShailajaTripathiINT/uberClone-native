import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react';

const ResturantImage = () => {
  return (
    <>
      <Image
        source={{
          uri: 'https://images.adsttc.com/media/images/5e4c/10d7/6ee6/7e0b/9d00/087a/newsletter/Main_hall_5.jpg?1582043287',
        }}
        style={styles.resturantImage}
      />
      <TouchableOpacity style={styles.heartIcon}>
        <MaterialCommunityIcons
          name="heart-outline"
          size={25}
          color="#fff"></MaterialCommunityIcons>
      </TouchableOpacity>

      {/*new component is here */}
    </>
  );
};

export default ResturantImage;

const styles = StyleSheet.create({
  resturantImage: {
    width: '100%',
    height: 180,
  },
  heartIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
});
