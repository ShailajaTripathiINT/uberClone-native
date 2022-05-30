import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const RestaurantName = (props) => {
  return (
    <View>
      <Text style={styles.RestaurantTitle}>{props.name}</Text>
    </View>
  )
}

export default RestaurantName

const styles = StyleSheet.create({
    RestaurantTitle:{
        fontSize:29,
        fontWeight:'600',
        marginTop:10,
        marginHorizontal:15,
    }
})