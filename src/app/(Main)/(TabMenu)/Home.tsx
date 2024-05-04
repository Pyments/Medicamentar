import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import Footer from "../../../components/Footer";
import NotifiCard from "../../../components/NotifiCard";

export default function Home() {
  const [IsModalVisible, setIsModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTopo}>
        <Image
          source={require("../../../assets/logo_nome.png")}
          style={styles.containerImage}
        ></Image>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Image
            source={require("../../../assets/notificacao_logo.png")}
            style={styles.containerImageNotificacao}
          ></Image>
        </TouchableOpacity>
        <Modal 
        visible={IsModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        transparent= {true}
        animationType="slide"
        presentationStyle="pageSheet"
        >
          <View style={styles.containerModal}>
            <NotifiCard
            titulo="Titulo Placeholder"
            mensagem="Mensagem Placeholder"
            />
            <TouchableOpacity 
            style={styles.containerModalBotao}
            onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.containerModalBotaoTexto}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
              source={require("../../../assets/consultaseExames.png")}
              style={styles.containerBotoes}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() =>
            router.navigate({
              pathname: "./Emergencia",
            })
          }
          >
            <Image
              source={require("../../../assets/emergencia.png")}
              style={styles.containerBotoes}
            ></Image>
            
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.navigate({ pathname: "./Configuration" })}
          >
            <Image
              source={require("../../../assets/config.png")}
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
              source={require("../../../assets/medicamentos.png")}
              style={styles.containerBotoes}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.navigate({pathname: "./Perfil"})}>
            <Image
              source={require("../../../assets/perfil_nome.png")}
              style={styles.containerBotoes}
            ></Image>
            
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/sair.png")}
              style={styles.containerBotoes}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <Footer></Footer>
    </SafeAreaView>
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
    backgroundColor: "#20A2EB",
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
  containerModal:{
    width: "100%",
    maxWidth: 400,
    height: "100%",
    alignSelf: "center",
    marginTop: 140,
    borderRadius: 15,
    backgroundColor: "rgba(232,232,228,1)"
  },
  containerModalBotao:{
    width: 90,
    height: 35,
    alignSelf: "center",
    backgroundColor: "rgba(32, 162, 235, 1)",
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 15,
    justifyContent: "center"
  },
  containerModalBotaoTexto:{
    alignSelf: "center",
    alignContent: "center",
    fontSize: 15,
    fontWeight: "400",
    color: "#ffffff"
  }
});
