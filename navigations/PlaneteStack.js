// import React from "react";   on importe pas react 
// On importe le createStackNavigator pour instancier la pile
import { createStackNavigator } from "@react-navigation/stack";
// On instancie la pile de navigation
const Stack = createStackNavigator();
//on importe les écrans
import PlaneteScreen from "../screens/PlaneteScreen";

export default function PlaneteSceen() {
    return (
        <Stack.Navigator screenOptions={{ gestureEnabled: true }}>
            <Stack.Screen name="PlaneteScreen" component={PlaneteScreen} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
    )
}