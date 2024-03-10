/*
============ Import react and react native modules ============ 
*/
import {
  React,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from "react-native";
import { useState } from "react";
/*
============ Import redux and reducers ============ 
*/
import { useDispatch } from "react-redux";
import { updateUser } from "../reducers/user";
/*
============ Import components ============ 
*/
import Button from "../components/Button";
import Inputs from "../components/Inputs";
import MainButton from "../components/MainButton";

export default function SignupScreen({ navigation }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    const formData = JSON.stringify({
      name: name,
      firstName: firstName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    
    });

    fetch("http://192.168.1.25:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          const userData = data.data;
          console.log(userData)
       
          dispatch(updateUser(userData));

          navigation.navigate("TabNavigator", { screen: "Profile" });
          setName("");
          setFirstName("");
          setEmail("");
          setPhoneNumber("");
          setPassword("");
        }

      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={-50}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/Logo_Novarterim_Blanc@2x 3.png")}
        />
        <Text style={styles.textLogo}>L'INTERIM EN LIBERTÉ</Text>
      </View>

      <View style={styles.textInputContainer}>
        <Inputs
          placeholder="Nom"
          name="user"
          value={name}
          secureTextEntry={false}
          inputMode={"text"}
          onChangeText={(value) => setName(value)}
        />
        <Inputs
          placeholder="Prénom"
          name="user"
          value={firstName}
          secureTextEntry={false}
          inputMode={"text"}
          onChangeText={(value) => setFirstName(value)}
        />
        <Inputs
          placeholder="Email"
          name="envelope"
          value={email}
          secureTextEntry={false}
          inputMode={"email"}
          onChangeText={(value) => setEmail(value)}
        />
        <Inputs
          placeholder="Numéro Téléphone"
          name="phone"
          value={phoneNumber}
          secureTextEntry={false}
          inputMode={"numeric"}
          onChangeText={(value) => setPhoneNumber(value)}
        />
        <Inputs
          placeholder="Mot de passe"
          name="key"
          value={password}
          secureTextEntry={true}
          inputMode={"text"}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <View style={styles.buttonContainer}>
        {/* <Button onPress={() => handleSignUp()} name="Créer un compte" /> */}
        <MainButton name="Créer un compte" onPress={() => handleSignUp()} color={'white'} colorText={'#1F5895'}/>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Vous avez déjà un compte ? Connectez-vous</Text>
        </TouchableOpacity>
      </View>
     
     
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
    marginTop: 20,
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
    height: "30%",
    justifyContent: "flex-start",
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 15,
  },
  linkText: {
    color: '#ffffff',
    fontSize: 14, 
   
  },
 
});
