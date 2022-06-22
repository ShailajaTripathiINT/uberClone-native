import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import MenuItem from '../../Components/RestaurantDetails/MenuItem';

const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: 'Bologna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image:
          'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
      },
    ],
  });

  const {items, restaurantName} = useSelector(
    state => state.cartReducer.selectedItems,
  );

  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  // useEffect(() => {
  // const db = firebase.firestore();
  //   const unsubscribe = db
  //     .collection("orders")
  //     .orderBy("createdAt", "desc")
  //     .limit(1)
  //     .onSnapshot((snapshot) => {
  //       snapshot.docs.map((doc) => {
  //         setLastOrder(doc.data());
  //       });
  //     });

  //   return () => unsubscribe();
  // }, []);

  return (
    <SafeAreaView style={styles.safeview}>
      <View style={styles.mainview}>
        <LottieView
          style={styles.lottieview1}
          source={require('../../Assests/Animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={styles.orderHead}>
          Your Order at restaurant {restaurantName} has been placed for{' '}
          {totalUSD}
        </Text>
        <ScrollView>
          <MenuItem
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
          <LottieView
            style={styles.lottieview2}
            source={require('../../Assests/Animations/cooking.json')}
            autoPlay
            speed={1}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({
  safeview: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainview: {
    margin: 15,
    alignItems: 'center',
    height: '100%',
  },
  lottieview1: {
    height: 100,
    alignItems: 'center',
    marginBottom: 30,
  },
  orderHead: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  lottieview2: {
    height: 200,
    alignSelf: 'center',
  },
});
