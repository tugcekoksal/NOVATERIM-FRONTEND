
import {  StyleSheet, Text, View,} from 'react-native';

export default function ProfileScreen({ navigation }) {
 return (
   <View style={styles.container}>
 
   <Text>Profile Screen</Text>
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