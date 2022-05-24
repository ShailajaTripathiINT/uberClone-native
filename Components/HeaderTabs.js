import React,{useState} from 'react';
import { View,StyleSheet } from 'react-native';
import HeaderButton from './HeaderButton';




const HeaderTabs=()=> {
  const [activeTab,setActiveTab]=useState('Delivery');
  return (
    <View style={styles.HeaderButton}>
    <HeaderButton text="Delivery"  activeTab ={activeTab} setActiveTab={setActiveTab}/>
    <HeaderButton text="Pickup"   activeTab ={activeTab} setActiveTab = {setActiveTab}/>
     </View>
  );
}

export default  HeaderTabs;

const styles = StyleSheet.create({
    HeaderButton:{
        flexDirection:"row",
        alignSelf:"center"
    },
    
})