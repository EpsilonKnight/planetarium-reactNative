import React from "react";
// On importe les composants de React Native
import { StyleSheet, SafeAreaView, Image, Text, Dimensions, TouchableOpacity, ScrollView } from "react-native";
// On importe Constants de expo
import Constants from "expo-constants";
// On récupère la largeur de l'écran
const windowWidth = Dimensions.get('window').width;
// On importe l'image d'illustation
import illus from "../assets/images/home-terre.jpg";
// 1621 * 608
// windowWidth-24  * ?
const illusHeight = (windowWidth - 24) * 608 / 1621;

export default function HomeScreen({ navigation }) {
    return(
        <SafeAreaView style={ styles.container}>
            <Text style={ styles.titre }>Planétarium</Text>
            <ScrollView style={ styles.scroll }>
                <Text style={ styles.paragraphe }>Une application pour mieux connaître les planètes du Système Solaire auquel appartient notre planète bleue la Terre.</Text>
                {/* On ajoute l'illustration */}
                <Image source={illus} style={ styles.illus }/>
                <TouchableOpacity style={ styles.cta} onPress={()=> navigation.navigate("VideoScreen")}>
                    <Text style={ styles.ctaText }>Voir la vidéo</Text>
                </TouchableOpacity>
                <Text style={ styles.paragraphe }>Vous découvrirez également quelques bizarreries de l'espace comme des objets insolites envoyés dans l'espace par l'Humain ou encore des phénomènes étranges dans cet infini qui nous entoure.</Text>
                <Text style={ styles.paragraphe }>Bon voyage...</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
    scroll:{
        paddingHorizontal: 12,
        paddingBottom: 12
    },
    paragraphe: {
        color: "white",
        fontFamily: "openSansLight",
        fontSize: 18,
        textAlign: 'justify',
        marginBottom: 15,
    },
    illus:{
        width: windowWidth - 24,
        height: illusHeight,
    },
    cta:{
        backgroundColor: "#F0F305",
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginVertical:10,
        width: "60%",
        marginLeft: "20%",
    }, 
    ctaText:{
        color: "#0B3D8F",
        fontFamily: "nunito",
        fontSize: 20,
        textAlign: "center",
    }
});