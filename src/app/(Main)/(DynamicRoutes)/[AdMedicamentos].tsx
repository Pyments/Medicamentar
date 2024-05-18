import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import CheckBox from "expo-checkbox";
import { fgThemeColor } from "@/src/constants/ColorTheming";
import { router } from "expo-router";

export default function AdMedicamentos() {
  return (
    <View style={styles.container}>
      <View style={styles.containerBox1}></View>
      <View style={styles.conteinerForm}>
        <Text style={styles.textoForm}>Nome do paciente:</Text>
        <TextInput style={styles.Input}></TextInput>
        <Text style={styles.textoForm}>Medicamento:</Text>
        <TextInput style={styles.Input}></TextInput>
        <View style={styles.problema}>
          <Text style={styles.textoForm}>Dosagem:</Text>
          <Text style={styles.textoUsoContinuo}>Uso contínuo</Text>
        </View>
        <TextInput style={styles.InputDosagem}></TextInput>
        <View style={styles.posicaoCheckBox}>
          <CheckBox style={styles.checkBox1}></CheckBox>
          <CheckBox style={styles.checkBox2}></CheckBox>
          <Text style={styles.sim}>Sim</Text>
          <Text style={styles.nao}>Não</Text>
        </View>
        <View style={styles.conteiner2}>
          <View style={styles.problema2}>
            <Text style={styles.textoForm}>Periodo:</Text>
            <Text style={styles.textoComprimidoP}>
              Comprimidos por Período:
            </Text>
          </View>
          <View style={styles.problema3}>
            <TextInput style={styles.InputPeriodo}></TextInput>
            <TextInput style={styles.InputComprimidoP}></TextInput>
          </View>
          <View style={styles.problema4}>
            <Text style={styles.textoForm}>Médico:</Text>
            <Text style={styles.textoVencimento}>Vencimento:</Text>
          </View>
          <View style={styles.problema5}>
            <TextInput style={styles.InputMedico}></TextInput>
            <TextInput style={styles.InputVenciemnto}></TextInput>
          </View>
        </View>
        <View style={styles.posicaoBotaoSalvar}>
          <TouchableOpacity style={styles.containerBotao}>
            <Image
              source={require("@/src/assets/botao_salvar.png")}
              style={styles.containerImagemBotaoSalvar}
            ></Image>
            <Text style={styles.textoForm}>Salvar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.posicaoBotaoVoltar}>
          <TouchableOpacity 
          onPress={
            ()=>router.push("../(TabMenu)/Medicamentos")
          }
          style={styles.containerBotao}>
            <Image
              source={require("@/src/assets/seta_voltar.png")}
              style={styles.containerImagemBotaoSalvar}
            ></Image>
            <Text style={styles.textoForm}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerBox2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  problema5: {
    flexDirection: "row",
  },
  problema4: {
    flexDirection: "row",
  },
  problema3: {
    flexDirection: "row",
    gap: 5,
  },
  problema2: {
    flexDirection: "row",
  },
  conteiner2: {
    top: -100,
  },
  problema: {
    flexDirection: "row",
  },
  posicaoBotaoVoltar: {
    top: -110,
    left: "25%",
  },
  posicaoBotaoSalvar: {
    top: -70,
    left: "-23%",
  },
  containerImagemBotaoSalvar: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  containerBotao: {
    borderWidth: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    width: 100,
    height: 40,
    flexDirection: "row",
  },
  posicaoCheckBox: {
    left: "5%",
    top: 20,
  },
  InputVenciemnto: {
    width: "42%",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    shadowColor: "#000000",
    elevation: 15,
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 1,
    fontSize: 15,
    fontWeight: "600",
    borderRadius: 3,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: "7%",
  },
  textoVencimento: {
    fontSize: 15,
    //mudar a fonte aqui
    marginLeft: "44%",
  },
  InputMedico: {
    width: "52%",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    shadowColor: "#000000",
    elevation: 15,
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 1,
    fontSize: 15,
    fontWeight: "600",
    borderRadius: 3,
    paddingTop: 5,
    paddingBottom: 5,
  },
  InputComprimidoP: {
    width: "72%",
    minWidth: "40%",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    shadowColor: "#000000",
    elevation: 15,
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 1,
    fontSize: 15,
    fontWeight: "600",
    borderRadius: 3,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: "5%",
  },
  textoComprimidoP: {
    fontSize: 15,
    //mudar fonte aqui
    marginLeft: "15%",
  },
  InputPeriodo: {
    width: "23%",
    minWidth: "21%",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    shadowColor: "#000000",
    elevation: 15,
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 1,
    paddingHorizontal: 10,
    fontSize: 15,
    fontWeight: "600",
    borderRadius: 3,
    paddingTop: 5,
    paddingBottom: 5,
  },
  sim: {
    fontSize: 15,
    //mudar fonte aqui
    left: "54%",
    top: -110,
  },
  nao: {
    fontSize: 15,
    //mudar fonte aqui
    left: "80%",
    top: -130,
  },
  checkBox1: {
    width: 33,
    height: 33,
    left: "40%",
    top: -52,
  },
  checkBox2: {
    width: 33,
    height: 33,
    left: "65%",
    top: -85,
  },
  textoUsoContinuo: {
    fontSize: 15,
    left: "29%",
  },
  InputDosagem: {
    maxWidth: "40%",
    minWidth: "20%",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    shadowColor: "#000000",
    elevation: 15,
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 1,
    paddingHorizontal: 10,
    fontSize: 15,
    fontWeight: "600",
    borderRadius: 3,
    paddingTop: 5,
    paddingBottom: 5,
  },
  containerBox1: {
    backgroundColor: `${fgThemeColor}`,
    width: "100%",
    height: 40,
  },
  containerBox2: {
    backgroundColor: `${fgThemeColor}`,
    width: "100%",
    height: 60,
    top: "91%",
  },
  Input: {
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    shadowColor: "#000000",
    elevation: 15,
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 1,
    paddingHorizontal: 10,
    fontSize: 15,
    fontWeight: "600",
    borderRadius: 3,
    paddingTop: 5,
    paddingBottom: 5,
  },
  conteinerForm: {
    justifyContent: "space-around",
    paddingHorizontal: 40,
    position: "absolute",
    width: "100%",
    alignSelf: "center",
    top: 75,
    gap: 0,
    maxWidth: 450,
    minWidth: 350,
  },
  textoForm: {
    fontSize: 15,
    //mudar fonte aqui
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
