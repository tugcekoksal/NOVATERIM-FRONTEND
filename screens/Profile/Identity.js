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
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native"
import React, { useState, useRef, useEffect } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"

/*
============ Import modules ============ 
*/
import FontAwesome from "react-native-vector-icons/FontAwesome"
/*
============ Import redux ============ 
*/
import { useSelector, useDispatch } from "react-redux"
import user, { updateIdentity, updateUser } from "../../reducers/user"
/*
============ Import Components ============ 
*/
import MyDatePicker from "../../components/Profile/Pickers/MyDatePicker"
import NationalityPicker from "../../components/Profile/Pickers/NationalityPicker"
import FamilyPicker from "../../components/Profile/Pickers/FamilyPicker"
import CountryPicker from "../../components/Profile/Pickers/CountryPicker"
import MainButton from "../../components/MainButton"

export default function Identity({ navigation }) {
  const userFields = [
    "phoneNumber",
    "name",
    "firstName",
    "birthDate",
    "nationality",
    "countryBirth",
    "familySituation",
    "birthTown",
    "birthDistrict",
    "socialSecurityNumber",
  ]

  let initialState = {}
  let initialFocusState = {}
  userFields.forEach((field) => {
    initialState[field] = ""
    initialFocusState[field] = false
  })
  const [userData, setUserData] = useState(initialState)
  const [inputFocused, setInputFocused] = useState(initialFocusState)
  const [infosUser, setInfosUser] = useState("")
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.value.token)

  useEffect(() => {
    if (token) {
      const url = `http://192.168.1.178:3000/users/${token}`
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          let fetchedData = {}
          userFields.forEach((field) => {
            fetchedData[field] =
              data.identity && data.identity[field] ? data.identity[field] : ""
          })
          setInfosUser(data) // If needed
          setUserData(fetchedData)
        })
    }
  }, [token])

  const handleUpdate = async () => {
    try {
      const identityData = {}
      userFields.forEach((field) => {
        identityData[field] =
          field === "phoneNumber" ? Number(userData[field]) : userData[field]
      })

      const dataForBackend = { identity: identityData } // Now sending only identity object to your backend

      const response = await fetch(
        `http://192.168.1.178:3000/users/update/${token}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataForBackend),
        }
      )

      if (!response.ok) {
        const errorMessage = await response.json()
        throw new Error("Error in response")
      }

      const updatedItem = await response.json()
      dispatch(updateUser(updatedItem))
      Alert.alert(
        "Update Successful",
        "Your information has been successfully updated.",
        [{ text: "OK" }]
      )
    } catch (error) {
      console.error("Error", error.message)
    }
  }

  const handleChange = (fieldName, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }))
  }
  const handleFocus = (fieldName) => {
    setInputFocused({ ...inputFocused, [fieldName]: true })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 20}
      >
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.compteContainer}>
              <View style={styles.centerText}>
                <Text style={styles.boldText}>Les informations du compte</Text>
              </View>

              <View>
                <Text style={styles.label}>Adresse Email</Text>
                <TextInput
                  style={
                    infosUser?.email && !inputFocused.email
                      ? styles.savedTextInput
                      : styles.textContainer
                  }
                  value={userData.email}
                  placeholder={"Votre adresse e-mail"}
                  onChangeText={(text) => handleChange("email", text)}
                  onFocus={() => handleFocus("email")}
                />

                <Text style={styles.label}>Mot de Passe</Text>
                <TextInput
                  // value={password}
                  style={styles.textContainer}
                  value={userData.password}
                  placeholder="*********"
                  onChangeText={(text) => handleChange("password", text)}
                />
                {/* <Text style={styles.forgetPassWordText}>Mot de passe oublié</Text> */}

                <Text style={styles.label}>Numéro de Téléphone</Text>
                <TextInput
                  style={
                    infosUser?.identity?.phoneNumber &&
                    !inputFocused.phoneNumber
                      ? styles.savedTextInput
                      : styles.textContainer
                  }
                  value={userData.phoneNumber.toString()}
                  placeholder={"Votre numéro de téléphone"}
                  onChangeText={(text) => handleChange("phoneNumber", text)}
                  onFocus={() => handleFocus("phoneNumber")}
                />

                <Text style={styles.label}>Date d'inscription</Text>
                {/* <MyDatePicker /> */}
              </View>
            </View>

            <View style={styles.bar}></View>

            <View style={styles.centerText}>
              <Text style={styles.boldText}>Informations d'Identité</Text>
            </View>
            <View>
              <Text style={styles.label}>Nom</Text>
              <TextInput
                style={
                  infosUser?.identity?.name && !inputFocused.name
                    ? styles.savedTextInput
                    : styles.textContainer
                }
                value={userData.name}
                placeholder="Nom"
                onChangeText={(text) => handleChange("name", text)}
                onFocus={() => handleFocus("name")}
              />

              <Text style={styles.label}>Prénom</Text>

              <TextInput
                style={
                  infosUser?.identity?.firstName && !inputFocused.firstName
                    ? styles.savedTextInput
                    : styles.textContainer
                }
                value={userData.firstName}
                placeholder="Prénom"
                onChangeText={(text) => handleChange("firstName", text)}
                onFocus={() => handleFocus("firstName")}
              />

              {/* <Text style={{ marginLeft: 2, paddingLeft: 10 }}>Nationalité</Text> */}
              {/* <NationalityPicker style={styles.textContainer} /> */}
            </View>

            {/* <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>
              Pays de naissance
            </Text>
            <CountryPicker style={styles.textContainer} />
          </View> */}

            {/* <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>
              Situation familiale
            </Text>
            <FamilyPicker style={styles.textContainer} />
          </View> */}

            <View>
              <Text style={styles.label}>Ville de naissance</Text>
              <TextInput
                style={
                  infosUser?.identity?.birthTown && !inputFocused.birthTown
                    ? styles.savedTextInput
                    : styles.textContainer
                }
                value={userData.birthTown}
                placeholder="Votre ville de naissance"
                onChangeText={(text) => handleChange("birthTown", text)}
                onFocus={() => handleFocus("birthTown")}
              />
              <Text style={styles.label}>Nationalité</Text>
              <TextInput
                style={
                  infosUser?.identity?.nationality && !inputFocused.nationality
                    ? styles.savedTextInput
                    : styles.textContainer
                }
                value={userData.nationality}
                placeholder="Votre nationalité"
                onChangeText={(text) => handleChange("nationality", text)}
                onFocus={() => handleFocus("nationality")}
              />

              <Text style={styles.label}>Département de naissance</Text>
              <TextInput
                style={infosUser?.identity?.birthDistrict && !inputFocused.birthDistrict
                  ? styles.savedTextInput
                  : styles.textContainer}
                value={userData.birthDistrict}
                placeholder="Votre département de naissance"
                onChangeText={(text) => handleChange("birthDistrict", text)}
                onFocus={() => handleFocus("birthDistrict")}
              />

              <Text style={styles.label}>Numéro de sécurité sociale</Text>
              <TextInput
                style={infosUser?.identity?.socialSecurityNumber && !inputFocused.socialSecurityNumber
                  ? styles.savedTextInput
                  : styles.textContainer}
                value={userData.socialSecurityNumber}
                placeholder="Votre numéro de sécurité sociale"
                onChangeText={(text) => handleChange("socialSecurityNumber", text)}
                onFocus={() => handleFocus("socialSecurityNumber")}
              />

              <Text style={styles.label}></Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={handleUpdate}
                style={styles.actionButton}
              >
                <Text style={styles.actionButtonText}>Sauvegarder</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    marginLeft: 15,
  },

  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 15,
    
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
  compteContainer: {
    marginTop: 40,
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

  textButton: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  buttonContainer: {
    marginBottom: 50,
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
  title: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 10,
  },

  textContainer: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 10,
    margin: 15,
    backgroundColor: "#ffffff",
    marginTop: 5,
  },
  savedTextInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 10,
    margin: 15,
    backgroundColor: "#d3d4d7",
    marginTop: 5,
  },
  actionButton: {
    backgroundColor: "#277aba",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 46,
    marginBottom: 16,
    marginHorizontal: 46,
  },
  actionButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
})
