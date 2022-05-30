import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const RestaurantTitle = (props) => {
  return (
    <View>
      <Text style={styles.RestaurantTitle}>{props.title}</Text>
    </View>
  )
}

export default RestaurantTitle


const styles = StyleSheet.create({
    RestaurantTitle:{
        fontSize:29,
        fontWeight:'600',
        marginTop:10,
        marginHorizontal:15,

    }
})