import {

  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native"
import { useState } from "react"

export default function SignupScreen({ navigation }) {
  const [text, setText] = useState("")
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
     
      <TextInput
        placeholder="Your name"
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        
        onPress={() => navigation.navigate("TabNavigator")}
      >
        <Text>Signin</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 390,
    height: 390,
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "red",
  },
  input: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderBottomColor: "#2596be",
    borderBottomWidth: 1,
    width: "90%",
  },

  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "90%",
    marginTop: 20,

    padding: 10,
    backgroundColor: "#2596be",
    borderRadius: 15,

    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: 400,
  },
})
