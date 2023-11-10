import React, { useEffect} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground, FlatList, SafeAreaView } from 'react-native';
import bg from "../assets/images/black-sun.jpg";
import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants";
import axios from 'axios';

export default function PlaneteScreen({navigation}){
    
    return(
       <ImageBackground source={bg} style={styles.container}>
        <SafeAreaView>

        </SafeAreaView>
       </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        resizeMode: "cover",
    }
})