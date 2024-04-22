import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import CheckBox from "expo-checkbox"
// import { useNavigation } from "@react-navigation/native";

export default function AdMedicamentos(){
    // const navigation = useNavigation();

    return (
        <View style={styles.containerAll}>
            <View style={styles.container}>
            <View style={styles.containerBox2}>
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.containerTexto}
                    >NOME DO PACIENTE:
                </Text>
                <TextInput
                    style={styles.containerInput}
                />
                    <Text style={styles.containerTexto}
                    >MEDICAMENTO:</Text>
                <TextInput
                    style={styles.containerInput}
                    />
                <Text style={styles.containerTextoDosagem}>DOSAGEM:</Text>
                <Text style={styles.containerTextoUso}>USO CONTÍNUO</Text>
            </View>
            
            <View style={styles.containerMenor}>
                <TextInput style={styles.containerInputDosagem}>
                </TextInput>
                <CheckBox style={styles.containerCheckBox}/>                  
                <Text style={styles.containerTextoCheck}>SIM
                </Text>
                <CheckBox style={styles.containerCheckBox} />  
                <Text style={styles.containerTextoCheck}>NÃO
                </Text>
                <View style={styles.containerPeriodo}>
                    <Text style={styles.containerTexto3}>PERÍODO:
                    </Text>
                    <TextInput style={styles.containerInputPeriodo}>
                    </TextInput>
                </View>
                <View style={styles.containerCompriPeriodo}>
                    <Text style={styles.containerTextoCompriPeriodo}>COMPRIMIDOS POR PERÍODO:</Text>
                    <TextInput style={styles.containerInputCompriPeriodo}>
                    </TextInput>
                </View>
                <View style={styles.containerMedico}>
                    <Text style={styles.containerTextoMedico}>MÉDICO:</Text>
                    <TextInput style={styles.containerInput}>
                    </TextInput>
                </View>
                <View style={styles.containerVencimento}>
                    <Text style={styles.containerTextoVencimento}>VENCIMENTO:</Text>
                    <TextInput style={styles.containerInput}>
                    </TextInput>
                </View>
                <View style={styles.containerBotaoSalvar}>
                <TouchableOpacity 
                style={styles.containerBotao}
                >
                    <Image
                    style={styles.botaoSalvar}
                    source={require("../../../assets/botao_salvar.png")}
                    ></Image>
                    <Text style={styles.botaoTexto}>SALVAR</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.containerBotaoVoltar}>
                <TouchableOpacity 
                style={styles.containerBotao}
                >
                    <Image 
                    style={styles.botaoVoltar}
                    source={require("../../../assets/seta_voltar.png")}
                    ></Image>
                
                <Text style={styles.botaoTexto}>VOLTAR</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerBox}>

            </View>
        </View>
        </View>
        
    );

}
const styles = StyleSheet.create({
    containerAll:{
        flex:1,
        width: "100%",
        height:"100%",
        top:-150,
    },
    botaoSalvar:{
        width: 25,
        height: 25,
        marginRight: 12,

    },
    botaoVoltar:{
        width: 25,
        height: 25,
        marginRight: 12,
    },
    containerBotaoVoltar:{
        justifyContent:"space-around",
        paddingHorizontal:15,
        position:'absolute',
        width:140,
        height:50,
        top: 180,
        left:215,
        borderRadius:5,
        alignSelf:"center",
        borderWidth: 1,
        backgroundColor: "#ffffff",
        borderColor: "#000000",
        shadowColor: "#000000",
    },
    containerBotaoSalvar:{
        justifyContent:"space-around",
        paddingHorizontal:15,
        position:'absolute',
        width:140,
        height:50,
        top: 180,
        left:55,
        borderRadius:5,
        alignSelf:"center",
        borderWidth: 1,
        backgroundColor: "#ffffff",
        borderColor: "#000000",
        shadowColor: "#000000",
    },
    botaoTexto:{
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        // fontStyle:"armata"
    },
    containerImagemBotaoEntrar:{
        width: 20,
        height: 20,
        marginRight: 8,
    },
    containerBotao:{
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        borderRadius: 15,
        width: 100,
        height:  40,
        flexDirection: "row",
    },
    containerTextoVencimento:{
        top:2,
        textDecorationStyle: "dashed",
        color: "#000000",
        fontSize: 15,
        fontWeight: "600",
    },
    containerVencimento:{
        justifyContent:"space-around",
        paddingHorizontal:15,
        position:'absolute',
        width:158,
        left:250,
        top: 100,
        gap: 5,
        alignSelf:"center",
    },
    containerTextoMedico:{
        top:2,
        textDecorationStyle: "dashed",
        color: "#000000",
        fontSize: 15,
        fontWeight: "600",
    },
    containerMedico:{
        justifyContent:"space-around",
        paddingHorizontal:15,
        position:'absolute',
        width:250,
        left:12,
        top: 100,
        gap: 5,
        alignSelf:"center",

    },
    containerTextoCompriPeriodo:{
        top:2,
        textDecorationStyle: "dashed",
        color: "#000000",
        fontSize: 15,
        fontWeight: "600",
        
    },
    containerInputCompriPeriodo:{
        width:250,
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
    containerCompriPeriodo:{
        justifyContent:"space-around",
        paddingHorizontal:15,
        position:'absolute',
        width:400,
        left:"32%",
        top: "110%",
        gap: 5,
        maxWidth: 400,
        minWidth: 300,
        alignSelf:"center",
    },
    containerPeriodo:{
        justifyContent:"space-around",
        paddingHorizontal:15,
        position:'absolute',
        width:200,
        left:12,
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
        left:15,
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
    containerTextoUso:{
    justifyContent:"space-around",
    left:150,
    position:'absolute',
    width:"100%",
    top: 122,
    textDecorationStyle: "dashed",
    color: "#000000",
    fontSize: 15,
    fontWeight: "600",
},
    containerTextoDosagem:{
        justifyContent:"space-around",
        position:'absolute',
        width:"100%",
        top: 122,
        textDecorationStyle: "dashed",
        color: "#000000",
        fontSize: 15,
        fontWeight: "600",
    },
    containerCheckBox:{
        width:30,
        height:30,
        borderWidth:1,

    },
    containerTextoCheck:{
        textDecorationStyle: "dashed",
        color: "#000000",
        fontSize: 15,
        fontWeight: "600",
        top:5,
        left:-25
    },
    containerTexto:{
        textDecorationStyle: "dashed",
        color: "#000000",
        fontSize: 15,
        fontWeight: "600"
    },
    containerBox2:{
        backgroundColor: "#1088c4",
        display: "flex",
        minHeight:"4%",
        top:165
    },
    containerBox:{
        backgroundColor: "#1088c4",
        minHeight:"5%",
        top:"105%"
    },
    containerMenor:{
        justifyContent:"space-around",
        paddingHorizontal:15,
        width:"100%",
        top: "37.5%",
        right:10,
        gap: 5,
        maxWidth: 400,
        minWidth: 100,
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
        left:"50%",
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