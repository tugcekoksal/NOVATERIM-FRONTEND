import React from "react";
import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
export default function Upload(props) {

   return (
      <View style={styles.container}>
         <View style={styles.textContainer}>
            <FontAwesomeIcon icon={props.name} size={props.size} color={props.color} />
            <Text style={styles.textStyle}>{props.text}</Text>
         </View>
         <TouchableOpacity
            style={styles.buttonStyle}
            onPress={props.onPress}
            activeOpacity={props.activeOpacity}
            >
            <Text style={styles.buttonTextStyle}>{props.buttonText}</Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({

   container: {
      width: '80%',
      height: 60,
      padding: 10,
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      columnGap: 20,
      borderRadius: 5,
      shadowColor: '#000000',
      shadowOffset: {
         width: 0,
         height: 7,
         },
      shadowOpacity:  0.17,
      shadowRadius: 3.05,
      elevation: 4
   },
   textContainer: {
      width: '65%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      columnGap: 10,
   },
   textStyle: {
      fontSize: 16,
      fontWeight: '700',
      lineHeight: 28,
      letterSpacing: 0.2,
   },
   buttonStyle: {
      width: '20%',
      height: 30,
      backgroundColor: 'rgb(0,110,177)',
      borderRadius: 5,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000000',
      shadowOffset: {
         width: 0,
         height: 7,
         },
      shadowOpacity:  0.17,
      shadowRadius: 3.05,
      elevation: 4
   },
   buttonTextStyle: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 28,
      letterSpacing: 0.2,
   }
})