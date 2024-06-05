import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import {
  bgThemeColor,
  fgThemeColor,
  secBgThemeColor,
  textThemeColor,
} from "@/src/constants/ColorTheming";

interface IHeader {
  titulo: string;
  imagem: string;
}

function Header({ tituloECaminho }: { tituloECaminho: IHeader }) {
  const navigation = useNavigation();
  const AbrirNavMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  console.log(tituloECaminho.imagem);
  return (
    <View style={styles.containerTopoItems}>
      <TouchableOpacity onPress={AbrirNavMenu}>
        <Image
          source={require("@/src/assets/menu-lateral.png")}
          style={styles.containerTopoMenuLat}
        ></Image>
      </TouchableOpacity>
      <Text style={styles.containerTopoTexto}>{tituloECaminho.titulo}</Text>
      <Image
        source={require(`${tituloECaminho.imagem}`)}
        style={styles.containerTopoImagem}
      ></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  containerTopoItems: {
    backgroundColor: `${fgThemeColor}`,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    height: 88,
  },
  containerTopoMenuLat: {
    height: 25,
    width: 35,
  },
  containerTopoTexto: {
    flex: 1,
    textAlign: "center",
    fontWeight: "400",
    color: "#ffffff",
    fontSize: 24,
  },
  containerTopoImagem: {
    resizeMode: "contain",
    height: 60,
    width: 60,
  },
});
export default Header;
