/*
============ Import react, react native & expo modules ============ 
*/
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
/*
============ Import modules ============ 
*/
import FontAwesome from "react-native-vector-icons/FontAwesome";
/*
============ Import redux ============ 
*/
import { useSelector, useDispatch } from "react-redux";
/*
============ Import Components ============ 
*/
import Upload from "../../components/Profile/Upload";
import Button from "../../components/Button";

/**
 *  DocumentScreen
 */

export default function Address({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <View>
            <Text>Adresse Domicile</Text>
          </View>

          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>L'adresse</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                marginBottom: 10,
                padding: 8,
                borderRadius: 10,
                margin: 15,
                backgroundColor: "white",
                marginTop: 5,
              }}
              placeholder="6 rue Sembat"
            />
          </View>

          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>
              Complément d'adresse
            </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                marginBottom: 10,
                padding: 8,
                borderRadius: 10,
                margin: 15,
                backgroundColor: "white",
                marginTop: 5,
              }}
              placeholder="no 10"
            />
          </View>

          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>Code Postale</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                marginBottom: 10,
                padding: 8,
                borderRadius: 10,
                margin: 15,
                backgroundColor: "white",
                marginTop: 5,
              }}
              placeholder="87000"
            />
          </View>

          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>Ville</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                marginBottom: 10,
                padding: 8,
                borderRadius: 10,
                margin: 15,
                backgroundColor: "white",
                marginTop: 5,
              }}
              placeholder="Limoges"
            />
          </View>

          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>Pays</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                marginBottom: 10,
                padding: 8,
                borderRadius: 10,
                margin: 15,
                backgroundColor: "white",
                marginTop: 5,
              }}
              placeholder="France"
            />
          </View>

          <View style={styles.bar}></View>

          <View>
            <Button>
              <Text>Valider les informations</Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    borderColor: "gray",
    borderRadius: 4,
    width: "80%",
    height: "15%",
    marginTop: 30,
    justifyContent: "center",
  },
  forgetPassWordText: {
    padding: 5,
    textAlign: "right",
    color: "#ff2f68",
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

  bar: {
    width: "80%",
    borderColor: "grey",
    borderWidth: 0.5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 55,
  },
});
