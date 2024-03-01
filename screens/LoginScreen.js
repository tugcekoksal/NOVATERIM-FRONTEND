import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image
} from "react-native";
import { Link } from '@react-navigation/native';
import { useState } from "react"
import Button from '../components/Button'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({ navigation }) {
  const [text, setText] = useState("")
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">

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
          <View style={styles.inputBox}>
            <FontAwesome name="envelope" size={18} color={'#ffffff'}/>
            <TextInput
            placeholder="Email"
            placeholderTextColor={'#ffffff'}
            value={text}
            onChangeText={(text) => setText(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputBox}>
          <FontAwesome name="key" size={18} color={'#ffffff'}/>
          <TextInput
          placeholder="Mot de passe"
          placeholderTextColor={'#ffffff'}
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.input}
        />
        </View>

        <TouchableOpacity
          style={styles.forgetPassWordContainer}
          onPress={() => navigation.navigate("TabNavigator", { screen : 'Profile'})}>
            <Text style={styles.forgetPassWordText}>Mot de passe perdu ?</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.buttonContainer}>
        <Button 
          onPress={() => navigation.navigate("TabNavigator")}
          name="Me Connecter"
          />

        <Text style={styles.textButton}>
          OU
        </Text>

        <Button
          onPress={() => navigation.navigate("Signup")}
          name="Créer un compte"
        />
      </View>

    </KeyboardAvoidingView>
  );
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
    height: '15%',
    marginTop: 20,
    justifyContent: 'center',
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
    width: '100%',
    flex: 1,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 15,
  }
})
