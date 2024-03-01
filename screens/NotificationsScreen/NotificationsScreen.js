
import {  StyleSheet, Text, View,} from 'react-native';

export default function NotificationsScreen({ navigation }) {
 return (
   <View style={styles.container}>
 
   <Text>Notifications Screen</Text>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  image: {
    width: '100%',
    height: '100%',
  },
});