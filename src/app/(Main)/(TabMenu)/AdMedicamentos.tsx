import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  CheckBox
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

export default function AdMedicamentos(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerBox2}>
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.containerTexto}
                    >NOME DO PACIENTE:</Text>
                    <TextInput
                    style={styles.containerInput}
                />
                <Text style={styles.containerTexto}
                    >MEDICAMENTO:</Text>
                <TextInput
                    style={styles.containerInput}
                />
            </View>
            <View style={styles.containerTexto2}>
                <Text style={styles.containerTexto}>DOSAGEM:</Text>
                <Text style={styles.containerTexto}>USO CONTÍNUO</Text>
            </View>
            <View style={styles.containerMenor}>
                <TextInput style={styles.containerInputDosagem}>
                </TextInput>
                <CheckBox style={styles.containerCheckBox}>  
                </CheckBox>
                <Text style={styles.containerTexto}>SIM
                </Text>
                <CheckBox style={styles.containerCheckBox}>  
                </CheckBox>
                <Text style={styles.containerTexto}>NÃO
                </Text>
                <View style={styles.containerPeriodo}>
                    <Text style={styles.containerTexto3}>PERÍODO:
                    </Text>
                    <TextInput style={styles.containerInputPeriodo}>
                    </TextInput>
                </View>
            </View>
            <View style={styles.containerBox}>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    containerPeriodo:{
        justifyContent:"space-around",
        paddingHorizontal:15,
        position:'absolute',
        width:200,
        left:0,
        top: "190%",
        gap: 5,
        maxWidth: 400,
        minWidth: 300,
        alignSelf:"center",
    },
    containerTexto3:{
        justifyContent:"space-around",
        paddingRight:135,
        position:'absolute',
        width:"100%",
        left:"7%",
        top: "-70%",
        gap: 5,
        maxWidth: 400,
        minWidth: 300,
        alignSelf:"center",
        textDecorationStyle: "dashed",
        color: "#000000",
        fontSize: 15,
        fontWeight: "600",
    },
    containerTexto2:{
        justifyContent:"space-around",
        paddingRight:135,
        position:'absolute',
        width:"100%",
        top: "38.5%",
        gap: 5,
        maxWidth: 400,
        minWidth: 300,
        alignSelf:"center",
        flexDirection:"row"
    
    },
    containerCheckBox:{
        margin:8
    },
    containerTexto:{
        textDecorationStyle: "dashed",
        color: "#000000",
        fontSize: 15,
        fontWeight: "600",
    },
    containerBox2:{
        backgroundColor: "#1088c4",
        display: "flex",
        minHeight:"4%"
    },
    containerBox:{
        backgroundColor: "#1088c4",
        minHeight:"5%",
        top:"92%"
    },
    containerMenor:{
        justifyContent:"space-around",
        paddingHorizontal:15,
        position:'absolute',
        width:"100%",
        top: "41%",
        gap: 5,
        maxWidth: 400,
        minWidth: 300,
        alignSelf:"center",
        flexDirection:"row"
    },
    container:{
        flex:1,
        width: "100%",
        height:"100%",
    },
    containerForm:{
        justifyContent:"space-around",
        paddingHorizontal:16,
        position: 'absolute',
        width:"100%",
        alignSelf: "center",
        top: "25%",
        gap: 5,
        maxWidth: 400,
        minWidth: 300,
    },

    containerInput:{
        borderWidth: 1,
        backgroundColor: "#ffffff",
        borderColor: "#000000",
        shadowColor: "#000000",
        elevation: 15,
        shadowOffset:{width: -1,height: 1},
        shadowOpacity: 0.9,
        shadowRadius: 1,
        paddingHorizontal: 10,
        fontSize: 15,
        fontWeight: "600",
        borderRadius: 3,
        paddingTop: 5,
        paddingBottom: 5,
    },
    containerInputPeriodo:{
        width:100,
        borderWidth: 1,
        backgroundColor: "#ffffff",
        borderColor: "#000000",
        shadowColor: "#000000",
        elevation: 15,
        shadowOffset:{width: -1,height: 1},
        shadowOpacity: 0.9,
        shadowRadius: 1,
        fontSize: 15,
        fontWeight: "600",
        borderRadius: 3,
        paddingTop: 5,
        paddingBottom: 5,
    },
    containerInputDosagem:{
        width:100,
        left:0,
        borderWidth: 1,
        backgroundColor: "#ffffff",
        borderColor: "#000000",
        shadowColor: "#000000",
        elevation: 15,
        shadowOffset:{width: -1,height: 1},
        shadowOpacity: 0.9,
        shadowRadius: 1,
        fontSize: 15,
        fontWeight: "600",
        borderRadius: 3,
        paddingTop: 5,
        paddingBottom: 5,
    },

})  