import { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import DateTimerPicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import {
  bgThemeColor,
  fgThemeColor,
  secBgThemeColor,
  textThemeColor,
} from "@/src/constants/ColorTheming";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

interface ItituloECaminho {
  titulo: string;
  caminhoImagem: string;
}

function ConsultasAdd() {
  const navigation = useNavigation();
  const AbrirNavMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [notificationDate, setNotificationDate] = useState("");
  const [data, setdata] = useState("");
  const [medico, setMedico] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [descricao, setdescricao] = useState("");

  useEffect(() => {
    const checkNotification = async () => {
      const storedData = await AsyncStorage.getItem("notification_date");
      if (storedData) {
        setNotificationDate(storedData);
        const notification_dados = JSON.parse(storedData);
        setdata(notification_dados.data);
        setMedico(notification_dados.medico);
        setEspecialidade(notification_dados.especialidade);
        setdescricao(notification_dados.descricao);
      }
    };

    checkNotification();
  }, []);

  const agendarNotificacoes = async (notification_dados: any) => {
    const triggerDate = new Date(notification_dados.data);
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Chegou a hora de sua consulta/exame!",
        body: `O médico(a) ${medico}  especialista em ${especialidade} está a sua espera!`,
      },
      trigger: triggerDate,
    });
    Alert.alert("Notificação Agendada");
  };

  const storeData = async (notification_dados: any) => {
    try {
      const notificationDateStr = JSON.stringify(notification_dados);
      await AsyncStorage.setItem("notification_date", notificationDateStr);
      Alert.alert(
        "Dados Salvos!",
        "Os dados se sua consulta foram guardados. Iremos te notificar no dia agendado"
      );
    } catch (e) {
      console.log(e);
    }
  };

  const tempoFormatado = (date: any) => {
    var dia = date.getDate().toString().padStart(2, "0");
    var mes = (date.getMonth() + 1).toString().padStart(2, "0");
    var ano = date.getFullYear();
    var horas = date.getHours().toString().padStart(2, "0");
    var minutos = date.getMinutes().toString().padStart(2, "0");
    return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
  };

  const saveNotification = async () => {
    const formattedDate = tempoFormatado(date);
    const notification_dados = {
      data: date.toISOString(),
      medico,
      especialidade,
      descricao,
    };
    setNotificationDate(formattedDate);
    await storeData(notification_dados);
    await agendarNotificacoes(notification_dados);
  };

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    const formattedDate = tempoFormatado(currentDate);
    setNotificationDate(formattedDate);
  };
  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
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
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <Header
        tituloECaminho={{
          titulo: "Consultas e Exames",
          imagem: "@/src/assets/hospital.png",
        }}
      />{" "}
      <View>
        <View style={styles.viewBotoesNotificacao}>
          <TouchableOpacity
            style={styles.botoesNotificacao}
            onPress={() => showMode("date")}
          >
            <Text style={styles.textoBotoesNotificacao}>Escolher Data</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botoesNotificacao}
            onPress={() => showMode("time")}
          >
            <Text style={styles.textoBotoesNotificacao}>Escolher Hora</Text>
          </TouchableOpacity>
        </View>
      </View>
      {show && (
        <DateTimerPicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View style={styles.containerInput}>
        <View style={styles.inputOne}>
          <Text style={styles.labelTextInput}>Médico</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setMedico}
            value={medico}
          ></TextInput>
        </View>
        <View>
          <Text style={styles.labelTextInput}>Especialidade</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setEspecialidade}
            value={especialidade}
          ></TextInput>
        </View>
        <View>
          <Text style={styles.labelTextInput}>Descrição</Text>
          <TextInput
            style={{
              backgroundColor: `${secBgThemeColor}`,
              borderRadius: 10,
              height: "auto",
              padding: 10,
              marginHorizontal: 26,
            }}
            multiline={true}
            numberOfLines={5}
            maxLength={300}
            onChangeText={setdescricao}
            value={descricao}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={styles.botaoConcluido}
          onPress={saveNotification}
        >
          <Text style={styles.textoBotaoConcluido}>Concluido</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${bgThemeColor}`,
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
  selectContainer: {
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  dateTimeText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "armata-regular-400",
  },
  containerInput: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  labelTextInput: {
    color: `${textThemeColor}`,
    backgroundColor: `${bgThemeColor}`,
    fontFamily: "armata-regular-400",
    marginHorizontal: 26,
  },
  textInput: {
    backgroundColor: `${secBgThemeColor}`,
    height: 40,
    borderRadius: 10,
    marginHorizontal: 26,
  },
  inputOne: {
    marginBottom: 20,
  },
  botaoConcluido: {
    backgroundColor: `${fgThemeColor}`, // #58C0F3 PARA DISABLED
    width: 310,
    height: 59,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 15,
  },
  viewBotoesNotificacao: {
    gap: 10,
    marginTop: 25,
  },
  botoesNotificacao: {
    width: 310,
    height: 33,
    alignSelf: "center",
    backgroundColor: `${fgThemeColor}`,
    borderRadius: 3,
  },
  textoBotoesNotificacao: {
    color: "#ffffff",
    margin: "auto",
    fontSize: 15,
    fontWeight: "400",
    opacity: 0.6,
  },
  textoBotaoConcluido: {
    margin: "auto",
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "400",
    lineHeight: 30,
    opacity: 0.6,
  },
});

export default ConsultasAdd;
