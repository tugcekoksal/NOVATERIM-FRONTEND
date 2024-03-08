import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const NotificationsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>NOVATERIM</Text>
      </View>

      <View style={styles.card}>
      <View style={styles.lineStyle} /> 
      <View style={styles.cardContentContainer}> 
        <Text style={styles.cardTitle}>Fiche de paie</Text>
        <Text style={styles.cardSubtitle}>Il y a 5 heures</Text>
        <Text style={styles.cardContent}>Votre fiche de paie pour la période du 08/01 au 31/01/2024 a été éditée.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>VOIR</Text>
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
      <View style={styles.lineStyle} /> 
      <View style={styles.cardContentContainer}> 
        <Text style={styles.cardTitle}>Signature en attente</Text>
        <Text style={styles.cardSubtitle}>Il y a 5 heures</Text>
        <Text style={styles.cardContent}>Votre contrat de Developpeur ref.9748 est prêt et est en attente de signature.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGNER</Text>
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
      <View style={styles.lineStyle} /> 
      <View style={styles.cardContentContainer}> 
        <Text style={styles.cardTitle}>Bienvenue!</Text>
        <Text style={styles.cardSubtitle}>Il y a un mois</Text>
        <Text style={styles.cardContent}>Votre contrat a été créé avec succès. L'application Novaterim Gestion vous permettra de gérer vos informations, vos contrats et de retrouver vos fiches de payes. Bienvenue!</Text>
        <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Télécharger</Text>
            </TouchableOpacity>
            </View>
      </View>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerText: {
    fontWeight: "bold",
    color: "#277aba",
    fontSize:20 ,
    marginTop:60
  },
  card: {
    flexDirection: 'row', 
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lineStyle: {
    width: 6, 
    backgroundColor: '#277aba', 
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10, 
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
   
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 14,
    marginBottom: 20,
  },
  cardContentContainer: {
    flex: 1,
    marginLeft: 15, 
  },
  button: {
  width:100,
    alignItems: "center",
    backgroundColor: "#277aba",
    padding: 4,
    borderRadius: 25,
  },
  buttonText: {
    paddingHorizontal: 8,
    fontSize: 12,
    color: "#ffff",
  },
 
});

export default NotificationsScreen;
