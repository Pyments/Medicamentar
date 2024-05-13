import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Appearance } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BotoesLogin from "../../components/BotoesLogin";
import { useState } from "react";
import * as Animatable from "react-native-animatable"
import { accentThemeColor, bgThemeColor, textThemeColor } from "../../constants/ColorTheming"

export default function SignIn() {

    const [NomState, SetNomState] = useState(false);
    const [EmailState, SetEmailState] = useState(false);
    const [SenState, SetSenState] = useState(false);
    const [ShowPass, SetShowPass] = useState(false);

    const updateNomState = (value:boolean) => {
        SetNomState(value);
    }
    const updateEmailState = (value:boolean) => {
        SetEmailState(value);
    }
    const updateSenState = (value:boolean) => {
        SetSenState(value);
    }
    const updateShowPass = (value:boolean) => {
        ShowPass == true ? SetShowPass(false):SetShowPass(true);
    }

    const nomeIsEmpty = (text:string) => {
        text.length  === 0 ? updateNomState(true):updateNomState(false);
    }
    const emailIsEmpty = (email:string) => {
        email.length === 0 ?  updateEmailState(true):updateEmailState(false);
    } 
    const SenIsEmpty = (senha: string) =>{
        senha.length === 0 ? updateSenState(true):updateSenState(false)
    }

    const allEmpty = () => {
        if (NomState === false || EmailState === false || SenState === false){
            alert("Por favor, preencha todos os campos antes de continuar!")
        } 
    }
    return (
        <View style={styles.container}>
            <LinearGradient colors={[Appearance.getColorScheme() === "dark" ? "#d0d0d0": "#ffffff", Appearance.getColorScheme() === "dark" ? "#d0d0d0": "#ffffff", `${accentThemeColor}`]} style={{flex: 1}}>
            <Image
                style={styles.containerLogo}
                source={require("../../assets/UserAuth/imagem_registro.png")}
            />
            <Animatable.View 
                style={styles.containerForm}
                animation="fadeInUp"
                delay={500}
                >
                <TextInput
                style={NomState ? styles.error : styles.containerInput} 
                placeholder="NOME COMPLETO"    
                autoCapitalize="words"
                onChangeText={(text) => nomeIsEmpty(text)}
                />
                <Text style={NomState ? styles.textError : styles.noErrorTexto}>Este campo é obrigatório!</Text>
                <TextInput 
                style={EmailState ? styles.error : styles.containerInput}
                placeholder="EMAIL"
                autoComplete="email"
                keyboardType="email-address"    
                onChangeText={(email) => emailIsEmpty(email)}
                />
                <Text style={EmailState ? styles.textError : styles.noErrorTexto}>Este campo é obrigatório!</Text>
                <View style={styles.passSection}>
                    <TextInput 
                    style={SenState ? styles.error : styles.containerInput}
                    placeholder="SENHA"    
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
                <Text style={SenState ? styles.textError : styles.noErrorTexto}>Este campo é obrigatório!</Text>
                <View style={styles.passSection}>
                    <TextInput 
                    style={SenState ? styles.error : styles.containerInput}
                    placeholder="REPITA SUA SENHA"
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
                <Text style={SenState ? styles.textError : styles.noErrorTexto}>Este campo é obrigatório!</Text>
                <View style={styles.containerBotoes}>
                    <TouchableOpacity
                        style={styles.containerBotao}
                        onPress={() => allEmpty()}
                        >
                        <Text style={styles.containerBotaoTexto}>Cadastrar-se</Text>
                    </TouchableOpacity>
                    <BotoesLogin
                    texto="Cadastrar-se"
                    ></BotoesLogin>
                </View>
            </Animatable.View>
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
        flex: 1,
        alignSelf:"center",
        width: "100%",
        height: "100%",
        maxWidth: 450,
        opacity: 0.45,
        resizeMode: "cover"
    },
    containerForm:{
        alignSelf: "center",
        position: "absolute",
        paddingHorizontal: 25,
        width: "100%",
        gap: 15,
        maxWidth: 450,
        top: "40%"
    },
    containerInput:{
        width: "100%",
        maxWidth: 450,
        height: 43,
        backgroundColor: `${bgThemeColor}`,
        color: `${textThemeColor}`,
        elevation: 10,
        shadowColor: "#ffffff",
        fontSize:16,
        borderRadius: 3,
        paddingHorizontal: 15,
    },
    containerBotoes:{
        flexDirection: "column",
        alignSelf: "center",
        alignItems: "center",
        paddingTop: 15,
        gap: 15,
        maxWidth: 400
    },
    containerBotao:{
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
        backgroundColor: `${bgThemeColor}`,
        borderRadius: 50,
        width: 160.13,
        height:  40,
    },
    containerBotaoTexto:{
        color: `${textThemeColor}`,
        fontSize: 15,
        fontWeight: "400"
    },
    containerImagemBotaoEntrar:{
        width: 20,
        height: 20,
        marginRight: 6,
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
        display: "none"
    },
    passSection:{
        flexDirection: "row",
        justifyContent: "flex-end",
    }
})