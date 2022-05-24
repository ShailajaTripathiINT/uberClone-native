import {SafeAreaView,View,StyleSheet } from 'react-native'
import React from 'react'
import HeaderTabs from '../Components/HeaderTabs'
import Searchbar from '../Components/Searchbar'
import Categories from '../Components/Categories'

export default function Home() {
  return (
    <SafeAreaView style={styles.headerHome}>
    <View style={styles.viewHome}>
    <HeaderTabs/>
    <Searchbar/>
   
    </View>
    <Categories/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerHome:{
backgroundColor:"#eee",
flex:1
  },

  viewHome :{
    backgroundColor :"white",
    padding:15 
   }
  
})