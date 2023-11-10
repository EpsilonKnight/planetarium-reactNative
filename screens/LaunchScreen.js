import React from "react";
// On importe les composants de react native
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, SafeAreaView} from "react-native";
// On importe la status-bar de expo
import { StatusBar } from 'expo-status-bar';
// On importe l'image de fond
import sky from "../assets/images/launch_bg.jpg";

export default function LaunchScreen({ navigation }){
    return(
        <ImageBackground source={sky} style={styles.container}>
            <SafeAreaView style={ styles.container2 }>
                <Text style={ styles.titre }>Planétarium</Text>
                <TouchableOpacity onPress={() => navigation.navigate("BottomTab")} style={ styles.cta }>
                    <Text style={ styles.ctaText }>Commencer</Text>
                </TouchableOpacity>
            </SafeAreaView>
            <StatusBar style="light" />
        </ImageBackground>
    );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width:"100%",
    },
    container2:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    titre:{
        fontFamily: "meowScript",
        color: "white",
        fontSize: 50,
        textShadowColor: "black",
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 6,
    },
    cta:{
        backgroundColor: "#2672EF",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    ctaText:{
        fontFamily: "nunito",
        color: "white",
        fontSize: 20,
    }
});