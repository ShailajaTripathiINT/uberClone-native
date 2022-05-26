import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import React, {useState,useEffect} from 'react';
import HeaderTabs from '../Components/HeaderTabs';
import Searchbar from '../Components/Searchbar';
import Categories from '../Components/Categories';
import RestaurantItems, {localRestaurants} from '../Components/RestaurantItems';

const YELP_API_KEY ="ipKA6BcqyQsxDzeWShMICf-disTX4I_aCR6-Wxm0_fpX3ozQky8ASEXh62mU0pSRo034-t3O_1LBPQjhMy-egyfJstVcXCgylpVmBcz_qNUgQoRqLjNE5uxS2SWPYnYx"

export default function Home() {

const [restaurantData, setRestaurantData] = useState([localRestaurants]);

const getRestaurantsFromYelp = () =>{

  const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood`
  
const apiOptions = {
  headers:{
    Authorization: `Bearer ${YELP_API_KEY}`
  },
};

  return fetch(yelpUrl,apiOptions)
  .then((res)=>res.json()) 
  .then((json) => setRestaurantData(json.businesses));

};
useEffect(() => {
  getRestaurantsFromYelp();
}, []);
  return (
    <SafeAreaView style={styles.headerHome}>
      <View style={styles.viewHome}>
        <HeaderTabs />
        <Searchbar />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />

        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerHome: {
    backgroundColor: '#eee',
    flex: 1,
  },

  viewHome: {
    backgroundColor: 'white',
    padding: 15,
  },
});
