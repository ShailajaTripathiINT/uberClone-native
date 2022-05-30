import { View} from 'react-native'
import React from 'react'
import RestaurantImage from './RestaurantImage';
import RestaurantTitle from './RestaurantTitle';
import RestaurantDescription from './RestaurantDescription';



const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oLQU6hR9ylUNoa0ysyrQl3go8RNgWk695g&usqp=CAU'
const title ='Farmhouse Kitchen Thai cuisine'
const description ='Thai . Comfort Food.$$💳 . 4⭐(2913+)';

const About = () => {
  return (
    <View>
   <RestaurantImage image  = {image}/>
   <RestaurantTitle title = {title}/>
   <RestaurantDescription description ={description}/>
    </View>
  )
}

export default About