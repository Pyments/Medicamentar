import { Link, router } from "expo-router";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

export default function CardMedicamentos() {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.cardTitle}>MEDICAMENTO 1</Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.infoText}>Uso Contínuo </Text>
          <Text style={styles.infoText}>Status: Normal</Text>
        </View>
      </View>      
        <TouchableOpacity onPress={
          ()=>{ router.push("../(DynamicRoutes)/[AdMedicamentos]")}
        }>
          <Image
              source={require("../assets/Medicamento_component/Medicamento_icon.png")}
              style={styles.cardImage}
            ></Image>
        </TouchableOpacity>      
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    justifyContent: "space-between",
    backgroundColor: "#D9D9D9",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    minHeight: 95,
    margin: 14,
  },
  infoWrapper: {
    flexDirection: "column",
    display: "flex",
    marginLeft: 10,
  },
  infoText: {
    marginVertical: 2,
    fontSize: 15,
  },
  cardTitle: {
    fontSize: 23,
  },
  cardImage: {
    resizeMode: "contain",
    width: 35,
  },
});
