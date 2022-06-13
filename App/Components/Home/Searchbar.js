import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../Utils/Styles/styles';
export default function Searchbar({cityHandler}) {
  return (
    <View style={styles.searchView}>
      <GooglePlacesAutocomplete
        //---------------------------------------
        //Google places api:
        // query={{key:'AtIJQb4r2zOEGWwX8I3IR6gaW-fFbj0cd25xHUd6mVtWRQH5htMiCEg60xM63aXd'}}
        //   onPress={(data,details= null ) =>{
        //     console.log(data.description)
        //     const city = data.description.split(',')[0];
        //   cityHandler(city);
        // }}
        ///-------------------------------------------------

        minLength={4}
        autoFocus={true}
        listViewDisplayed="auto"
        returnKeyType={'search'}
        fetchDetails={true}
        placeholder="Search"
        style={styles.searchBorder}
        renderLeftButton={() => (
          <View style={styles.searchIcon}>
            <Ionicons name="location-sharp" size={22} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.searchRight}>
            <AntDesign name="clockcircle" size={11} style={styles.antdesign} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchView: {
    marginTop: 10,
    flexDirection: 'row',
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  searchBorder: {
    textInput: {
      backgroundColor: Colors.primary600,

      borderRadius: 20,
      fontWeight: '400',
      marginTop: 7,
    },
    textInputContainer: {
      backgroundColor: Colors.primary600,

      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 5,
    },
  },
  searchIcon: {
    margin: 10,
  },
  searchRight: {
    flexDirection: 'row',
    marginHorizontal: 8,
    backgroundColor: Colors.primary500,
    borderRadius: 20,
    alignItems: 'center',
    flex: 0.4,
    justifyContent: 'center',
  },
  antdesign: {
    marginRight: 6,
  },
});
