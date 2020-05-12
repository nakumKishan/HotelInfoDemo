import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {colors,gs} from "../../../styles"
import {AntDesign,Entypo} from '@expo/vector-icons'

export default function Header() {
  return (
    <View>
      <Image source={require('../../../assets/hotel.jpg')} style = {{width:"100%",height:400}} />

      <View style={styles.topButton}>
        <AntDesign name="close" size={24} color="#fff" />
        <View style={gs.rowCenter}>
            <AntDesign name="save" size={24} style={styles.topButtonRight} />
            <AntDesign name="sharealt" size={24} style={styles.topButtonRight}/>
            <Entypo name = "dots-three-vertical" size={18} style={styles.topButtonRight}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    topButton:{
        ...gs.rowBetween,
        position:'absolute',
        top:64,
        left:32,
        right:32

    },
    topButtonRight:{
        marginLeft:12,
        color:'#fff'
        }
})
