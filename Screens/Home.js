import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import React, {useState,useEffect} from 'react';
import HeaderTabs from '../Components/HeaderTabs';
import Searchbar from '../Components/Searchbar';
import Categories from '../Components/Categories';
import RestaurantItems, {localRestaurants} from '../Components/RestaurantItems';

const YELP_API_KEY ="ipKA6BcqyQsxDzeWShMICf-disTX4I_aCR6-Wxm0_fpX3ozQky8ASEXh62mU0pSRo034-t3O_1LBPQjhMy-egyfJstVcXCgylpVmBcz_qNUgQoRqLjNE5uxS2SWPYnYx"

export default function Home() {

const [restaurantData, setRestaurantData] = useState([localRestaurants]);
const [city,setCity] = useState('Hollywood');
const [activeTab,setActiveTab]=useState ('Delivery')

const getRestaurantsFromYelp = () =>{

  const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
  
const apiOptions = {
  headers:{
    Authorization: `Bearer ${YELP_API_KEY}`
  },
};

  return fetch(yelpUrl, apiOptions)
  .then((res)=> res.json()) 
  .then((json) => setRestaurantData(json.businesses.filter ((business)=>business.transactions.includes(activeTab.toLowerCase()))));
};
useEffect(() => {
  getRestaurantsFromYelp();
}, [city,activeTab]);
  return (
    <SafeAreaView style={styles.headerHome}>

      <View style={styles.viewHome}>
        <HeaderTabs  activeTab={activeTab} setActiveTab={setActiveTab}/>
        <Searchbar cityHandler={setCity} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData}/>
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
