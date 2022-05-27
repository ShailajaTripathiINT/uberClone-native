import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import About from '../Components/RestaurantDetails/About'
import { Divider } from 'react-native-elements'

const RestaurantDetails = () => {
  return (
    <View>
<About/>
   <Divider width={1.8} style={styles.aboutRestaurant}/>
    </View>
  )
}

export default RestaurantDetails
const styles = StyleSheet.create({

aboutRestaurant:{
    marginVertical:20,
    
},

})