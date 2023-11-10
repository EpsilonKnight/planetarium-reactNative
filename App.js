//On importe la MainStack
import MainStack from './navigations/MainStack';
import HomeStack from './navigations/HomeStack';
// On importe NavigationContainer ( il ne peut n'y en avoir que 1 par appli ATTENTION)
import { NavigationContainer } from '@react-navigation/native';
// On importe useFonts pourcharger les fonts
import { useFonts } from 'expo-font';
import { View, Text } from 'react-native';

export default function App() {
  // ON déclare les fonts
  let [fontsLoaded] = useFonts({
    "meowScript": require("./assets/fonts/MeowScript-Regular.ttf"),
    "nunito": require("./assets/fonts/Nunito-Regular.ttf"),
    "openSansLight": require("./assets/fonts/OpenSans-Light.ttf"),
    "openSansMedium": require("./assets/fonts/OpenSans-Medium.ttf"),
  });
  //On verifie si la font est chargée
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, backgroundColor: "black", alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "white", fontSize: 50 }}>Loading</Text>
      </View>
    );

  }
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}


