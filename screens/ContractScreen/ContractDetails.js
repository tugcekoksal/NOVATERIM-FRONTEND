import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBuilding, faCalendarAlt, faCoins, faFileAlt,   faChevronLeft, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export default function ContractDetails({navigation}) {
  const contrat = {
    title: "Contrat 012345",
    role: "Developpeur H/F",
    description: "Développeur front-end et mobile",
    location: "Paris",
    company: "Cdiscount",
    reference: "12345",
    dates: "01/01/20-02/02/21",
    salary: "15€/H BRUT",
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>NOVATERIM</Text>
          <FontAwesomeIcon icon={faQuestionCircle} size={24} color="#000" />
        </View>

        <View style={styles.contractInfoContainer}>
          <Text style={styles.contractTitle}>Contrat {contrat.reference}</Text>
          <Text style={styles.roleText}>{contrat.role}</Text>
          <Text style={styles.roleDescription}>{contrat.description}</Text>
          <View style={styles.locationContainer}>
          <Text style={styles.locationText}>{contrat.location}</Text>
        </View>
        </View>

      

        <View style={styles.detailsSection}>
          <View style={styles.detailContainer}>
            <FontAwesomeIcon icon={faBuilding} size={24} color="#4B5563" />
            <Text style={styles.detailTitle}>Entreprise</Text>
            <Text style={styles.detailText}>{contrat.company}</Text>
          </View>
          <View style={styles.detailContainer}>
            <FontAwesomeIcon icon={faFileAlt} size={24} color="#4B5563" />
            <Text style={styles.detailTitle}>Référence</Text>
            <Text style={styles.detailText}>{contrat.reference}</Text>
          </View>
        </View>

        <View style={styles.detailsSection}>
          <View style={styles.detailContainer}>
            <FontAwesomeIcon icon={faCalendarAlt} size={24} color="#4B5563" />
            <Text style={styles.detailTitle}>Dates</Text>
            <Text style={styles.detailText}>01/01/20-02/02/21</Text>
          </View>
          <View style={styles.detailContainer}>
            <FontAwesomeIcon icon={faCoins} size={24} color="#4B5563" />
            <Text style={styles.detailTitle}>Salaire horaire</Text>
            <Text style={styles.detailText}>15€/H BRUT</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Télécharger le contrat / Signer</Text>
        </TouchableOpacity>

        <Text style={styles.footerLink}>Comment s'y rendre?</Text>
        <Text style={styles.footerLink}>Déclarer un Arrêt</Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor:"#F8F8F8",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    borderRadius: 25,
    paddingTop: 22,
    paddingBottom: 99,
    shadowColor: '#00000040',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontWeight: 'bold',
    color:"#277aba",
    fontSize: 18,
 
  },
  contractInfoContainer: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  contractTitle: {
    fontSize: 20,
    color: '#000',
    marginBottom: 8,
  },
  roleText: {
    fontSize: 16,
    color: '#1C7ABA',
    marginBottom: 4,
  },
  roleDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  locationContainer: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C7C7C7',
    padding: 8,
    marginVertical: 16,
    
  },
  locationText: {
    fontSize: 14,
    color: '#080808',
  },
  detailsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  detailContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    width: 150,
    height: 100,
  },
  detailTitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#4B5563',
  },
  actionButton: {
    backgroundColor: '#277aba',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 46,
    marginBottom: 16,
    marginHorizontal: 46,
  },
  actionButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  footerLink: {
    fontSize: 16,
    color: '#017FBE',
    textAlign: 'center',
    marginBottom: 8,
  }
});
