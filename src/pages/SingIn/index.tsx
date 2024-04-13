import React from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function SingIn() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.containerLogo}
                source={require("../../assets/logo.png")}
            />
            <View style={styles.containerForm}>
                <TextInput
                style={styles.containerInput} 
                placeholder="NOME COMPLETO:"    
                />
                <TextInput 
                style={styles.containerInput}
                placeholder="EMAIL:"    
                />
                <TextInput 
                style={styles.containerInput}
                placeholder="SENHA:"    
                />
                <TextInput 
                style={styles.containerInput}
                placeholder="REPITA SUA SENHA:"    
                />
                <View style={styles.containerBotoes}>
                    <TouchableOpacity style={styles.containerBotao}>
                        <Image 
                        source={require("../../assets/logo_entrar.png")}
                        style={styles.containerImagemBotaoEntrar}
                        >
                        </Image>
                        <Text style={styles.containerBotaoTexto}>CADASTRAR-SE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerBotaoGoogle}>
                        <Image 
                        source={require("../../assets/logo_google.png")}
                        style={styles.containerLogoGoogle}
                        ></Image>
                        <Text style={styles.containerBotaoTextoGoogle}>Logar com Google</Text>
                    </TouchableOpacity>
                </View>
            </View>        
        </View> 
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#BBE7FF"
    },
    containerLogo:{
        alignSelf:"center",
        marginTop:60,
        width:151,
        height:151,
        marginBottom: 15,
        borderRadius: 100,
    },
    containerForm:{
        //backgroundColor: "#ffffff",
        paddingHorizontal: 25,
        borderRadius:8,
        marginVertical: 30,
        gap: 15,
    },
    containerInput:{
        borderColor: "#000000",
        backgroundColor: "#ffffff",
        elevation: 10,
        shadowColor: '#000000',
        borderWidth: 1,
        fontSize:16,
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingTop: 2,
        paddingBottom: 2,
    },
    containerBotoes:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 0,
        paddingTop: 15,
        gap: 5,
    },
    containerBotao:{
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
        backgroundColor: "#ffffff",
        borderRadius: 5,
        width: 145,
        height:  40,
    },
    containerBotaoTexto:{
        fontWeight: "bold",
        fontSize: 15,
    },
    containerBotaoTextoGoogle:{
        fontWeight: "bold",
        fontSize: 15,
        color: "#f9faff"
    },
    containerBotaoGoogle:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4086f4",
        borderRadius: 5,
        width: 160,
        height: 40,
    },
    containerLogoGoogle:{
        width: 20,
        height: 20,
        marginRight: 8,
        backgroundColor: "#ffffff",
        borderRadius: 5,
    },
    containerImagemBotaoEntrar:{
        width: 20,
        height: 20,
        marginRight: 6,
    }
})