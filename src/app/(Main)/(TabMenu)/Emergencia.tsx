import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useState } from "react";

import Footer from "@/src/components/Footer";
import {
  bgThemeColor,
  fgThemeColor,
  secBgThemeColor,
  textThemeColor,
} from "@/src/constants/ColorTheming";

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
          <Image source={require("@/src/assets/menu-lateral.png")} />
        </TouchableOpacity>
        <Text style={styles.textContainerTop}>Emergência</Text>
        <View style={styles.headerImgWrapper}>
          <Image
            style={styles.logoEmergencia}
            source={require("@/src/assets/Emergencia_icons/Icon_em.png")}
          />
        </View>
      </View>
      <View style={styles.cardContainer}>
        {buttonClicked && (
          <TouchableOpacity
            onPress={handleButtonClick}
            style={styles.containerEmergencia}
          >
            <Image
              style={styles.containerImage}
              source={require("@/src/assets/Emergencia_icons/SAMU_em.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.wrapperText}>SAMU</Text>
              <Text style={styles.wrapperNumber}>192</Text>
            </View>
          </TouchableOpacity>
        )}

        {buttonClicked && (
          <TouchableOpacity
            onPress={handleButtonClick}
            style={styles.containerEmergencia}
          >
            <Image
              style={styles.containerImage}
              source={require("@/src/assets/Emergencia_icons/BOMB_em.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.wrapperText}>BOMBEIROS</Text>
              <Text style={styles.wrapperNumber}>193</Text>
            </View>
          </TouchableOpacity>
        )}
        {buttonClicked && (
          <TouchableOpacity
            onPress={handleButtonClick}
            style={styles.containerEmergencia}
          >
            <Image
              style={styles.containerImage}
              source={require("@/src/assets/Emergencia_icons/CVV_em.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.wrapperText}>CT. DE VALORIZAÇÃO A VIDA</Text>
              <Text style={styles.wrapperNumber}>188</Text>
            </View>
          </TouchableOpacity>
        )}
        {buttonClicked && (
          <TouchableOpacity
            onPress={handleButtonClick}
            style={styles.containerEmergencia}
          >
            <Image
              style={styles.containerImage}
              source={require("@/src/assets/Emergencia_icons/PM_em.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.wrapperText}>POLÍCIA MILITAR</Text>
              <Text style={styles.wrapperNumber}>190</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: `${bgThemeColor}`,
    alignItems: "center",
    flex: 1,
  },
  containerTop: {
    backgroundColor: `${fgThemeColor}`,
    justifyContent: "space-around",
    paddingHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    width: "100%",
    height: 88,
  },
  textContainerTop: {
    textAlign: "center",
    fontWeight: "400",
    color: "#FFFFFF",
    fontSize: 24,
    flex: 1,
  },
  headerImgWrapper: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    height: 60,
    width: 60,
  },
  logoEmergencia: {
    resizeMode: "contain",
    height: 56,
    width: 56,
  },
  cardContainer: {
    borderRadius: 3,
    display: "flex",
    maxWidth: 750,
    width: "90%",
  },
  containerEmergencia: {
    backgroundColor: `${secBgThemeColor}`,
    borderColor: `${textThemeColor}55`,
    justifyContent: "space-between",
    borderBottomWidth: 5,
    alignItems: "center",
    flexDirection: "row",
    borderRightWidth: 5,
    marginVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    width: "100%",
  },
  containerImage: {
    resizeMode: "contain",
    marginLeft: 20,
    width: 70,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  wrapperText: {
    color: `${textThemeColor}`,
    fontSize: 15,
  },
  wrapperNumber: {
    color: `${textThemeColor}`,
    fontSize: 36,
  },
});
