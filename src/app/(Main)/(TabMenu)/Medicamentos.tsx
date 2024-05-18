import { View, StyleSheet, Image, Text, SafeAreaView, TouchableOpacity, StatusBar, Platform } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";

import { fgThemeColor } from "@/src/constants/ColorTheming";
import CardMedicamentos from "@/src/components/CardMedicamento";
import Footer from "@/src/components/Footer";

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
            source={require("@/src/assets/menu-lateral.png")}
          ></Image>
        
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Medicamentos</Text>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.headerImage}
            source={require("@/src/assets/Medicamento_icon.png")}
          ></Image>
        </View>
      </View>
      <CardMedicamentos />
      <View style ={{flex:1}}>
        <TouchableOpacity 
        onPress={
          ()=>router.push("../(DynamicRoutes)/[AdMedicamento]")
        }
        style ={{position:"absolute", width:50, bottom:40,right:24}}>

          <Image source={require("@/src/assets/botao_adicionar.png")}></Image>

        </TouchableOpacity>
      </View>
      <Footer/>
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
    backgroundColor: `${fgThemeColor}`,
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
  imageWrapper:{
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 4,
  },
  headerImage: {
    resizeMode: "contain",
    width: 56,
    height: 56,
  },
});
