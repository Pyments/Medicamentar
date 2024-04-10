import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";

export default function Welcome() {
    return (
        <View style={styles.container}>
            <View style={styles.containerImagemLogin}>
                <Image
                    source={ require("../../assets/teste.jpg" )}
                    style={{ width: "100%", height: "100%" }}
                    blurRadius={0.5}
                    resizeMode="cover" 
                />
            </View>
            <View style={styles.containerForm}>
                {/*(<Text>E-mail</Text>*/}
                <TextInput
                    style={styles.containerInput}
                    placeholder="Digite seu e-mail"
                />
                {/*<Text>Senha</Text>*/}
                <TextInput
                    style={styles.containerInput}
                    placeholder="Digite sua senha"
                />   
                <TouchableOpacity style={styles.containerBotao}>
                    <Text style={styles.botaoTexto}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity><Text style={styles.botaoRegistro}>Ainda não possui cadastro?, cadastre-se aqui</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    containerImagemLogin:{
        flex:2,
        alignItems:"center",
        borderRadius:30, 
    },
    containerForm:{
        justifyContent:"space-around",
        paddingHorizontal:40,
        position: 'absolute',
        width:"100%",
        //backgroundColor: "#D3D9DB",
        bottom: 100,
        gap: 35
    },
    containerBotao:{
        alignSelf: "center",
        backgroundColor: "#ffffff",
        borderRadius: 15,
        width: 100,
        height:  40,
    },
    containerInput:{
        borderWidth: 1,
        borderColor: "#000000",
        paddingHorizontal: 10,
        fontSize: 15,
        fontWeight: "600",
    },
    botaoTexto:{
        fontWeight: "bold",
        top: 5,
        fontSize: 18,
        textAlign: "center"
    },
    botaoRegistro:{
        textDecorationStyle: "dashed",
    }
})  