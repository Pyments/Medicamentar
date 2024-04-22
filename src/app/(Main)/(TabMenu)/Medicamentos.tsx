import { View, StyleSheet, Image, Text, SafeAreaView } from "react-native";
import CardMedicamentos from "../../../components/CardMedicamento";

export default function Medicamentos() {
  return (
    <SafeAreaView style={styles.rootView}>
      <View style={styles.header}>
        <Image
          style={styles.headerHamburguer}
          source={require("../../../assets/menu-lateral.png")}
        ></Image>
        <Text style={styles.headerTitle}>Medicamentos</Text>
        <Image
          style={styles.headerImage}
          source={require("../../../assets/Medicamento_icon.png")}
        ></Image>
      </View>
      <CardMedicamentos />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
  header: {
    justifyContent: "space-between",
    backgroundColor: "#20A2EB",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    height: 88,
  },
  headerHamburguer: {
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  headerImage: {
    resizeMode: "contain",
    width: 70,
  },
});
