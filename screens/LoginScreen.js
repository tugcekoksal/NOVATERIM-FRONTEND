/*
============ Import react and react native modules ============ 
*/
import {
   StyleSheet,
   Text,
   View,
   KeyboardAvoidingView,
   TouchableOpacity,
   Image,
} from "react-native";
import { useState } from "react";
/*
============ Import redux ============ 
*/
import { useDispatch, useSelector } from "react-redux";
import { updateUser, logIn } from "../reducers/user";
/*
============ Import components ============ 
*/
import Button from "../components/Button";
import Inputs from "../components/Inputs";

export default function LoginScreen({ navigation }) {

	const user = useSelector((state )=> state.user.value);

	const dispatch = useDispatch();

   const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");

	const handleConnection = () => {

		const userData = JSON.stringify({
			email: email,
			password: password,
		});

		fetch("http://192.168.1.25:3000/users/signin", {
			method: "POST",
         headers: { "Content-Type": "application/json" },
         body: userData,
		})
		.then((response) => response.json())
		.then((data) => {
			if(data.result && user.token){
				navigation.navigate("TabNavigator", { screen: "Profile" });
				dispatch(logIn(true));
				setEmail('');
				setPassword('');
			}else if(data.result && !user.token) {
				const userData = data.data;
            console.log(userData)
				dispatch(logIn(true));
            dispatch(updateUser(userData));
				navigation.navigate("TabNavigator", { screen: "Profile" });
				setEmail('');
				setPassword('');
			}
		})

		navigation.navigate("TabNavigator", { screen: "Profile" })
	}

   return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
         <View style={styles.logoContainer}>
            <Image
               style={styles.image}
               source={require("../assets/images/Logo_Novarterim_Blanc@2x 3.png")}
            />
            <Text style={styles.textLogo}>L'INTERIM EN LIBERTÉ</Text>
         </View>

         <View style={styles.textInputContainer}>
            <View style={styles.inputBox}>
					<Inputs
						placeholder="Email"
						name="envelope"
						value={email}
						secureTextEntry={false}
						inputMode={"email"}
						onChangeText={(value) => setEmail(value)}
					/>
            </View>

            <View style={styles.inputBox}>
					<Inputs
						placeholder="Mot de passe"
						name="key"
						value={password}
						secureTextEntry={true}
						inputMode={"text"}
						onChangeText={(value) => setPassword(value)}
					/>
            </View>

            <TouchableOpacity
               onPress={() =>
                  navigation.navigate("TabNavigator", { screen: "Profile" })
               }
            >
               <Text style={styles.forgetPassWordText}>
                  Mot de passe perdu ?
               </Text>
            </TouchableOpacity>
         </View>

         <View style={styles.buttonContainer}>
            <Button
               onPress={() => handleConnection()}
               name="Me Connecter"
            />

            <Text style={styles.textButton}>OU</Text>

            <Button
               onPress={() => navigation.navigate("Signup")}
               name="Créer un compte"
            />
         </View>
      </KeyboardAvoidingView>
   );
}

const styles = StyleSheet.create({
   logoContainer: {
      width: "80%",
      height: "35%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      rowGap: 10,
      marginTop: 10,
   },
   textLogo: {
      fontSize: 21,
      color: "#ffffff",
   },
   image: {
      width: 212,
      height: 150,
   },
   textInputContainer: {
      width: "80%",
      height: "15%",
      marginTop: 30,
      justifyContent: "center",
   },
   forgetPassWordText: {
      padding: 5,
      textAlign: "right",
      color: "#ffffff",
      fontSize: 12,
   },
   input: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 40,
      width: "90%",
   },
   inputBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottomColor: "#2596be",
      borderBottomWidth: 1,
   },
   container: {
      flex: 1,
      backgroundColor: "rgb(0,110,177)",
      alignItems: "center",
      justifyContent: "center",
   },
   textButton: {
      fontSize: 18,
      fontWeight: "600",
      color: "white",
   },
   buttonContainer: {
      width: "80%",
      flex: 1,
      marginTop: 30,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      rowGap: 15,
   },
});
