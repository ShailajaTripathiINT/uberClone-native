import React, {useState} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantImage(props) {
  const [isLike, setIslike] = useState(false);
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={styles.restaurantImage}
      />
      <TouchableOpacity
        style={styles.heartIcon}
        onPress={() => setIslike(!isLike)}>
        {isLike ? (
          <MaterialCommunityIcons name="heart" size={25} color="red" />
        ) : (
          <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        )}
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  restaurantImage: {
    width: '100%',
    height: 150,
  },
  heartIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
});
