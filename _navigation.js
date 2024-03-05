/**
 *  Import react native navigation
 */
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
/**
 *  Import react, react native & expo modules
 */
import React, { useRef, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable';
/**
 *  Import Redux
 */
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user";
/**
 *  Import react native Screens
 */
import ContractScreen from "./screens/ContractScreen/ContractScreen";
import NotificationsScreen from "./screens/NotificationsScreen/NotificationsScreen";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import SalariesScreen from "./screens/Salaries/SalariesScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
/**
 *  Import regular files
 */
import Colors from './constants/Colors';




/**
 *  Store configuration
 */
const store = configureStore({
   reducer: { user },
});


/**
 *  Bottom Tab Navigation SETUP
 */

//* routes array declaration *//

const TabArray = [
   {
      route: "Notifications",
      label: "Notifications",
      type: Ionicons,
      activeIcon: "notifications",
      inactiveIcon: "notifications-outline",
      component: NotificationsScreen,
   },
   {
      route: "Salaries",
      label: "Salaries",
      type: Ionicons,
      activeIcon: "wallet",
      inactiveIcon: "wallet-outline",
      component: SalariesScreen,
   },
   {
      route: "Contract",
      label: "Contract",
      type: Ionicons,
      activeIcon: "document-text",
      inactiveIcon: "document-text-outline",
      component: ContractScreen,
   },
   {
      route: "Profile",
      label: "Profile",
      type: Ionicons,
      activeIcon: "person-circle",
      inactiveIcon: "person-circle-outline",
      component: ProfileScreen,
   },
];

/**
 *  Bottom Tab Navigation SETUP
 */
const Tab = createBottomTabNavigator();

//* Custom bottom tab memu *//
const TabButton = (props) => {
	const { item, onPress, accessibilityState } = props;
	const focused = accessibilityState.selected;
	const viewRef = useRef(null);

	useEffect(() => {
		if(focused){
			viewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 1.6 }});
		}else {
			viewRef.current.animate({ 0: { scale: 1.6 }, 1: { scale: 1 }});
		}

	}, [focused])

	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={1}
			style={styles.container}>
			<Animatable.View
				ref={viewRef}
				duration={300}
				style={styles.container}>
				<Ionicons name={focused ? item.activeIcon : item.inactiveIcon} size={25} color={focused ? Colors.primary : Colors.primaryLite}/>
			</Animatable.View>	
		</TouchableOpacity>
	);

}


/**
 *  Tab Navigator
 */
const TabNavigator = () => {
   return (
      <Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					height: 70,
					position: 'absolute',
					left: 10,
					right: 10,
					bottom: 10,
					borderRadius: 10,
					shadowColor: '#000000',
					shadowOffset: {
						width: 0,
						height: 7,
						},
					shadowOpacity:  0.17,
					shadowRadius: 3.05,
					elevation: 4
				}
			}}
		>
         {TabArray.map((item, i) => {
            return <Tab.Screen key={i} name={item.route} component={item.component} 
					options={{
						tabBarShowLabel: false,
						tabBarButton: (props) => <TabButton {...props} item={item} /> 
					}}
				/>;
         })}
      </Tab.Navigator>
   );
};


/**
 *  Nesting navigators - Profile - 
 */


/**
 *  Stack Navigator
 */
const Stack = createNativeStackNavigator();
export default function App() {
   return (
      <Provider store={store}>
         <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
               <Stack.Screen name="Login" component={LoginScreen} />
               <Stack.Screen name="Signup" component={SignupScreen} />
               <Stack.Screen name="TabNavigator" component={TabNavigator} />
            </Stack.Navigator>
         </NavigationContainer>
      </Provider>
   );
}


/**
 *  Styles
 */
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
});