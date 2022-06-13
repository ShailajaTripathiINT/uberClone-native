import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Form from '../../Components/Auth/Form';

const SignupScreen = ({navigation}) => {
  const image = {
   uri:'https://image.shutterstock.com/image-photo/welcome-card-restaurant-260nw-13660789.jpg',
  };
  return (
    <View style={styles.mainContainer}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Form navigation={navigation} title="SignUp" />
    </ImageBackground>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: '29%',
  },
});
