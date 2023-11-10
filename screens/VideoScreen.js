import React from "react";
// On importe les composants de react native
import { StyleSheet, SafeAreaView, Text, View, Dimensions } from "react-native";
// On importe Video
import { Video } from 'expo-av';
// On importe Constants from expo
import Constants from 'expo-constants';
// On récupère la largeur de l'écran
const { width } = Dimensions.get('window');

export default function VideoScreen(){
    return(
        <SafeAreaView style={ styles.container}>
            <Text style={ styles.titre }>Vidéo</Text>
            <View style={ styles.container2 }>
                <Text style={ styles.text}>
                Une vidéo de présentation du Système Solaire pour tout savoir de l'espace proche qui nous entoure.
                </Text>
                <Text style={ styles.text } >Bon visionnage !!</Text>
                <Video style={ styles.video } source={ require('../assets/videos/le-systeme-solaire.mp4')} useNativeControls usePoster posterSource={require('../assets/videos/poster.png')} posterStyle={ styles.video }></Video>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    video: {
        width: width - 24 ,
        height: (width - 24 ) * 720 / 1280,
    },
    container: {
        flex: 1,
        backgroundColor: "#0B3D8F",
        paddingTop: Constants.statusBarHeight,
        width: '100%',
    }, 
    titre:{
        color: "white",
        fontFamily: "meowScript",
        fontSize: 35,
        textAlign: "center",
    },
    container2:{
        flex: 1,
        paddingHorizontal: 12,
    },
    text:{
        color: "white",
        fontFamily: "openSansLight",
        fontSize: 18,
        textAlign: 'justify',
        marginBottom: 15,
    }
});