import {View, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import Form from '../../Components/Auth/Form';

const SigninScreen = ({navigation}) => {
  const image = {
    uri: 'https://media-cdn.tripadvisor.com/media/photo-s/18/f3/b5/65/mix-mingle-take-a-sit.jpg',
  };
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Form navigation={navigation} title="SignIn" />
    
      </ImageBackground>
    </View>
  );
};


export default SigninScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: '60%',
  },
});
