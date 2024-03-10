/*
============ Import react, react native & expo modules ============ 
*/
import { StyleSheet, Text, View, TouchableOpacity, Alert, } from "react-native";
import React, { useState, useRef } from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
/*
============ Import modules ============ 
*/
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { 
   faUserCheck, 
   faHouseUser,
   faFileMedical,
   faFileLines,
   faLandmark,
   faArrowLeft,
   faEye,
} from "@fortawesome/free-solid-svg-icons";
import * as DocumentPicker from 'expo-document-picker';


/*
============ Import redux ============ 
*/
import { useSelector, useDispatch } from "react-redux";
import { addIdentityCard, addVitalCard, addIban, addHomePaper, addResume } from "../../../reducers/document";
/*
============ Import Components ============ 
*/
import Upload from "../../../components/Profile/Upload";



/**
 *  DocumentScreen
 */


export default function Documents({ navigation }) {
   const dispatch = useDispatch();
   const user = useSelector(state => state.user.value);
   const userDocument = useSelector(state => state.document.value);

   console.log(userDocument);

   const [ file, setFile ] = useState(null);

   /*
      ======= Functions to pick a File and upload it to DDB =======
   */
   const uploadIdCard = async () => {
      /*
      ======= Selecting file from device =======
      */
      try{
         const docRes = await DocumentPicker.getDocumentAsync({
            type: 'application/pdf',
         });
         
         const formData = new FormData();
         const assets = docRes.assets;
         if(!assets) return;

         const fileUpload = assets[0];
      /*
      ======= Setting up formData =======
      */
         formData.append('pdfFile', {
            uri: fileUpload.uri,
            name: user.identity.name + '-' + user.token,
            type: fileUpload.mimeType,
            size: fileUpload.size,
         });

         console.log(fileUpload);

      /*
      ======= Fetching file selecting to the Backend =======
      */

         const response = await fetch(`http://192.168.1.25:3000/upload/${user.token}/identityCard`, {
            method: 'POST',
            body: formData,
            headers: {
               Accept: "application/json",
               'Content-Type': 'multipart/form-data',
            },
         });

         const data = await response.json();
      /*
      ======= Checking if data.result is truthy =======
      */
         if(data.result){
            console.log(data);
            const document = {
               url: data.data.identityCard,
               name: data.name,
            }
            // dispatching backend response to reducer
            dispatch(addIdentityCard(document));
         }

         console.log('File uploaded successfully:', data);
      } catch(error) {
         console.error('Error while picking a file: ', error);
      }
      
   };

   const uploadVitalCard = async () => {
      /*
      ======= Selecting file from device =======
      */
      try{
         const docRes = await DocumentPicker.getDocumentAsync({
            type: 'application/pdf',
         });
         
         const formData = new FormData();
         const assets = docRes.assets;
         if(!assets) return;

         const fileUpload = assets[0];
      /*
      ======= Setting up formData =======
      */
         formData.append('pdfFile', {
            uri: fileUpload.uri,
            name: user.identity.name + '-' + user.token,
            type: fileUpload.mimeType,
            size: fileUpload.size,
         });

         console.log(fileUpload);

      /*
      ======= Fetching file selecting to the Backend =======
      */

         const response = await fetch(`http://192.168.1.25:3000/upload/${user.token}/vitalCard`, {
            method: 'POST',
            body: formData,
            headers: {
               Accept: "application/json",
               'Content-Type': 'multipart/form-data',
            },
         });

         const data = await response.json();
      /*
      ======= Checking if data.result is truthy =======
      */
         if(data.result){
            const document = {
               url: data.data.vitalCard,
               name: data.name,
            }
            // dispatching backend response to reducer
            dispatch(addVitalCard(document));
         }

         console.log('File uploaded successfully:', data);
      } catch(error) {
         console.error('Error while picking a file: ', error);
      }
      
   };

   const uploadResume = async () => {
      /*
      ======= Selecting file from device =======
      */
      try{
         const docRes = await DocumentPicker.getDocumentAsync({
            type: 'application/pdf',
         });
         
         const formData = new FormData();
         const assets = docRes.assets;
         if(!assets) return;

         const fileUpload = assets[0];
      /*
      ======= Setting up formData =======
      */
         formData.append('pdfFile', {
            uri: fileUpload.uri,
            name: user.identity.name + '-' + user.token,
            type: fileUpload.mimeType,
            size: fileUpload.size,
         });

         console.log(fileUpload);

      /*
      ======= Fetching file selecting to the Backend =======
      */

         const response = await fetch(`http://192.168.1.25:3000/upload/${user.token}/resume`, {
            method: 'POST',
            body: formData,
            headers: {
               Accept: "application/json",
               'Content-Type': 'multipart/form-data',
            },
         });

         const data = await response.json();
      /*
      ======= Checking if data.result is truthy =======
      */
         if(data.result){
            console.log(data);
            const document = {
               url: data.data.resume,
               name: data.name,
            }
            // dispatching backend response to reducer
            dispatch(addResume(document));
         }

         console.log('File uploaded successfully:', data);
      } catch(error) {
         console.error('Error while picking a file: ', error);
      }
      
   };

   const uploadIban = async() => {
      /*
      ======= Selecting file from device =======
      */
      try{
         const docRes = await DocumentPicker.getDocumentAsync({
            type: 'application/pdf',
         });
         
         const formData = new FormData();
         const assets = docRes.assets;
         if(!assets) return;

         const fileUpload = assets[0];
      /*
      ======= Setting up formData =======
      */
         formData.append('pdfFile', {
            uri: fileUpload.uri,
            name: user.identity.name + '-' + user.token,
            type: fileUpload.mimeType,
            size: fileUpload.size,
         });

         console.log(fileUpload);

      /*
      ======= Fetching file selecting to the Backend =======
      */

         const response = await fetch(`http://192.168.1.25:3000/upload/${user.token}/iban`, {
            method: 'POST',
            body: formData,
            headers: {
               Accept: "application/json",
               'Content-Type': 'multipart/form-data',
            },
         });

         const data = await response.json();
      /*
      ======= Checking if data.result is truthy =======
      */
         if(data.result){
            const document = {
               url: data.data.iban,
               name: data.name,
            }
            // dispatching backend response to reducer
            dispatch(addIban(document));
         }

         console.log('File uploaded successfully:', data);
      } catch(error) {
         console.error('Error while picking a file: ', error);
      }
   };

   const uploadHomePaper = async() => {
      /*
      ======= Selecting file from device =======
      */
      try{
         const docRes = await DocumentPicker.getDocumentAsync({
            type: 'application/pdf',
         });
         
         const formData = new FormData();
         const assets = docRes.assets;
         if(!assets) return;

         const fileUpload = assets[0];
      /*
      ======= Setting up formData =======
      */
         formData.append('pdfFile', {
            uri: fileUpload.uri,
            name: user.identity.name + '-' + user.token,
            type: fileUpload.mimeType,
            size: fileUpload.size,
         });

         console.log(fileUpload);

      /*
      ======= Fetching file selecting to the Backend =======
      */

         const response = await fetch(`http://192.168.1.25:3000/upload/${user.token}/homePaper`, {
            method: 'POST',
            body: formData,
            headers: {
               Accept: "application/json",
               'Content-Type': 'multipart/form-data',
            },
         });

         const data = await response.json();
      /*
      ======= Checking if data.result is truthy =======
      */
         if(data.result){
            const document = {
               url: data.data.homePaper,
               name: data.name,
            }
            // dispatching backend response to reducer
            dispatch(addHomePaper(document));
         }

         console.log('File uploaded successfully:', data);
      } catch(error) {
         console.error('Error while picking a file: ', error);
      }
   };

   /*
      ======= PDF Preview =======
   */
   const previewIdentityCard = () => {
      const content = userDocument.identityCard.url

   }





   /*
      ======= Preview Button =======
   */
   const previewIcon = <FontAwesomeIcon icon={faEye} color="rgb(0,110,177)" />

   




   return (
      <View style={styles.container}>

         <View style={styles.header}>
            <TouchableOpacity 
               style={styles.icon}
               onPress={() => navigation.goBack()}
            >
               <FontAwesomeIcon icon={faArrowLeft} size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>MES DOCUMENTS</Text>
         </View>

         <View style={styles.documentContainer}>
            <View style={styles.titleBox}>
               <Text style={styles.title} >Documents d’identité</Text>
            </View>
            <View style={styles.uploadContainer}>
               <Text>Justificatifs</Text>
               <Upload
                  onPress={uploadIdCard}
                  name={faUserCheck}
                  size={25}
                  color='black'
                  text='Justificatif d’identité'
                  buttonText='Ajouter'
                  buttonTextPreview={previewIcon}
                  onPressPreview={() => navigation.navigate('PDFiDcard')}
                  activeOpacity={0.9}
                  id='identityCard'
               />
               
               <Upload
                  onPress={uploadHomePaper}
                  name={faHouseUser}
                  size={25}
                  color='black'
                  text='Justificatif de domicile'
                  buttonText='Ajouter'
                  buttonTextPreview={previewIcon}
                  onPressPreview={() => navigation.navigate('PDFhomeParer')}
                  activeOpacity={0.9}
               />
               <Upload
                  onPress={uploadVitalCard}
                  name={faFileMedical}
                  size={25}
                  color='black'
                  text='Carte Vitale'
                  buttonText='Ajouter'
                  buttonTextPreview={previewIcon}
                  onPressPreview={() => navigation.navigate('PDFvitalCard')}
                  activeOpacity={0.9}
               />
            </View>
         </View>

         <View style={styles.documentContainer2}>
            <View style={styles.titleBox}>
               <Text style={styles.title} >Curiculum vitae</Text>
            </View>
            <View style={styles.uploadContainer}>
               <Text>Justificatifs</Text>
               <Upload
                  onPress={uploadResume}
                  name={faFileLines}
                  size={25}
                  color='black'
                  text='CV'
                  buttonText='Ajouter'
                  buttonTextPreview={previewIcon}
                  onPressPreview={() => navigation.navigate('PDFresume')}
                  activeOpacity={0.9}
               />
            </View>
         </View>

         <View style={styles.documentContainer2}>
            <View style={styles.titleBox}>
               <Text style={styles.title} >Documents financier</Text>
            </View>
            <View style={styles.uploadContainer}>
               <Text>Justificatifs</Text>
               <Upload
                  onPress={uploadIban}
                  name={faLandmark}
                  size={25}
                  color='black'
                  text='FR0000000000000000'
                  buttonText='Ajouter'
                  buttonTextPreview={previewIcon}
                  onPressPreview={() => navigation.navigate('PDFiban')}
                  activeOpacity={0.9}
               />
            </View>
         </View>
      </View>
   );
}



const styles = StyleSheet.create({

   container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: 30
   },
   header: {
      width: '100%',
      height: 50,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
      marginTop: 10
   },
   icon: {
      position: 'absolute',
      left: 10,
      top: 15,
      width: 20,
      height: 20,
   },
   headerText:{
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 0.2,
      textAlign: 'center',
      color: 'rgb(0,110,177)',
   },
   documentContainer: {
      borderColor: 'black',
      height: '35%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
   },
   documentContainer2: {
      borderColor: 'black',
      height: '15%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
   },
   titleBox: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingLeft: 10
   },
   title: {
      width: '100%',
      fontSize: 18,
      fontWeight: '700',
      textAlign: 'left',
   },
   uploadContainer: {
      height: '80%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignContent: "center",
      rowGap: 10,
   },
})

