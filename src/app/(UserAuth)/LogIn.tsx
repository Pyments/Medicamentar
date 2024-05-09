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
import { useState } from "react";
import * as Animatable from "react-native-animatable"
import BotoesLogin from "../../components/BotoesLogin";
import { accentThemeColor, bgThemeColor, textThemeColor } from "../../constants/ColorTheming"

export default function LogIn() {

    const [EmailState, SetEmailState] = useState(false);
    const [SenState, SetSenState] = useState(false);
    const [ShowPass, SetShowPass] = useState(false);

    const updateEmailState = (value:boolean) => {
        SetEmailState(value);
    }
    const updateSenState = (value:boolean) => {
        SetSenState(value);
    }
    const updateShowPass = (value:boolean) => {
        ShowPass == true ? SetShowPass(false):SetShowPass(true);
    }

    const emailIsEmpty = (email:string) => {
        email.length === 0 ?  updateEmailState(true):updateEmailState(false);
    } 
    const SenIsEmpty = (senha: string) =>{
        senha.length === 0 ? updateSenState(true):updateSenState(false)
    }
        
  return (
    <View style={styles.container}>
            <LinearGradient colors={["#ffffff","#FFFFFF", `${accentThemeColor}`]} style={{flex: 1}}>
            <View style={styles.containerImagemLogin}>
                <Image
                    source={ require("../../assets/UserAuth/imagem_login.jpg" )}
                    style={styles.containerImagemLoginImagem}
                    resizeMode="cover" 
                />
            </View>
            <Animatable.View 
                style={styles.containerForm}
                animation="fadeInUp"
                >
                <Animatable.View animation="slideInRight" delay={250} style={styles.containerAppTexto}>
                    <Text style={styles.appTexto}>Medicamentar</Text>
                </Animatable.View>
                <TextInput
                    style={EmailState ? styles.error : styles.containerInput}
                    placeholder="Digite seu e-mail"
                    autoComplete="email"
                    autoCapitalize="none"
                    autoCorrect= {false}
                    keyboardType="email-address"
                    enterKeyHint="next"
                    importantForAutofill="yes"
                    onChangeText={(email) => emailIsEmpty(email)}
                />
                <Text
                    style={EmailState ? styles.textError : styles.noErrorTexto}
                >
                    Este campo é obrigatório
                </Text>
                <View style={styles.passSection}>
                <TextInput
                    style={SenState ? styles.error : styles.containerInput}
                    placeholder="Digite sua senha"
                    autoComplete="password"
                    autoCapitalize="none"
                    autoCorrect= {false}
                    enterKeyHint="done"
                    importantForAutofill="yes"
                    secureTextEntry= {ShowPass}
                    onChangeText={(senha) => SenIsEmpty(senha)}
                />
                <TouchableOpacity 
                    style={{alignSelf:"center", position:"absolute", paddingRight:5}}
                    onPress={() => updateShowPass(true)}
                    >
                    <Image 
                        source={
                            ShowPass == true ? require("../../assets/olho_bloqueio.png"):require("../../assets/olho.png")
                        }
                        style={{width: 37, height: 17, resizeMode: "contain", alignSelf:"center",}}
                        >
                    </Image>   
                </TouchableOpacity>
                </View>
                <Text
                style={SenState ? styles.textError : styles.noErrorTexto}
                >Este campo é obrigatório</Text>
                <View style={styles.botoes}>
                <TouchableOpacity 
                style={styles.containerBotao}
                onPress={ () => router.navigate({
                    pathname: "../(TabMenu)/Home"
                })}
                >
                <Image 
                source={require("../../assets/UserAuth/logo_entrar.png")}
                style={styles.containerImagemBotaoEntrar}
                >
                </Image>
                <Text 
                style={styles.botaoTexto}
                >
                Entrar
                </Text>
                </TouchableOpacity>
                <BotoesLogin
                texto="Logar"
                />
                </View>
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
            </Animatable.View>
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
        opacity: 0.25,
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
        top: "45%",
        gap: 25,
        maxWidth: 400,
        minWidth: 300,
    },
    containerBotao:{
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `${bgThemeColor}`,
        borderRadius: 15,
        width: 133,
        height:  40,
        flexDirection: "row",
    },
    containerInput:{
        flex: 1,
        borderWidth: 1,
        backgroundColor: `${bgThemeColor}`,
        borderColor: "#000000",
        shadowColor: "#000000",
        elevation: 10,
        shadowOffset:{width: 0, height: 2},
        shadowOpacity: 0.6,
        shadowRadius: 5,
        paddingHorizontal: 10,
        fontSize: 15,
        fontWeight: "600",
        borderRadius: 3,
        paddingTop: 5,
        paddingBottom: 5,
    },
    botaoTexto:{
        fontSize: 18,
        textAlign: "center"
    },
    botoes:{
        alignSelf:"center",
        flexDirection:"column",
        gap: 15
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
        width: 25.6,
        height: 23.61,
        marginRight: 8,
    },
    error:{
        flex: 1,
        backgroundColor: "#ffffff",
        borderBottomColor: "#ff5555",
        borderLeftColor: "#ffffff",
        borderRightColor: "#ffffff",
        borderTopColor: "#ffffff",
        elevation: 10,
        shadowColor: '#000000',
        borderWidth: 2,
        fontSize:16,
        borderRadius: 3,
        paddingHorizontal: 15,
        paddingTop: 2,
        paddingBottom: 2,
    },
    textError:{
        color: "#ff1111",
    },
    noErrorTexto:{
        width: "100%",
        display: "none"
    },
    containerAppTexto:{
        alignSelf: "center",
    },
    appTexto:{
        fontWeight: "400",
        fontSize: 24,
        color: `${textThemeColor}`,
        opacity: 0.40
    },
    passSection:{
        flexDirection: "row",
        justifyContent: "flex-end",
    }
})  