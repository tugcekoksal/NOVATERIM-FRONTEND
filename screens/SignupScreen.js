import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image
} from "react-native";
import { useState, useEffect } from "react";
import { updateUser } from "../reducers/user";
import Button from '../components/Button'
import Inputs from "../components/Inputs"



export default function SignupScreen({ navigation }) {
  
  const [name, setName] = useState("");
  const [ firstname, setFirstname ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ phoneNumber, setPhoneNumber ] = useState("");
  const [ password, setPassword ] = useState("");

  

  return (
    <KeyboardAvoidingView style={styles.container}
      behavior='padding'>

      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/Logo_Novarterim_Blanc@2x 3.png')}
        />
        <Text style={styles.textLogo}>
          L'INTERIM EN LIBERTÉ
        </Text>
      </View>

      <View style={styles.textInputContainer}>
        <Inputs
          placeholder="Nom"
          name="user"
          value={name}
          secureTextEntry={false}
          inputMode={'text'}
          onChangeText={(name) => setName(name)}
        />
        <Inputs
          placeholder="Prénom"
          name=""
          value={firstname}
          secureTextEntry={false}
          inputMode={'text'}
          onChangeText={(firstname) => setFirstname(firstname)}
        />
        <Inputs
          placeholder="Email"
          name="envelope"
          value={email}
          secureTextEntry={false}
          inputMode={'email'}
          onChangeText={(email) => setName(email)}
        />
        <Inputs
          placeholder="Numéro Téléphone"
          name="phone"
          value={phoneNumber}
          secureTextEntry={false}
          inputMode={'numeric'}
          onChangeText={(phoneNumber) => setName(phoneNumber)}
        />
        <Inputs
          placeholder="Mot de passe"
          name="key"
          value={password}
          secureTextEntry={true}
          inputMode={'text'}
          onChangeText={(password) => setName(password)}
        />

    </View>


      <View style={styles.buttonContainer}>

        <Button
          onPress={() => navigation.navigate("TabNavigator", { screen: 'Profile'})}
          name="Créer un compte"
        />
      </View>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  logoContainer:{
    width: '80%',
    height: '35%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    marginTop: 20,
  },
  textLogo: {
    fontSize: 21,
    color: '#ffffff',
  },
  image: {
    width: 212,
    height: 150,
  },
  textInputContainer: {
    width: '80%',
    height: '30%',
    justifyContent: 'flex-start',
  },
  forgetPassWordText:{
    padding: 5,
    textAlign: 'right',
    color: '#ffffff',
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontWeight: '600',
    color: 'white',
  },
  buttonContainer: {
    width: '80%',
    flex: 1,
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 15,
  }
})