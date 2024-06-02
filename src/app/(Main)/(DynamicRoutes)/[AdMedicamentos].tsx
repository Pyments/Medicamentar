import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput,Appearance,SafeAreaView, ScrollView} from "react-native";
import CheckBox from "expo-checkbox";
import {bgThemeColor,fgThemeColor,secBgThemeColor,textThemeColor} from "@/src/constants/ColorTheming";
import {router} from "expo-router";
import {useState} from "react";
import Footer from "@/src/components/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AdMedicamentos() {
  const [medicamento, setMedicamento] = useState("");
  const [dose, setDose] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSave = async () => {
    const novoMedicamento = {
      medicamento,
      dose,
      quantidade,
      periodo,
      vencimento,
      usoContinuo: isChecked,
    };

    try {
      const medicamentos = await AsyncStorage.getItem("medicamentos");
      const medicamentosArray = medicamentos ? JSON.parse(medicamentos) : [];
      medicamentosArray.push(novoMedicamento);
      await AsyncStorage.setItem("medicamentos", JSON.stringify(medicamentosArray));
      router.push("../(TabMenu)/Medicamentos");
    } catch (error) {
      console.error("Error saving data", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MEDICAMENTOS</Text>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.headerImage}
            source={require("@/src/assets/Medicamento_icon.png")}
          />
        </View>
      </View>
      <View style={styles.conteinerForm}>
        <Text style={styles.containerDadosTitulo}>Medicamento</Text>
        <TextInput
          style={[styles.containerInput, styles.fullWidth]}
          value={medicamento}
          onChangeText={setMedicamento}
        />

        <View style={styles.containerInputsTst}>
          <View style={styles.inputWrapperSmall}>
            <Text style={styles.containerDadosTitulo}>Dose</Text>
            <TextInput
              style={styles.containerInput}
              value={dose}
              onChangeText={setDose}
            />
          </View>
          <View style={styles.inputWrapperLarge}>
            <Text style={styles.containerDadosTitulo}>Quantidade por dose</Text>
            <TextInput
              style={styles.containerInput}
              value={quantidade}
              onChangeText={setQuantidade}
            />
          </View>
        </View>
        <View style={styles.containerInputsTst}>
          <View style={styles.inputWrapperSmall}>
            <Text style={styles.containerDadosTitulo}>Período</Text>
            <TextInput
              style={styles.containerInput}
              value={periodo}
              onChangeText={setPeriodo}
            />
          </View>
          <View style={styles.inputWrapperSmall}>
            <Text style={styles.containerDadosTitulo}>Vencimento</Text>
            <TextInput
              style={styles.containerInput}
              value={vencimento}
              onChangeText={setVencimento}
            />
          </View>
          <View style={styles.checkboxWrapper}>
            <Text style={styles.containerDadosTitulo}>Uso contínuo</Text>
            <CheckBox
              style={styles.checkBox}
              value={isChecked}
              onValueChange={setIsChecked}
              color={`${secBgThemeColor}`}
            />
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.containerBotao} onPress={handleSave}>
            <Image
              source={require("@/src/assets/botao_salvar.png")}
              style={styles.containerImagemBotaoSalvar}
            />
            <Text style={styles.textoForm}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("../(TabMenu)/Medicamentos")}
            style={styles.containerBotao}
          >
            <Image
              source={require("@/src/assets/seta_voltar.png")}
              style={styles.containerImagemBotaoSalvar}
            />
            <Text style={styles.textoForm}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerInputsTst: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  header: {
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: `${fgThemeColor}`,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    height: 88,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  headerImage: {
    resizeMode: "contain",
    width: 56,
    height: 56,
  },
  imageWrapper: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 4,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 90,
  },
  checkBox: {
    backgroundColor: `${secBgThemeColor}`,
    height: 33,
    width: 33,
  },
  containerDadosTitulo: {
    marginVertical: 11,
    color: `${textThemeColor}`,
    fontSize: 15,
  },
  containerInput: {
    backgroundColor: `${secBgThemeColor}`,
    color: `${textThemeColor}`,
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 50,
  },
  fullWidth: {
    width: "100%",
  },
  containerImagemBotaoSalvar: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  containerBotao: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: `${secBgThemeColor}`,
    borderRadius: 5,
    width: 100,
    height: 40,
    flexDirection: "row",
  },
  inputWrapperSmall: {
    flex: 1,
    marginRight: 20,
  },
  inputWrapperLarge: {
    flex: 2,
  },
  checkboxWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
  },
  conteinerForm: {
    paddingHorizontal: 20,
    width: "100%",
    maxWidth: 450,
    alignSelf: "center",
  },
  textoForm: {
    fontSize: 15,
  },
  container: {
    backgroundColor: `${bgThemeColor}`,
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});