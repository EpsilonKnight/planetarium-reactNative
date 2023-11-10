import React from 'react';
// On importe createStackNavigator qui va nous permettre de créer une pile de navigation
import { createStackNavigator} from "@react-navigation/stack";
// On importe les écrans
import HomeScreen from '../screens/HomeScreen';
import VideoScreen from '../screens/VideoScreen';
// On instancie la pile de navigation
const Stack = createStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator screenOptions={{ gestureEnabled: true }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="VideoScreen" component={VideoScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}