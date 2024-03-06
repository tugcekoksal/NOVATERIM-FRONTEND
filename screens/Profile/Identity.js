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
import React, { useState, useRef } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
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
import Inputs from "../../components/Inputs";
import MyDatePicker from "../../components/Profile/Pickers/MyDatePicker";
import NationalityPicker from "../../components/Profile/Pickers/NationalityPicker";
import FamilyPicker from "../../components/Profile/Pickers/FamilyPicker";
import CountryPicker from "../../components/Profile/Pickers/CountryPicker";

/**
 *  DocumentScreen
 */

export default function Identity({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <View>
            <Text>Les informations du compte</Text>
          </View>

          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>
              Adresse Email
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
              placeholder="Votre adresse e-mail"
            />
          </View>

          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>Mot de Passe</Text>
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
              placeholder="*********"
            />
            <Text style={styles.forgetPassWordText}>Mot de passe oublié</Text>
          </View>

          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>
              Numéro de Téléphone
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
              placeholder="Votre numéro de téléphone"
            />
          </View>

          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>
              Date d'inscription
            </Text>
            <MyDatePicker />
          </View>

          <View style={styles.bar}></View>

          <View>
            <Text>Informations d'Identité</Text>
          </View>
          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>Nom</Text>
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
              placeholder="Nom"
            />
          </View>
          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>Prénom</Text>
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
              placeholder="Prénom"
            />
          </View>
          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>Nationalité</Text>
            <NationalityPicker
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
            />
          </View>

          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>
              Pays de naissance
            </Text>
            <CountryPicker
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
            />
          </View>

          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>
              Situation familiale
            </Text>
            <FamilyPicker
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
            />
          </View>

          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>
              Ville de naissance
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
              placeholder="Votre ville de naissance"
            />
          </View>

          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>
              Département de naissance
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
              placeholder="Votre département de naissance"
            />
          </View>

          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>
              Numéro de sécurité sociale
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
              placeholder="Votre numéro de sécurité sociale"
            />
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
