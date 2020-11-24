import React from 'react';
import { Image, StyleSheet, View, Text } from "react-native";
import colors from '../config/colors';

function ViewImageScreen(props) {
    return(
    <View style={styles.container}>
    <View style={styles.closeIcon}></View>
    <View style={styles.deleteIcon}></View>
    <Image resizeMode="contain"
    style={styles.image} source={require("../chair.jpg")}/>
    </View>
    );
}
const styles = StyleSheet.create({

closeIcon:{
width: 50,
height:50,
backgroundColor:colors.primary,
position: "absolute",
top: 20,
left: 15,
},
container:{
    backgroundColor: "orange",
    flex:1,
},
image:{
  width: "100%",
  height: "112%",  
 },
 deleteIcon:{
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 20,
    left: 300,
 }
});
export default ViewImageScreen;