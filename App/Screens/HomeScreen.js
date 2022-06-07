import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements';
import HeaderTabs from '../Components/Home/HeaderTabs';
import Searchbar from '../Components/Home/Searchbar';
import Categories from '../Components/Home/Categories';
import BottomTabs from '../Components/Home/BottomTabs';
import RestaurantItems from '../Components/Home/RestaurantItems';
import { LocalRestaurants } from '../Utils/Data/Data';
import {YELP_API_KEY} from '../Utils/Data/Data';
import { Colors } from '../Utils/Styles/styles';
export default function HomeScreen({navigation}) {
  const [restaurantData, setRestaurantData] = useState(LocalRestaurants);
  const [city, setCity] = useState('Hollywood');
  const [activeTab, setActiveTab] = useState('Delivery');

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

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
  return (
    <SafeAreaView style={styles.headerHome}>
      <View style={styles.viewHome}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Searchbar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerHome: {
    backgroundColor: Colors.primary600,
   
  },
  viewHome: {
    backgroundColor:  Colors.primary500,
    padding: 15,
  },
});
