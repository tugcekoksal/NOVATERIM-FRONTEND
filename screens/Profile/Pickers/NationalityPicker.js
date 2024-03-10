import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const NationalityPicker = () => {
  const [selectedNationality, setSelectedNationality] = useState(''); // État pour suivre la nationalité sélectionnée

  const handleNationalityChange = (value) => {
    setSelectedNationality(value);
  };

  return (
    <View style={styles.container}>      
      <Picker
        selectedValue={selectedNationality}
        onValueChange={handleNationalityChange}
        style={styles.picker}
      >
        <Picker.Item label="Choisissez" value=""/>
        <Picker.Item label="Français(e)" value="FRA" />
        <Picker.Item label="Américain(e)" value="USA" />
        <Picker.Item label="Canadien(ne)" value="CAN" />
        
        {/* Ajoutez d'autres options selon vos besoins */}
      </Picker>
      
      {/* {selectedNationality !== '' && (
        <Text>Nationalité sélectionnée : {selectedNationality}</Text>
      )} */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center' ,
  },
  picker: {
    width: 200,
    height: 50,
    marginTop: 10,
  },
  
});

export default NationalityPicker;