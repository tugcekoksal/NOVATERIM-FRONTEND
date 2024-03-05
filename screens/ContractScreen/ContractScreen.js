import React from "react"
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import {
  faClock,
  faMapMarkerAlt,
  faCalendarAlt,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"


const colors = {
  primary: "#9ca3af",
  secondary: "#FFFFFF",
  title: "#277aba",
  background: "#F8F8F8",
  active: "#d1fae5",
  inactive: "#fde2e2",
  buttonTextGreen: "#39866e",
  buttonTextRed: "#ac4141",
}



const ContractItem = ({
  title,
  duration,
  location,
  status,
  endDate,
  navigation,
}) => (
  <View style={styles.itemContainer}>
    <View style={styles.leftContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.detailContainer}>
        <FontAwesomeIcon icon={faClock} color={colors.primary} size={20} />
        <Text style={styles.detailText}>{duration}</Text>
      </View>
      <View style={styles.detailContainer}>
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          color={colors.primary}
          size={20}
        />
        <Text style={styles.detailText}>{location}</Text>
      </View>
      <View style={styles.detailContainer}>
        <FontAwesomeIcon
          icon={faCalendarAlt}
          color={colors.primary}
          size={20}
        />
        <Text style={styles.detailText}>{endDate}</Text>
      </View>
    </View>

    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => {    navigation.navigate("ContractDetails", { screen: "ContractDetails" })}}
    >
      <View
        style={[
          styles.statusButton,
          status === "En Cours" ? styles.statusActive : styles.statusInactive,
        ]}
      >
        <Text
          style={[
            styles.statusText,
            {
              color:
                status === "En Cours"
                  ? colors.buttonTextGreen
                  : colors.buttonTextRed,
            },
          ]}
        >
          {status}
        </Text>
      </View>

      <FontAwesomeIcon icon={faChevronRight} color={"black"} size={17} />
    </TouchableOpacity>
  </View>
)

const ContractsPage = ({ navigation }) => {
  

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>NOVATERIM</Text>
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "black",
          marginTop: 20,
          marginLeft: 20,
        }}
      >
        Tous les contrats
      </Text>
      <ScrollView style={styles.container}>
        <ContractItem
          id="1"
          title="Back End Developer"
          duration="Mission de 10 semaines"
          location="Remote"
          status="En Cours"
          endDate="Jusqu'au January 7, 2024"
          navigation={navigation}
        />
        <ContractItem
         id="2"
          title="Front End Developer"
          duration="Mission de 10 semaines"
          location="Presential"
          status="Ancien"
          endDate="Jusqu'au January 7, 2024"
          navigation={navigation}
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  headerContainer: {
    backgroundColor: colors.secondary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 80,
  },
  headerTitle: {
    color: colors.title,
    fontSize: 20,
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.secondary,
    marginHorizontal: 10,
    marginTop: 10,
    padding: 20,
    borderRadius: 5,
  },
  leftContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.title,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  detailText: {
    marginLeft: 10,
  },
  statusButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
  },
  statusActive: {
    backgroundColor: colors.active,
  },
  statusInactive: {
    backgroundColor: colors.inactive,
  },
  statusText: {
    fontWeight: "bold",
    marginRight: 5,
  },
})

export default ContractsPage
