import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Divider} from 'react-native-elements';
import Categories from '../../Components/Home/Categories';
import HeaderTabs from '../../Components/Home/HeaderTabs';
import RestaurantItems from '../../Components/Home/RestaurantItems';
import Searchbar from '../../Components/Home/Searchbar';
import BottomTabs from '../../Components/Home/BottomTabs';
import {LocalRestaurants} from '../../Utils/Data/Data';
import LottieView from 'lottie-react-native';
import {YELP_API_KEY} from '../../Utils/Data/Data';

const Homescreen = ({navigation}) => {
  const [restaurantData, setRestaurantData] = useState(LocalRestaurants);
  const [timer, SetTimer] = useState(true);
  const [city, setCity] = useState('San Francisco');
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
    setTimeout(() => {
      SetTimer(false);
    }, 2000);
  }, []);
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (

    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.headerContainer}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Searchbar cityHandler={setCity} />
      </View>
      <View>
        <Categories  restaurantData={restaurantData} navigation={navigation}/>
        {timer ? (
          <View
            style={{
              backgroundColor: 'white',
              justifyContent: 'flex-start',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}>
            <LottieView
              style={{height: 100}}
              source={require('../../Assests/Animations/foodloader.json')}
              autoPlay
              speed={3}
            />
            
          </View>
        ) : (
          <RestaurantItems
            restaurantData={restaurantData}
            navigation={navigation}
          />
        )}
      </View>
      <Divider width={1} />
      <View
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 0,
          top: '90%',
          borderTop: 20,
          backgroundColor: 'white',
        }}>
        <BottomTabs />
      </View>
    </SafeAreaView>
  );
};

export default Homescreen;
const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#eee',
    flex: 1,
  },
  headerContainer: {
    backgroundColor: 'white',
    padding: 5,
  },
});
