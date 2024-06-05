import { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
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

interface NotificationData {
  data: string;
  medico: string;
  especialidade: string;
  descricao: string;
}

function ConsultasAdd() {
  const navigation = useNavigation();
  const AbrirNavMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<"date" | "time">("date");
  const [show, setShow] = useState(false);
  const [medico, setMedico] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    const checkNotification = async () => {
      const storedData = await AsyncStorage.getItem("notification_date");
      if (storedData) {
        const notificationData: NotificationData = JSON.parse(storedData);
        setDate(new Date(notificationData.data));
        setMedico(notificationData.medico);
        setEspecialidade(notificationData.especialidade);
        setDescricao(notificationData.descricao);
      }
    };

    checkNotification();
  }, []);

  const agendarNotificacoes = async (notificationData: NotificationData) => {
    const triggerDate = new Date(notificationData.data);
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Chegou a hora de sua consulta/exame!",
        body: `O médico(a) ${notificationData.medico} especialista em ${notificationData.especialidade} está a sua espera!`,
      },
      trigger: { date: triggerDate },
    });
    Alert.alert("Notificação Agendada");
  };

  const storeData = async (notificationData: NotificationData) => {
    try {
      const notificationDateStr = JSON.stringify(notificationData);
      await AsyncStorage.setItem("notification_date", notificationDateStr);
      Alert.alert(
        "Dados Salvos!",
        "Os dados se sua consulta foram guardados. Iremos te notificar no dia agendado"
      );
    } catch (e) {
      console.log(e);
    }
  };

  const saveNotification = async () => {
    const notificationData: NotificationData = {
      data: date.toISOString(),
      medico,
      especialidade,
      descricao,
    };
    await storeData(notificationData);
    await agendarNotificacoes(notificationData);
  };

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode: "date" | "time") => {
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
      <View style={styles.containerTopoItems}>
        <TouchableOpacity onPress={AbrirNavMenu}>
          <Image
            source={require("@/src/assets/menu-lateral.png")}
            style={styles.containerTopoMenuLat}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.containerTopoTexto}>Consultas e Exames</Text>
        <Image source={require("@/src/assets/perfil.png")} style={styles.containerTopoImagem}></Image>
      </View>
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
        <DateTimePicker
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
          />
        </View>
        <View>
          <Text style={styles.labelTextInput}>Especialidade</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setEspecialidade}
            value={especialidade}
          />
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
            onChangeText={setDescricao}
            value={descricao}
          />
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
    backgroundColor: `${fgThemeColor}`,
    width: 310,
    height: 59,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
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
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotoesNotificacao: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "400",
    opacity: 0.6,
  },
  textoBotaoConcluido: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "400",
    lineHeight: 30,
    opacity: 0.6,
  },
});

export default ConsultasAdd;
