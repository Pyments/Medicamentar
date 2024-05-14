import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, SafeAreaView, BackHandler, Alert, Platform, StatusBar, TouchableWithoutFeedback } from "react-native";
import { router, useNavigation } from "expo-router";
import { useState, useCallback } from "react";
import * as animatable from "react-native-animatable"
import { DrawerActions } from "@react-navigation/native";
import { useFonts } from "expo-font"
import * as SplashScreen from 'expo-splash-screen';

import NotifiCard from "@/src/components/NotifiCard";
import Footer from "@/src/components/Footer";
import { bgThemeColor, fgThemeColor, textThemeColor, secBgThemeColor, accentThemeColor } from "@/src/constants/ColorTheming"

export default function Home(this: any) {
  const [IsModalVisible, setIsModalVisible] = useState(false);

  const navigation = useNavigation();

  const AbrirNavMenu = () => {
      navigation.dispatch(DrawerActions.openDrawer());
  };

  const [fontsLoaded, fontError] = useFonts({
    "armata-regular-400": require("../../../fonts/armata-regular-400.ttf"),
  });   

  const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
      }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
      return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTopo}>
        <TouchableOpacity onPress={AbrirNavMenu}>
          <Image
            source={require("../../../assets/logo_nome.png")}
            style={styles.containerImage}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.animation.shake(600).then(() => setIsModalVisible(true))}}>
          <animatable.Image     
            ref={ref => {this.animation = ref;}}
            source={require("../../../assets/notificacao_logo.png")}
            style={styles.containerImageNotificacao}
          ></animatable.Image>
        </TouchableOpacity>
        <Modal 
        visible={IsModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        transparent= {true}
        animationType="slide"
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
      <animatable.View animation="zoomIn" delay={50} style={styles.containerColumns}>
        <View style={styles.containerColumn}>
          <TouchableOpacity
            style={styles.containerBotoes}
            onPress={() =>
              router.navigate({
                pathname: "./Exames",
              })
            }
          >
            <View style={{}}>
            <Image
              source={require("@/src/assets/hospital.png")}
              style={styles.containerBotoesImage}
            ></Image>
            </View>
          </TouchableOpacity>
          <Text style={styles.texto}>Consultas e Exames</Text>
          <TouchableOpacity
          style={styles.containerBotoes}
          onPress={() =>
            router.navigate({
              pathname: "./Emergencia",
            })
          }
          >
            <Image
              source={require("@/src/assets/emergency.png")}
              style={styles.containerBotoesImage}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.texto}>Emergência</Text>
          <TouchableOpacity
            style={styles.containerBotoes}
            onPress={() => router.navigate({ pathname: "./Configuration" })}
          >
            <Image
              source={require("@/src/assets/configuracoes.png")}
              style={styles.containerBotoesImage}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.texto}>Configurações</Text>
        </View>
        <View style={styles.containerColumn}>
          <TouchableOpacity
            style={styles.containerBotoes}
            onPress={() =>
              router.navigate({
                pathname: "./Medicamentos",
                
              })
            }
          >
            <Image
              source={require("@/src/assets/pilulas.png")}
              style={styles.containerBotoesImage}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.texto}>Medicamentos</Text>
          <TouchableOpacity 
          onPress={() => router.navigate({pathname: "./Perfil"})}
          style={styles.containerBotoes}
          >
            <Image
              source={require("@/src/assets/user.png")}
              style={styles.containerBotoesImage}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.texto}>Perfil</Text>
          <TouchableOpacity 
          style={styles.containerBotoes}
          onPress={() => Alert.alert("Deseja sair?", "Você tem certeza que deseja sair do app?",
            [{
              text: "Não",
              style: "cancel",
            },
            {
              text: "Sim",
              onPress: () => BackHandler.exitApp()
            } 
            ]
           )}>
            <Image
              source={require("@/src/assets/sair_solo.png")}
              style={styles.containerBotoesImage}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.texto}>Sair</Text>
        </View>
      </animatable.View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${bgThemeColor}`,
    width: "100%",
    height: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  containerTopo: {
    height: 88,
    backgroundColor: `${fgThemeColor}`,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerImage: {
    width: 190,
    height: 70,
    resizeMode: "contain",
  },
  containerImageNotificacao: {
    width: 35,
    resizeMode: "contain",
  },
  containerColumns: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 50,
  },
  containerColumn: {
    flexDirection: "column",
  },
  containerBotoes: {
    alignSelf:"center",
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: `${secBgThemeColor}`,
    width: 80,
    height: 80,
    marginBottom: 20,
    borderWidth: 2.5,
    borderRadius: 10,
    borderColor: `${fgThemeColor}`,
    marginVertical: 10,
  },
  containerBotoesImage:{
    resizeMode: "contain",
    width:65,
    height:65
  },
  containerModal:{
    width: "100%",
    maxWidth: 400,
    height: "100%",
    alignSelf: "center",
    marginTop: 140,
    borderRadius: 20,
    backgroundColor: "#c1c1c1"
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
  },
  texto:{
    color: `${textThemeColor}`,
    alignSelf: "center",
    fontFamily: "armata-regular-400",
    fontSize: 14,
    marginBottom: 10,
    marginTop: -15
  }
});
