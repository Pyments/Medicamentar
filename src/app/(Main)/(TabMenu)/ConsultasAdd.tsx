import React, { useState, useCallback } from "react";
import {
    SafeAreaView,
    View,
    StatusBar,
    Text,
    StyleSheet,
    Platform,
    Button,
    TextInput
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import DateTimerPicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";


function ConsultasAdd() {
    const placeholder = {
        label: "Selecione uma Especialidade",
        value: null,
        color: "#555555",
    }

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);
    const [text, setText] = useState("");

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === "ios");
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear();
        let fTime = "Horário: " + tempDate.getHours() + ":" + tempDate.getMinutes();
        setText(fDate + "\n" + fTime);

        console.log(fDate + " (" + fTime + ")");
    }
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

            /* -- Carregamento da fonte -- */
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
    
    return(
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <StatusBar/>
            <View style={styles.header}></View>
            
            <View style={styles.selectContainer}>
                <RNPickerSelect
                    placeholder={placeholder}
                    onValueChange={ value => console.log(value) }
                    items={[
                        { label: "Cardiologista", value: "cardiologista" },
                        { label: "Dentista", value: "dentista"},
                        { label: "Endocrinologista", value: "endocrinologista"},
                        { label: "Ginecologista", value: "ginecologista" },
                        { label: "Ortopedista", value: "ortopedista"},
                        { label: "Urologista", value: "urologista" },
                    ]}
                />
            </View>
               
            <View>
                <Text style={styles.dateTimeText}>{text}</Text>
                <View>
                    <Button title="Escolher Data" onPress={() => showMode("date")}/>
                </View>
                <View>
                    <Button title="Escolher Hora" onPress={() => showMode("time")}/>
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
                    <Text style={styles.labelTextInput}>Médico:</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View >
                    <Text style={styles.labelTextInput}>Clínica/Hospital:</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
            </View>
            
            <View style={styles.footer}></View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8E8E8",
    },
    header: {
        height: 31,
        width: "100%",
        backgroundColor: "#20A2EB",
        
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
        fontFamily: "armata-regular-400",
    },
    textInput: {
        backgroundColor: "#FFFFFF",
        height: 40,
        borderRadius: 10,
    },
    inputOne: {
        marginBottom: 20,
    },
    footer: {
        height: 31,
        width: "100%",
        backgroundColor: "#20A2EB",
        position: "absolute",
        bottom: 0,
    },

});

export default ConsultasAdd;