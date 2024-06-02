import { useEffect,useState, } from "react";
import {Link,router} from "expo-router";
import {bgThemeColor,fgThemeColor,secBgThemeColor,textThemeColor} from "@/src/constants/ColorTheming";
import { ScrollView,View,StyleSheet,Image,Text,TouchableOpacity} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Medicamento {
  medicamento: string;
  dose: string;
  quantidade: string;
  periodo: string;
  vencimento: string;
  usoContinuo: boolean;
}

export default function CardMedicamentos() {
  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);

  useEffect(() => {
    const fetchMedicamentos = async () => {
      try {
        const medicamentosString = await AsyncStorage.getItem("medicamentos");
        const medicamentosArray: Medicamento[] = medicamentosString ? JSON.parse(medicamentosString) : [];
        setMedicamentos(medicamentosArray);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchMedicamentos();
  }, []);

  const handleDelete = async (index: number) => {
    try {
      const updatedMedicamentos = [...medicamentos];
      updatedMedicamentos.splice(index, 1);
      setMedicamentos(updatedMedicamentos);
      await AsyncStorage.setItem("medicamentos", JSON.stringify(updatedMedicamentos));
    } catch (error) {
      console.error("Error deleting data", error);
    }
  };

  return (
  <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View>
      {medicamentos.map((medicamentoData, index) => (
        <View key={index} style={styles.card}>
          <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteButton}>
            <Image source={require("../assets/Medicamento_component/Lixeira_icon.png")} style={[styles.deleteIcon, { opacity: 0.7 }]} />
          </TouchableOpacity>
          <View>
            <Text style={styles.cardTitle}>{medicamentoData.medicamento}</Text>
            <View style={styles.infoWrapper}>
              <Text style={styles.infoText}>USO CONTÍNUO: {medicamentoData.usoContinuo ? "Sim" : "Não"}</Text>
              <Text style={styles.infoText}>Quantidade: {medicamentoData.quantidade}</Text>
              <Text style={styles.infoText}>Vencimento: {medicamentoData.vencimento}</Text>
              <Text style={styles.infoText}>Dose: {medicamentoData.dose}</Text>
              <Text style={styles.infoText}>Período: {medicamentoData.periodo}</Text>
              
            </View>
          </View>
        </View>
      ))}
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 100,
  },

  card: {
    justifyContent: "space-between",
    backgroundColor: `${secBgThemeColor}`,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    minHeight: 140,
    margin: 14,
    position: "relative",
  },
  deleteButton: {
    position: "absolute",
    top: "50%",
    transform: [{translateY: -15}],
    right: 35,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteIcon: {
    width: 30,
    height: 34,
  },
  infoWrapper: {
    flexDirection: "column",
    display: "flex",
    marginLeft: 20,
  },
  infoText: {
    fontFamily: "armata-regular-400",
    fontSize: 13,
    color: `${textThemeColor}`,
  },
  cardTitle: {
    color: `${textThemeColor}`,
    fontFamily: "armata-regular-400",
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 10,
  },
  cardImage: {
    resizeMode: "contain",
    width: 35,
  },
});