import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function LogIn() {
  return (
    <View style={styles.container}>
            <LinearGradient colors={["#ffffff","#BBE7FF", "#2596BE"]} style={{flex: 1}}>
            <View style={styles.containerImagemLogin}>
                <Image
                    source={ require("../../assets/UserAuth/teste.jpg" )}
                    style={styles.containerImagemLoginImagem}
                    resizeMode="cover" 
                />
            </View>
            <View style={styles.containerForm}>
                <TextInput
                    style={styles.containerInput}
                    placeholder="Digite seu e-mail"
                    autoComplete="email"
                    autoCapitalize="none"
                    autoCorrect= {false}
                    keyboardType="email-address"
                    enterKeyHint="next"
                    importantForAutofill="yes"
                />
                <TextInput
                    style={styles.containerInput}
                    placeholder="Digite sua senha"
                    autoComplete="password"
                    autoCapitalize="none"
                    autoCorrect= {false}
                    enterKeyHint="done"
                    importantForAutofill="yes"
                    secureTextEntry= {true}
                />   
                <TouchableOpacity 
                style={styles.containerBotao}
                >
                <Image 
                source={require("../../assets/UserAuth/logo_entrar.png")}
                style={styles.containerImagemBotaoEntrar}
                >
                </Image>
                <Text 
                style={styles.botaoTexto}
                onPress={ () => router.navigate("Home")}
                >Entrar</Text>
                </TouchableOpacity>
                <View style={styles.Registro}>
                    <Text style={styles.textoRegistro}>
                        Ainda não possui cadastro?
                    </Text> 
                    <TouchableOpacity onPress={ () => router.navigate("SignIn")}>
                        <Text style={{fontSize: 15, marginLeft: 5, fontStyle: "italic", textDecorationLine: "underline"}}>
                            cadastre-se aqui
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
        flex:1,
        width: "100%",
        height:"100%",
    },
    containerImagemLogin:{
        flex:1,
        maxWidth: 450,
        opacity: 0.45,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    containerImagemLoginImagem:{
        width: "100%",
        height: "100%",
        alignSelf: "center",
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
    Registro:{
        alignSelf: "center",
        flexDirection: "row"
    },
    textoRegistro:{
        fontSize: 15,
        fontStyle: "italic",
    },
    containerImagemBotaoEntrar:{
        width: 20,
        height: 20,
        marginRight: 8,
    }
})  