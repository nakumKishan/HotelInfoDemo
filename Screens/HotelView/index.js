import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {colors} from "../../styles";
import Header from "./Components/Header";
import Bookmark from "./Components/Bookmark";
import About from "./Components/About";
import Stats from "./Components/Stats";
import Amenities from "./Components/Amenities";



export default function index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <Header />
        <View>
        <Bookmark />
        </View>
        <About />
        <Stats />
        <Amenities />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.darkBg
  }
});
