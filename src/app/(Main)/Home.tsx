import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTopo}>
        <Image
          source={require("../../assets/logo_nome.png")}
          style={styles.containerImage}
        ></Image>
        <TouchableOpacity>
          <Image
            source={require("../../assets/notificacao_logo.png")}
            style={styles.containerImageNotificacao}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.containerColumns}>
        <View style={styles.containerColumn}>
          <TouchableOpacity
            onPress={() =>
              router.navigate({
                pathname: "./Exames",
              })
            }
          >
            <Image
              source={require("../../assets/consultaseExames.png")}
              style={styles.containerBotoes}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/emergencia.png")}
              style={styles.containerBotoes}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.navigate({ pathname: "./Configuration" })}
          >
            <Image
              source={require("../../assets/config.png")}
              style={styles.containerBotoes}
            ></Image>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() =>
              router.navigate({
                pathname: "./Medicamentos",
                
              })
            }
          >
            <Image
              source={require("../../assets/medicamentos.png")}
              style={styles.containerBotoes}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.navigate({pathname: "./Perfil"})}>
            <Image
              source={require("../../assets/perfil_nome.png")}
              style={styles.containerBotoes}
            ></Image>
            
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/sair.png")}
              style={styles.containerBotoes}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    width: "100%",
    height: "100%",
  },
  containerTopo: {
    width: "100%",
    height: 110,
    minHeight: 100,
    backgroundColor: "#71AAFF",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 80,
  },
  containerImage: {
    width: 190,
    height: 70,
    resizeMode: "contain",
  },
  containerImageNotificacao: {
    width: 30,
    resizeMode: "contain",
  },
  containerColumns: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 30,
    gap: 30,
  },
  containerColumn: {
    flexDirection: "column",
  },
  containerBotoes: {
    resizeMode: "contain",
    width: 120,
    height: 120,
    marginBottom: 20,
  },
});
