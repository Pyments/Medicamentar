import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Platform,
  StatusBar,
  Appearance,
  Alert,
} from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation, router } from "expo-router";

import Footer from "@/src/components/Footer";
import {
  bgThemeColor,
  fgThemeColor,
  secBgThemeColor,
  textThemeColor,
} from "@/src/constants/ColorTheming";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Perfil() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [endereco, setEndereco] = useState("");
  const [tipoSanguineo, setTipoSanguineo] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const handleSave = async () => {
    const dadosPerfil = {
      nome,
      idade: Number(idade),
      endereco,
      tipoSanguineo,
      peso,
      altura
    };

    try {
      const dados = await AsyncStorage.getItem("dados_usuario");
      const dadosArray = dados ? JSON.parse(dados) : [];
      dadosArray.push(dadosPerfil);
      await AsyncStorage.setItem("dados_usuario", JSON.stringify(dadosArray));
      Alert.alert("Dados Salvos", "Seus dados foram salvos com sucesso!");
    } catch (e) {
      console.error(e);
    }
  };


  const navigation = useNavigation();

  const AbrirNavMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTopoItems}>
        <TouchableOpacity onPress={AbrirNavMenu}>
          <Image
            source={require("@/src/assets/menu-lateral.png")}
            style={styles.containerTopoMenuLat}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.containerTopoTexto}>PERFIL</Text>
        <Image
          source={require("@/src/assets/perfil.png")}
          style={styles.containerTopoImagem}
        ></Image>
      </View>
      <View style={styles.containerDadosForms}>
        <Text style={styles.containerDadosTitulo}>NOME:</Text>
        <TextInput
          style={styles.containerInput}
          placeholder="ex. João Carlos de  Oliveira"
          placeholderTextColor={Appearance.getColorScheme() === ("light") ? "#00000080": "#FFFFFF80"}
          autoCapitalize="words"
          onChangeText={setNome}
          value={nome}
        ></TextInput>
        <Text style={styles.containerDadosTitulo}>IDADE:</Text>
        <TextInput
          style={styles.containerInput}
          placeholder="ex. 35"
          placeholderTextColor={Appearance.getColorScheme() === ("light") ? "#00000080": "#FFFFFF80"}
          onChangeText={setIdade}
          value={idade}
        ></TextInput>
        <Text style={styles.containerDadosTitulo}>ENDEREÇO:</Text>
        <TextInput
          style={styles.containerInput}
          placeholder="ex. Rua Oliveira 123 - Bairro  Jardim América"
          placeholderTextColor={Appearance.getColorScheme() === ("light") ? "#00000080": "#FFFFFF80"}
          onChangeText={setEndereco}
          value={endereco}
        ></TextInput>
        <Text style={styles.containerDadosTitulo}>TIPO SANGUINEO:</Text>
        <TextInput
          style={styles.containerInput}
          placeholder="ex. A+"
          placeholderTextColor={Appearance.getColorScheme() === ("light") ? "#00000080": "#FFFFFF80"}
          onChangeText={setTipoSanguineo}
          value={tipoSanguineo}
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
            style={[
              styles.containerDadosTitulo,
              {
                backgroundColor: `${secBgThemeColor}`,
                paddingHorizontal: 10,
                width: "49%",
                height: 50,
              },
            ]}
            placeholder="ex. 70"
            placeholderTextColor={Appearance.getColorScheme() === ("light") ? "#00000080": "#FFFFFF80"}
            onChangeText={setPeso}
            value={peso}
          ></TextInput>
          <TextInput
            style={[
              styles.containerDadosTitulo,
              {
                width: "49%",
                height: 50,
                backgroundColor: `${secBgThemeColor}`,
                paddingHorizontal: 10,
              },
            ]}
            placeholder="ex. 1.75"
            placeholderTextColor={Appearance.getColorScheme() === ("light") ? "#00000080": "#FFFFFF80"}
            onChangeText={setAltura}
            value={altura}
          ></TextInput>
        </View>
      </View>
      <View style={styles.buttons}>
          <TouchableOpacity 
          style={styles.containerBotao}
          onPress={handleSave}
          >
            <Image
              source={require("@/src/assets/botao_salvar.png")}
              style={styles.containerImagemBotaoSalvar}
            />
            <Text style={styles.textoForm}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("../(TabMenu)/Home")}
            style={styles.containerBotao}
          >
            <Image
              source={require("@/src/assets/seta_voltar.png")}
              style={styles.containerImagemBotaoSalvar}
            />
            <Text style={styles.textoForm}>Voltar</Text>
          </TouchableOpacity>
        </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: `${bgThemeColor}`,
    height: "100%",
    width: "100%",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
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
  containerDadosTitulo: {
    color: `${textThemeColor}`,
    fontSize: 15,
  },
  containerTopoTexto: {
    fontWeight: "400",
    color: "#FFFFFF",
    fontSize: 24,
  },
  containerTopoImagem: {
    resizeMode: "contain",
    height: 60,
    width: 60,
  },
  containerDadosForms: {
    paddingHorizontal: 15,
    alignSelf: "center",
    paddingTop: 15,
    width: "100%",
    maxWidth: 400,
    gap: 5,
  },
  containerInput: {
    backgroundColor: `${secBgThemeColor}`,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "100%",
    height: 50,
  },
  buttons: {
    width: "100%",
    maxWidth: 400,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  containerBotao: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: `${secBgThemeColor}`,
    borderRadius: 5,
    width: 100,
    height: 40,
    flexDirection: "row",
  },
  containerImagemBotaoSalvar: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  textoForm: {
    fontSize: 15,
  },
});
