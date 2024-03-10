/*
============ Import react, react native & expo modules ============ 
*/
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useState } from "react";
/*
============ Import Redux ============ 
*/

/*
============ Import Modules ============ 
*/
import CountryPicker from 'react-native-country-picker-modal';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
/*
============ Import Components ============ 
*/

/**
 *  Identity Screen
 */

export default function Identity({ navigation }) {

  const [countryCode, setCountryCode] = useState('FR');
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(true);
  const [withFlag, setWithFlag] = useState(true)
  const [withEmoji, setWithEmoji] = useState(true)
  const [withFilter, setWithFilter] = useState(true)
  const [withAlphaFilter, setWithAlphaFilter] = useState(false)
  const [withCallingCode, setWithCallingCode] = useState(false)
  const onSelect = (country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [mode, setMode] = useState('date');

  const onChange = (e, selectedDate) => {
    setDate(selectedDate);
    setShowPicker(false);
  }

  const showMode = (modeToShow) => {
    setShowPicker(true);
    setMode(modeToShow);
  }

  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(today.setDate(today.getDate()+1), 'YYYY/MM/DD');

  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [startedDate, setStartedDate] = useState('03/10/2024');

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  }

  const handleChangeStartDate = (propDate) => {
    setStartedDate(propDate);
  }



  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ScrollView style={{ width: '100%'}}>
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

            <TouchableOpacity
              onPress={handleOnPressStartDate}
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
            >
              <Text style={{fontSize: 14}}>{selectedStartDate}</Text>
            </TouchableOpacity>

            <Modal 
            animationType="slide"
            transparent={true}
            visible={openStartDatePicker}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>

                <DatePicker 
                  mode="calendar"
                  minimumDate={startDate}
                  selected={startedDate}
                  onDateChanged={handleChangeStartDate}
                  onSelectedChange={date => setSelectedStartDate(date)}
                  options={{
                    backgroundColor: '#00638F',
                    textHeaderColor: '#fff',
                    textDefaultColor: '#fff',
                    selectedTextColor: '#000',
                    mainColor: '#fff',
                    textSecondaryColor: '#dbdbdb',
                    borderColor: '#00638F',
                  }}
                />

                  <TouchableOpacity
                  onPress={handleOnPressStartDate}>
                    <Text style={{ color: '#fff'}}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </Modal>


            
          </View>

          <View style={{ 
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <View style={styles.bar}></View>
          </View>

          <View style={{ marginLeft: 2, paddingLeft: 10 }}>
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
              placeholder="Nationalité"
            />
          </View>

          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>
              Pays de naissance
            </Text>
            <View style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                marginBottom: 10,
                borderRadius: 10,
                margin: 15,
                backgroundColor: "white",
                marginTop: 5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <View style={{ 
                      alignItems: 'flex-start',
                      width: '80%',
                      marginLeft: 20,
                    }}>
                <CountryPicker 
                  {...{
                    countryCode,
                    withFilter,
                    withFlag,
                    withCountryNameButton,
                    withAlphaFilter,
                    withCallingCode,
                    withEmoji,
                    onSelect,
                  }}
                  
                />
                
              </View>
            </View>
          </View>

          <View>
            <Text style={{ marginLeft: 2, paddingLeft: 10 }}>
              Situation familiale
            </Text>

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
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#00638F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 35,
    width: '90%',
  },
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
    margin: 30,
  },
});
