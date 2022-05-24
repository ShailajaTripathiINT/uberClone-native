import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const HeaderButton = (props) => {
  
  return (
    <View>  
    <TouchableOpacity style={{...styles.touchable,backgroundColor:props.activeTab===props.text?'black':'white'}}
    onPress={()=>props.setActiveTab(props.text)}>
     <Text style={{...styles.propsText,color:props.activeTab===props.text?'white':'black'}}>{props.text}</Text>
     </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
    touchable:{  
        paddingVertical:6,
        paddingHorizontal:16,
        borderRadius:30,
    },
    propsText:{
    fontSize:18,
    fontWeight:"900"
    }

})

export default HeaderButton