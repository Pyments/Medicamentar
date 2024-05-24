import { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MMKV } from "react-native-mmkv";

const storage = new MMKV();

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
    const medicamentosString = storage.getString("medicamentos");
    const medicamentosArray: Medicamento[] = medicamentosString ? JSON.parse(medicamentosString) : [];
    setMedicamentos(medicamentosArray);
  }, []);

  const handleDelete = (index: number) => {
    const updatedMedicamentos = [...medicamentos];
    updatedMedicamentos.splice(index, 1);
    setMedicamentos(updatedMedicamentos);
    storage.set("medicamentos", JSON.stringify(updatedMedicamentos));
  };

  return (
    <View>
      {medicamentos.map((medicamentoData, index) => (
        <View key={index} style={styles.card}>
          <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteButton}>
            <Text style={styles.deleteText}>X</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.cardTitle}>{medicamentoData.medicamento}</Text>
            <View style={styles.infoWrapper}>
              <Text style={styles.infoText}>Dose: {medicamentoData.dose}</Text>
              <Text style={styles.infoText}>Quantidade por dose: {medicamentoData.quantidade}</Text>
              <Text style={styles.infoText}>Período: {medicamentoData.periodo}</Text>
              <Text style={styles.infoText}>Vencimento: {medicamentoData.vencimento}</Text>
              <Text style={styles.infoText}>Uso Contínuo: {medicamentoData.usoContinuo ? "Sim" : "Não"}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}}>
            {/* Botão de detalhes (se desejar implementar) */}
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "space-between",
    backgroundColor: "#D9D9D9",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    minHeight: 95,
    margin: 14,
    position: "relative",
  },
  deleteButton: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 30,
    height: 30,
    backgroundColor: "red",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  infoWrapper: {
    flexDirection: "column",
    display: "flex",
    marginLeft: 10,
  },
  infoText: {
    marginVertical: 2,
    fontSize: 15,
  },
  cardTitle: {
    fontSize: 23,
  },
  cardImage: {
    resizeMode: "contain",
    width: 35,
  },
});