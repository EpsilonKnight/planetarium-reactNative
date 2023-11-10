// On importe createBottomTabNavigator qui va nous permettre de créer une barre de navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// On importe les écrans
import HomeStack from "./HomeStack";
import PlaneteStack from "./PlaneteStack";
// On importe les icones
import { Ionicons } from '@expo/vector-icons';
// On instancie la barre de navigation
const Tab = createBottomTabNavigator();

const inactiveTabColor = "grey";
// On déclare les icones utilisés dans la barre de navigation
const activeHomeColor = "#470A91";
const IconHome = ( props ) => (<Ionicons name="ios-home" size={props.size} color={ props.focused ? activeHomeColor : inactiveTabColor} />);
const activePlaneteColor = "#03B5D9";
const IconPlanete = (props) => (<Ionicons name="planet" size={props.size} color={ props.focused ? activePlaneteColor : inactiveTabColor} />);


export default function BottomTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="HomeStack" component={ HomeStack } options={{headerShown: false, tabBarIcon: IconHome, tabBarLabel: "Accueil", tabBarActiveTintColor: activeHomeColor, tabBarInactiveTintColor: inactiveTabColor }}/>
            <Tab.Screen name="PlaneteStack" component={ PlaneteStack } options={{headerShown: false, tabBarIcon: IconPlanete, tabBarLabel: "Planètes", tabBarActiveTintColor: activePlaneteColor, tabBarInactiveTintColor: inactiveTabColor }}/>
        </Tab.Navigator>
    );
}