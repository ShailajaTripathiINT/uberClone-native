import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import FoodCategories from '../../Components/Categories/FoodCategories';

const CategoriesScreen = () => {
  return (
    <View>
      <Text>CategoriesScreen</Text>
      <FoodCategories/> 
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})