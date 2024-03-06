import React from "react"
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"

import { faWallet} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

// Dummy data for salary periods
const salaryData = [
  { period: "01/04/2020-31/04/2020", amount: "1500.86€" },
  { period: "01/03/2020-31/03/2020", amount: "1500.86€" },
  { period: "01/02/2020-31/02/2020", amount: "1500.86€" },
  { period: "01/01/2020-31/01/2020", amount: "1500.86€" },
]
const companies = [
  { label: "Company A", value: "company_a" },
  { label: "Company B", value: "company_b" },
  { label: "Company C", value: "company_c" },

  
]
const DropdownMenu = ({ items, onSelect }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setVisible(!visible)}
      >
        <Text>Sélection Entreprise</Text>
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setVisible(false)}
        >
          <View style={styles.dropdownListContainer}>
            <FlatList
              data={items}
              keyExtractor={item => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => {
                    onSelect(item);
                    setVisible(false);
                  }}
                >
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

function SalariesScreen() {
  const [selectedCompany, setSelectedCompany] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>NOVATERIM</Text>
      </View>

      <Text style={styles.headingSecondary}>Salaries</Text>
      <Text style={styles.subtitle}>Vos fiches de paie.</Text>


  <View style={styles.dropdownContainer}>
    
      <Text style={{ marginBottom: 20 }}>
        Entreprise sélectionné: {selectedCompany ? selectedCompany.label : 'None'}
      </Text>
      <DropdownMenu
        items={companies}
        onSelect={item => setSelectedCompany(item)}
      />
      </View>
  

      <FlatList
        data={salaryData}
        keyExtractor={(item) => item.period}
        renderItem={({ item }) => (
          <View style={styles.salaryItem}>
            <FontAwesomeIcon icon={faWallet} size={24} color="#9ca3af" />
            <View style={styles.salaryDetails}>
              <Text style={styles.salaryPeriod}>{item.period}</Text>
              <Text style={styles.salaryAmount}>{item.amount}</Text>
            </View>
            <TouchableOpacity style={styles.downloadButton}>
              <Text style={styles.downloadButtonText}>Télécharger</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  headerTitle: {
    fontWeight: "bold",
    color: "#277aba",
    fontSize: 18,
  },
  headingSecondary: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
    marginLeft: 20,
  },

  subtitle: {
    fontSize: 14,
    marginTop: 20,
    marginLeft: 20,
    color: "#6B7280",
  },
  dropdown: {
    backgroundColor: "#EFEFEF",
    borderRadius: 25,
    padding: 16,
    margin: 16,
  },
  dropdownText: {
    fontSize: 16,
    color: "#000",
  },
  salaryItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
  },
  salaryDetails: {
    flex: 1,
    marginLeft: 16,
  },
  salaryPeriod: {
    fontSize: 14,
    color: "#1C7ABA",
    marginBottom: 4,
  },
  salaryAmount: {
    fontSize: 14,
    color: "#6B7280",
  },
  downloadButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#277aba",
    padding: 4,
    borderRadius: 25,
  },
  downloadButtonText: {
    paddingHorizontal: 8,

    fontSize: 12,
    color: "#ffff",
  },
  dropdownContainer: {
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 20,
    
  },
  dropdownListContainer: {
    width: '80%',
    backgroundColor: '#fff',
    maxHeight: 200,
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
})

export default SalariesScreen
