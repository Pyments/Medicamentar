import React from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";

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
                placeholder="Nome Completo"    
                />
                <TextInput 
                style={styles.containerInput}
                placeholder="Email"    
                />
                <TextInput 
                style={styles.containerInput}
                placeholder="Senha"    
                />
                <TextInput 
                style={styles.containerInput}
                placeholder="Repita sua senha"    
                />
                <View style={styles.containerBotoes}>
                    <TouchableOpacity style={styles.containerBotao}>
                        <Text style={styles.containerBotaoTexto}>Cadastrar-se</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerBotaoGoogle}>
                        <Image 
                        source={require("../../assets/logo_google.png")}
                        style={styles.containerLogoGoogle}
                        ></Image>
                        <Text style={styles.containerBotaoTexto}>Login com Google</Text>
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
        marginBottom: 40,
    },
    containerForm:{
        //backgroundColor: "#ffffff",
        paddingHorizontal: 25,
        borderRadius:8,
        marginVertical: 30,
        gap: 25,
    },
    containerInput:{
        borderColor: "#000000",
        backgroundColor: "#ffffff",
        shadowColor: "#000000",
        elevation: 15,
        shadowOffset:{width: -1,height: 1},
        shadowOpacity: 0.9,
        shadowRadius: 1,
        borderWidth: 1,
        fontSize:16,
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    containerBotoes:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 0,
    },
    containerBotao:{
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#ffffff",
        borderRadius: 15,
        width: 100,
        height:  40,
    },
    containerBotaoTexto:{
        fontWeight: "bold",
        fontSize: 15,
    },
    containerBotaoGoogle:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderRadius: 15,
        width: 160,
        height: 40,
    },
    containerLogoGoogle:{
        width: 20,
        height: 20,
        marginRight: 8,
    }
})