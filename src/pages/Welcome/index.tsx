import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient";

export default function Welcome() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <LinearGradient colors={["#ffffff","#BBE7FF", "#2596BE"]} style={{flex: 1}}>
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
                <TouchableOpacity 
                style={styles.containerBotao}
                >
                <Image 
                source={require("../../assets/logo_entrar.png")}
                style={styles.containerImagemBotaoEntrar}
                >
                </Image>
                <Text style={styles.botaoTexto}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Text 
                style={styles.botaoRegistro}
                onPress={ () => navigation.navigate("SingIn")}
                >Ainda não possui cadastro? cadastre-se aqui</Text></TouchableOpacity>
            </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: "100%",
        height:"100%",
    },
    containerImagemLogin:{
        flex:2,
        borderRadius:30, 
        maxWidth: 450,
        opacity: 0.45,
        width: "100%",
        height: "100%",
    },
    containerForm:{
        justifyContent:"space-around",
        paddingHorizontal:40,
        position: 'absolute',
        width:"100%",
        alignSelf: "center",
        top: "50%",
        gap: 25,
        maxWidth: 400,
        minWidth: 300,
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
    botaoTexto:{
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
    },
    botaoRegistro:{
        textDecorationStyle: "dashed",
        fontStyle: "italic",
        color: "#000000",
        alignSelf: "center",
    },
    containerImagemBotaoEntrar:{
        width: 20,
        height: 20,
        marginRight: 8,
    }
})  