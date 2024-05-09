import { View, StyleSheet, Image, Text, SafeAreaView, TouchableOpacity, StatusBar, Platform } from "react-native";
import CardMedicamentos from "../../../components/CardMedicamento";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";

export default function Medicamentos() {

  const navigation = useNavigation();

    const AbrirNavMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

  return (
    <SafeAreaView style={styles.rootView}>
      <View style={styles.header}>
        <TouchableOpacity onPress={AbrirNavMenu}>
        <Image
          style={styles.headerHamburguer}
          source={require("../../../assets/menu-lateral.png")}
        ></Image>
        </TouchableOpacity>
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
