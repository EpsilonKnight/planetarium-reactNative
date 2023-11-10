import React from 'react';
// On importe createStackNavigator qui va nous permettre de créer une pile de navigation
import { createStackNavigator} from "@react-navigation/stack";
// On importe les écrans
import LaunchScreen from "../screens/LaunchScreen";
import BottomTab from './BottomTab';
// On instancie la pile de navigation
const Stack = createStackNavigator();

export default function MainStack(){
    return(
        <Stack.Navigator screenOptions={{ gestureEnabled: true }}>
            <Stack.Screen name="LaunchScreen" component={LaunchScreen} options={{headerShown: false}}/>
            <Stack.Screen name="BottomTab" component = { BottomTab } options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}