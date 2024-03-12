/*
============ Import react, react native & expo modules ============ 
*/
import { StyleSheet, Text, View, TouchableOpacity, Alert, } from "react-native";
import React, { useState, useEffect } from 'react';
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

   const token = useSelector(state => state.user.value.token);
   useEffect(() => {
      if(token){
         const url = `http://192.168.1.25:3000/users/${token}`
         
         fetch(url)
            .then(response => response.json())
            .then(data => {
               const user = data
               dispatch(addIdentityCard(user.identityCard));
               dispatch(addHomePaper(user.homePaper));
               dispatch(addVitalCard(user.vitalCard));
               dispatch(addResume(user.resume));
               dispatch(addIban(user.iban));
            })
      }
   }, [token])

   const dispatch = useDispatch();
   const user = useSelector(state => state.user.value);
   const userDocument = useSelector(state => state.document.value);

   console.log(userDocument);

   

   /*
      ======= Functions to pick a File, upload it to DDB and make a preview =======
   */

   //**======= ID card =======**/
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
               url: data.identityCard
            }
         }

         console.log('File uploaded successfully:', data);
      } catch(error) {
         console.error('Error while picking a file: ', error);
      }
      
   };

   let displayIdCard;
   userDocument.identityCard ? displayIdCard = 'flex' : displayIdCard = 'none';

   const previewIdCard = () => {
      userDocument.identityCard && navigation.navigate('PDFiDcard');
   };

   //**======= Vital Card =======**/
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
               url: data.vitalCard,
            }
         }

         console.log('File uploaded successfully:', data);
      } catch(error) {
         console.error('Error while picking a file: ', error);
      }
      
   };

   let displayVitalCard;
   userDocument.identityCard ? displayVitalCard = 'flex' : displayVitalCard = 'none';

   const previewVitalCard = () => {
      userDocument.vitalCard && navigation.navigate('PDFvitalCard');
   };

   //**======= Resume =======**/
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
               url: data.resume,
            }
         }

         console.log('File uploaded successfully:', data);
      } catch(error) {
         console.error('Error while picking a file: ', error);
      }
      
   };

   let displayResume;
   userDocument.identityCard ? displayResume = 'flex' : displayResume = 'none';

   const previewResume = () => {
      userDocument.resume && navigation.navigate('PDFresume');
   };

   //**======= Iban =======**/
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
               url: data.iban,
            }
         }

         console.log('File uploaded successfully:', data);
      } catch(error) {
         console.error('Error while picking a file: ', error);
      }
   };

   let displayIban;
   userDocument.identityCard ? displayIban = 'flex' : displayIban = 'none';

   const previewIban = () => {
      userDocument.iban && navigation.navigate('PDFiban');
   };

   //**======= Home Paper =======**/
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
               url: data.homePaper,
            }
         }

         console.log('File uploaded successfully:', data);
      } catch(error) {
         console.error('Error while picking a file: ', error);
      }
   };

   let displayHomePaper;
   userDocument.identityCard ? displayHomePaper = 'flex' : displayHomePaper = 'none';

   const previewHomePaper = () => {
      userDocument.homePaper && navigation.navigate('PDFhomeParer');
   };


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
                  display={displayIdCard}
                  onPressPreview={previewIdCard}
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
                  display={displayHomePaper}
                  onPressPreview={previewHomePaper}
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
                  display={displayVitalCard}
                  onPressPreview={previewVitalCard}
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
                  display={displayResume}
                  onPressPreview={previewResume}
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
                  display={displayIban}
                  onPressPreview={previewIban}
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


