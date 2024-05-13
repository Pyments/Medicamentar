import { View, StyleSheet, Text, Image, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useState } from "react";

import Footer from "@/src/components/Footer";
import { fgThemeColor } from "@/src/constants/ColorTheming";

export default function Emergencia() {
  const navigation = useNavigation();

  const AbrirNavMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const [buttonClicked, setButtonClicked] = useState(true);
  const [secondClicked, setSecondClicked] = useState(false);
  const [thirdClicked, setThirdClicked] = useState(true);
  const [fourthClicked, setFourthClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(false);
    setSecondClicked(true);
  };

  const handleSecondButtonClick = () => {
    setSecondClicked(false);
    setButtonClicked(true);
  };
  const handleThirdButtonClick = () => {
    setThirdClicked(false);
    setFourthClicked(true);
  };
  const handleFourthButtonClick = () => {
    setThirdClicked(true);
    setFourthClicked(false);
  };
  const handlePressAddExames = () => {
    Alert.alert("indisponível no momento");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <TouchableOpacity onPress={AbrirNavMenu}>
          <Image
            style={styles.menu}
            source={require("@/src/assets/menu-lateral.png")}
          />
        </TouchableOpacity>
        <Text style={styles.textContainerTop}>Emergência</Text>
        <Image
          style={styles.logoEmergencia}
          source={require("@/src/assets/Emergencia_icons/Icon_em.png")}
        />
      </View>

      <View style={styles.containerEmergencia}>
        {buttonClicked && (
          <TouchableOpacity
            onPress={handleButtonClick}
            style={styles.stylesContainerEmergencia}
          >
            <Image
              style={styles.imagEM}
              source={require("@/src/assets/Emergencia_icons/SAMU_em.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.stylesContainerEmergenciaText}>SAMU</Text>
              <Text style={styles.stylesContainerEmergenciaNumber}>192</Text>
            </View>
          </TouchableOpacity>
        )}

        {buttonClicked && (
          <TouchableOpacity
            onPress={handleButtonClick}
            style={styles.stylesContainerEmergencia}
          >
            <Image
              style={styles.imagEM}
              source={require("@/src/assets/Emergencia_icons/BOMB_em.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.stylesContainerEmergenciaText}>
                BOMBEIROS
              </Text>
              <Text style={styles.stylesContainerEmergenciaNumber}>193</Text>
            </View>
          </TouchableOpacity>
        )}
        {buttonClicked && (
          <TouchableOpacity
            onPress={handleButtonClick}
            style={styles.stylesContainerEmergencia}
          >
            <Image
              style={styles.imagEM}
              source={require("@/src/assets/Emergencia_icons/CVV_em.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.stylesContainerEmergenciaText}>
                CT.DE VALORIZAÇÃO A VIDA
              </Text>
              <Text style={styles.stylesContainerEmergenciaNumber}>188</Text>
            </View>
          </TouchableOpacity>
        )}
        {buttonClicked && (
          <TouchableOpacity
            onPress={handleButtonClick}
            style={styles.stylesContainerEmergencia}
          >
            <Image
              style={styles.imagEM}
              source={require("@/src/assets/Emergencia_icons/PM_em.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.stylesContainerEmergenciaText}>
                POLÍCIA MILITAR
              </Text>
              <Text style={styles.stylesContainerEmergenciaNumber}>190</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  imagEM: {
    height: 60,
    width: 59,
    left: 10,
    alignItems: "center",
    marginLeft: 20,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  containerTop: {
    backgroundColor: `${fgThemeColor}`,
    height: 88,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  textContainerTop: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "400",
  },
  logoEmergencia: {
    resizeMode: "contain",
    width: 56,
    marginRight: 20,
  },
  menu: {
    marginLeft: 20,
    marginRight: 15,
  },
  containerEmergencia: {
    paddingHorizontal: "25%",
  },
  stylesContainerEmergencia: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    height: "30%",
    width: "100%",
    minWidth: 300,
    top: 14,
    backgroundColor: "#ffff",
    borderRadius: 3,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    flexDirection: "column",
    flex: 1,
    textAlign: "center",
    alignItems: "center",
  },
  stylesContainerEmergenciaText: {
    verticalAlign: "top",
    fontSize: 15,
    fontWeight: "400",
  },
  stylesContainerEmergenciaNumber: {
    flex: 1,
    height: 33,
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 36,
    alignItems: "center",
    fontWeight: "500",
  },
  containerFooter: {
    width: "100%",
    height: 30,
    backgroundColor: "#71AAFF",
    position: "absolute",
    bottom: 0,
  },
});
