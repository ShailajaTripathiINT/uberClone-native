import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Searchbar() {
  return (
    <View style={styles.searchView}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        style={styles.searchBorder}
        renderLeftButton={() => (
          <View style={styles.searchIcon}>
            <Ionicons name="location-sharp" size={24} />
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
    marginTop: 15,
    flexDirection: 'row',
  },
  searchBorder: {
    textInput: {
      backgroundColor: '#eee',
      borderRadius: 20,
      fontWeight: '700',
      marginTop: 7,
    },
    textInputContainer: {
      backgroundColor: '#eee',
      borderRadius: 50,
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
    },
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchRight: {
    flexDirection: 'row',
    marginRight: 8,
    backgroundColor: 'white',
    padding: 9,
    borderRadius: 30,
    alignItems: 'center',
  },
  antdesign: {
    marginRight: 6,
  },
});
