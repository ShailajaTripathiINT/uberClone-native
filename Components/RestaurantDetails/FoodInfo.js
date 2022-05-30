import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const FoodInfo = (props) => {
  return (
    <View style={styles.foodInfo}>
      <Text style={styles.titlestyle}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>

    </View>
  )
}

export default FoodInfo


const styles= StyleSheet.create({
foodInfo:{
width:240,
justifyContent:"space-evenly"
},
titlestyle:{
fontSize:19,
fontWeight:'600'
}

})