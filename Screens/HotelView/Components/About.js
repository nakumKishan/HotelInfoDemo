import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Feather} from '@expo/vector-icons'
import {colors,gs} from "../../../styles"

const hotel = {
    name:"Mt. Catlin Hotel",
    price:"$967",
    location : "New York",
    about: "This is hotel and this is beautiful hotel.This is 5 Star rated Hotel.This is hotel and this is beautiful hotel.This is 5 Star rated Hotel.This is hotel and this is beautiful hotel.This is 5 Star rated Hotel."
}
export default function About() {
  return (
    <View style={styles.container}>
      <Text style={gs.title}>{hotel.name}</Text>
      <Text style={styles.info}>
          {hotel.price} &#8226; {hotel.location}
          </Text>
          <View style={gs.divider}/>
          <Text style={gs.sectionTitle}>About {hotel.name}</Text>
          <Text style={styles.about}>{hotel.about}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      ...gs.sectionContainer,
      backgroundColor: colors.darkBg
          },
          info:{
              color:colors.textSec,
              fontWeight:"600",
              marginTop:4
          },
          about:{
              fontSize:13,
              fontWeight:"600",
              color:colors.textSec,
              marginTop:6,
              lineHeight:20,
        
          }
});
