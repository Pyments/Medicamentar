import { useNavigation } from "@react-navigation/native"
import React from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


export default function SingIn() {

    const LoginButton = () => {
      if (Platform.OS === "ios"){  
        return (
            <TouchableOpacity
                    style={styles.containerBotaoApple}
                    >
                    <Image 
                    source={require("../../assets/logo_apple.png")}
                    style={styles.containerLogoIos}
                    >
                    </Image>
                    <Text style={styles.containerTextoIos}> Logar com Apple</Text>
            </TouchableOpacity>
        )
      }else{
        return (
            <TouchableOpacity style={styles.containerBotaoGoogle}>
                        <Image 
                        source={require("../../assets/logo_google.png")}
                        style={styles.containerLogoGoogle}
                        ></Image>
                        <Text style={styles.containerBotaoTextoGoogle}>Logar com Google</Text>
                    </TouchableOpacity>
        )
      }
    }
    return (
        <View style={styles.container}>
            <LinearGradient colors={["#ffffff","#BBE7FF", "#2596BE"]} style={{flex: 1}}>
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
                    <LoginButton></LoginButton>
                </View>
                <View style={styles.Login}>
                    <Text style={styles.textoRegistro}>
                        Já possui cadastro?
                    </Text> 
                    <TouchableOpacity onPress={ () => navigation.navigate("Home")}>
                        <Text style={{fontSize: 15, marginLeft: 5, fontStyle: "italic", textDecorationLine: "underline"}}>
                            Faça Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </LinearGradient>        
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
        alignSelf: "center",
        paddingHorizontal: 25,
        borderRadius:8,
        marginVertical: 30,
        gap: 15,
        maxWidth: 450
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
        alignSelf: "center",
        alignItems: "center",
        paddingHorizontal: 0,
        paddingTop: 15,
        gap: 5,
        maxWidth: 400
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
        marginRight: 5,
    },
    containerBotaoTextoGoogle:{
        fontWeight: "bold",
        fontSize: 15,
        color: "#f9faff",
        marginRight: 5
    },
    containerBotaoGoogle:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4086f4",
        borderRadius: 5,
        width: 170,
        height: 40,
    },
    containerLogoGoogle:{
        width: 20,
        height: 20,
        marginRight: 8,
        marginLeft: 3,
        backgroundColor: "#ffffff",
        borderRadius: 5,
    },
    containerImagemBotaoEntrar:{
        width: 20,
        height: 20,
        marginRight: 6,
    },
    containerBotaoApple:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
        borderRadius: 5,
        width: 160,
        height: 40,
    },
    containerLogoIos:{
        width: 20,
        height: 20,
        marginRight: 8,
    },
    containerTextoIos:{
        fontWeight: "bold",
        fontSize: 15,
    },
    containerSeta:{
        top: 20,
        left: 10,
        position: "absolute",
    },
    containerSetaImagem:{
        width: 30,
        resizeMode: "contain",
    },
    Login:{
        marginTop: 30,
        alignSelf: "center",
        flexDirection: "row"
    },
    textoRegistro:{
        fontSize: 15,
        fontStyle: "italic",
    },
})