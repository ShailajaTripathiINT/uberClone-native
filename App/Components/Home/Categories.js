import React from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import {Items} from '../../Utils/Data/Data';
import {Colors} from '../../Utils/Styles/styles';

export default function Categories(props) {
  const onpress=()=>{
    console.log("pressed")
  }
  return (
    <View style={style.categoryMainContainer}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={Items}
        renderItem={item => {
          // console.log("data calling")
          return (
            <Pressable
              style={({pressed}) => {
                pressed
                  ? [style.categoryContainer, {opacity: 0.75}]
                  : style.categoryContainer;
              }}
              
              android_ripple={{color: 'gray', height: 40}}>
              <View
                style={{
                  borderRadius: 20,
                  height: 60,
                  width: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 4,
                  backgroundColor: 'white',
                }}>
                <Image source={item.item.image} style={style.categoryImg} />
              </View>
              <Text style={style.categoryText}>{item.item.text}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  categoryMainContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 1,
    paddingLeft: 10,
  },
  categoryContainer: {
    alignItems: 'center',
    marginHorizontal:20,
    elevation: 2,
  },
  categoryImg: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
    // backgroundColor:'green'
  },
  categoryText: {
    fontSize: 10,
    fontWeight: '400',
  },
});
