import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView, Platform, StatusBar } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";

import Footer from "@/src/components/Footer";
import { bgThemeColor, fgThemeColor, textThemeColor } from "@/src/constants/ColorTheming";

export default function Perfil() {
  const navigation = useNavigation();

  const AbrirNavMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTopoItems}>
        <TouchableOpacity onPress={AbrirNavMenu}>
          <Image
            source={require("../../../assets/menu-lateral.png")}
            style={styles.containerTopoMenuLat}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.containerTopoTexto}>PERFIL</Text>
        <Image
          source={require("../../../assets/perfil.png")}
          style={styles.containerTopoImagem}
        ></Image>
      </View>
      <View style={styles.containerDadosForms}>
        <Text style={styles.containerDadosTitulo}>NOME:</Text>
        <TextInput
          style={styles.containerInput}
          placeholder="ex. João Carlos de  Oliveira"
          placeholderTextColor={"#a9a9a9"}
          autoCapitalize="words"
        ></TextInput>
        <Text style={styles.containerDadosTitulo}>IDADE:</Text>
        <TextInput
          style={styles.containerInput}
          placeholder="ex. 35"
          placeholderTextColor={"#a9a9a9"}
        ></TextInput>
        <Text style={styles.containerDadosTitulo}>ENDEREÇO:</Text>
        <TextInput
          style={styles.containerInput}
          placeholder="ex. Rua Oliveira 123 - Bairro  Jardim América"
          placeholderTextColor={"#a9a9a9"}
        ></TextInput>
        <Text style={styles.containerDadosTitulo}>TIPO SANGUINEO:</Text>
        <TextInput
          style={styles.containerInput}
          placeholder="ex. A+"
          placeholderTextColor={"#a9a9a9"}
        ></TextInput>
        <View
          style={{
            width: "65%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.containerDadosTitulo}>PESO:</Text>
          <Text style={styles.containerDadosTitulo}>ALTURA:</Text>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            style={{
              width: "49%",
              height: 50,
              backgroundColor: "#d9d9d9",
              paddingHorizontal: 10,
            }}
            placeholder="ex. 70"
            placeholderTextColor={"#a9a9a9"}
          ></TextInput>
          <TextInput
            style={{
              width: "49%",
              height: 50,
              backgroundColor: "#d9d9d9",
              paddingHorizontal: 10,
            }}
            placeholder="ex. 1.75"
            placeholderTextColor={"#a9a9a9"}
          ></TextInput>
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: `${bgThemeColor}`,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  containerTopoItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 88,
    backgroundColor: `${fgThemeColor}`,
  },
  containerTopoMenuLat: {
    width: 35,
    height: 25,
  },
  containerDadosTitulo: {
    color: `${textThemeColor}`,
  },
  containerTopoTexto: {
    fontSize: 24,
    fontWeight: "400",
    color: "#ffffff",
  },
  containerTopoImagem: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  containerDadosForms: {
    width: "100%",
    maxWidth: 400,
    paddingTop: 15,
    alignSelf: "center",
    paddingHorizontal: 15,
    gap: 5,
  },
  containerInput: {
    width: "100%",
    height: 50,
    backgroundColor: "#d9d9d9",
    paddingHorizontal: 10,
  },
});
