import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BotoesLogin from "../../components/BotoesLogin";

export default function SignIn() {
    return (
        <View style={styles.container}>
            <LinearGradient colors={["#ffffff","#BBE7FF", "#2596BE"]} style={{flex: 1}}>
            <Image
                style={styles.containerLogo}
                source={require("../../assets/UserAuth/imagem_registro.png")}
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
                        source={require("../../assets/UserAuth/logo_entrar.png")}
                        style={styles.containerImagemBotaoEntrar}
                        >
                        </Image>
                        <Text style={styles.containerBotaoTexto}>CADASTRAR-SE</Text>
                    </TouchableOpacity>
                    <BotoesLogin></BotoesLogin>
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
        borderColor: "#000000",
        backgroundColor: "#ffffff",
        elevation: 10,
        shadowColor: '#000000',
        borderWidth: 1,
        fontSize:16,
        borderRadius: 3,
        paddingHorizontal: 15,
        paddingTop: 2,
        paddingBottom: 2,
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
        backgroundColor: "#ffffff",
        borderRadius: 20,
        width: 155,
        height:  40,
    },
    containerBotaoTexto:{
        fontWeight: "bold",
        fontSize: 15,
    },
    containerImagemBotaoEntrar:{
        width: 20,
        height: 20,
        marginRight: 6,
    },
})