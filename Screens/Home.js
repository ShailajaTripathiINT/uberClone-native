import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderTabs from '../Components/Home/HeaderTabs';
import Searchbar from '../Components/Home/Searchbar';
import Categories from '../Components/Home/Categories';
import BottomTabs from '../Components/Home/BottomTabs';
import RestaurantItems from '../Components/Home/RestaurantItems';
import {localRestaurants} from '../Components/Home/RestaurantItems';
import {Divider} from 'react-native-elements';

// const YELP_API_KEY =
//   'ipKA6BcqyQsxDzeWShMICf-disTX4I_aCR6-Wxm0_fpX3ozQky8ASEXh62mU0pSRo034-t3O_1LBPQjhMy-egyfJstVcXCgylpVmBcz_qNUgQoRqLjNE5uxS2SWPYnYx';

const YELP_API_KEY =`_fRSDQRtWqhFaOLcmeDnmer3SLgOQNBMDtsagNHb-4UXN7bjq0GjTIwcTuWWKlKVeIcvwVICodaB8z35cgsRLXy45VS_YFVWyP9gNgbaYsiU4KbeKVJqMnqgjLOUYnYx`

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('Hollywood');
  const [activeTab, setActiveTab] = useState('Delivery');

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .then(json =>
        setRestaurantData(
          json.businesses.filter(business =>
            business.transactions.includes(activeTab.toLowerCase()),
          ),
        ),
      );
  };
  useEffect(() => {
   getRestaurantsFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={styles.headerHome}>
      <View style={styles.viewHome}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Searchbar cityHandler={setCity} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
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
