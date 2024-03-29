/*
============ Import react, react native & expo modules ============ 
*/
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from "react-native";
import React, { useEffect, useState } from 'react';
/*
============ Import modules ============ 
*/
import FontAwesome from 'react-native-vector-icons/FontAwesome';
/*
============ Import redux ============ 
*/
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../reducers/user";
/*
============ Import Components ============ 
*/
import LogoutButton from "../../components/LogoutButton";
import Button from "../../components/Button";
import MainButton from "../../components/MainButton";



/**
 *  ProfileScreen
 */
export default function ProfileScreen({ navigation }) {

	const user = useSelector((state) => state.user.value);
	// console.log(user);
	const dispatch = useDispatch();

	// useEffect to display different profile image on each connection
	const [ link, setLink ] = useState(null);
	useEffect(() => {

		let randomNumber = Math.floor(Math.random() * 33) + 1;
		let newImage = `https://xsgames.co/randomusers/assets/avatars/pixel/${randomNumber}.jpg`;

		setLink(newImage);

	}, [user.isConnected])

	// logout function
	const handleLogout = () => {
		dispatch(logOut());
		navigation.navigate("Login");
	}


   return (
      <View style={styles.container}>
			<StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

         <View style={styles.header}>
				<TouchableOpacity
					onPress={() => navigation.navigate('Settings')}
					>
					<FontAwesome name="gear" size={27} color={'#929292'} />
				</TouchableOpacity>

				<Text style={{fontSize: 20, fontWeight: '700', color: '#1F5895'}}>
					NOVATERIM
				</Text>

				<TouchableOpacity 
					onPress={() => navigation.navigate('ChatSection')}
					>
					<FontAwesome name="comments" size={27} color={'#929292'} />
				</TouchableOpacity>
			</View>

			<View style={styles.content}>
				<View style={styles.profileContainer}>
					<View style={styles.profileImg}>
						<Image
							style={styles.avatar}
							source={require('../../assets/profile-default.512x511.png')}
						/>
					</View>
					<View style={styles.description}>
						<Text style={{fontSize: 14, fontWeight: '600', color: '#dbdbdb'}}>Welcome,</Text>
						<Text style={{fontSize: 18, fontWeight: '600', color: '#fff'}}> {user.identity.firstName}</Text>
						<Text style={{fontSize: 14, fontWeight: '600', color: '#dbdbdb'}}>Adresse: {user.email}</Text>
						<Text style={{fontSize: 14, fontWeight: '600', color: '#dbdbdb'}}>Tel : {user.identity.phoneNumber}</Text>
					</View>
				</View>

				<View style={styles.buttonContainer}>
					<View style={styles.buttonBox}>
						<Button 
							onPress={() => navigation.navigate('DocumentsStackGroup')}
							name="Mes Justificatifs" 
							/>
					</View>
					<View style={styles.buttonBox}>
						<Button
							onPress={() => navigation.navigate('TopTabsGroup')}
							name="Mes Infos Personnelles" />
					</View>
				</View>

				<View style={styles.logoutButton}>
					<MainButton name="Déconnexion" onPress={() => handleLogout()} color={'#a4a5a7'} colorText={"white"}/>
				</View>
			</View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#F8F8F8",
   },
	header: {
		position: 'fixed',
		width: '100%',
		height: '10%',
		paddingTop: 25,
		paddingRight: 10,
		marginTop: 50,
		paddingLeft: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	content: {
		height: '90%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		rowGap: 60
	},
	profileContainer: {
		width: '100%',
		height: '30%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		rowGap: 20,
		backgroundColor: "#00638F",
	},
	description: {
		width: '80%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		rowGap: 3
	},
   buttonContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '20%',
		width: '100%'
   },
	buttonBox: {
		width: '80%',
		borderWidth: 1,
		borderColor: '#00638F',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		shadowColor: "#000000",
		// shadowOffset: {
		// width: 0,
		// height: 4,
		// },
		// shadowOpacity:  0.19,
		// shadowRadius: 5.62,
		elevation: 6
	},
	logoutButton: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '80%',
		// shadowColor: "#000000",
		// shadowOffset: {
		// width: 0,
		// height: 4,
		// },
		// shadowOpacity:  0.19,
		// shadowRadius: 5.62,
		elevation: 6
	},
	avatar: {
		borderRadius: 50,
		width: 74,
		height: 74,
	},
	profileImg: {
		backgroundColor: '#fff',
		width: 74,
		height: 74,
		borderRadius: 50,
	}
});
