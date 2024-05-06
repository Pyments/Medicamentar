import { Text, Image, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { useRoute } from '@react-navigation/native'

export default function BotoesLogin(props:any){
        const route = useRoute();
        const routeName = route.name;
        console.log(routeName);

        if (Platform.OS === "ios"){  
            return (
                <TouchableOpacity
                        style={routeName == "LogIn"?styles.containerBotaoAppleTelaLogin:styles.containerBotaoApple}
                        >
                        <Image 
                        source={require("../assets/UserAuth/logo_apple.png")}
                        style={styles.containerLogoIos}
                        >
                        </Image>
                        <Text style={styles.containerTextoIos}>{props.texto} com Apple</Text>
                </TouchableOpacity>
            );
          }else{
            return (
                <TouchableOpacity style={routeName == "LogIn"?styles.containerBotaoGoogleTelaLogin:styles.containerBotaoGoogle}>
                            <Image 
                            source={require("../assets/UserAuth/logo_google.png")}
                            style={styles.containerLogoGoogle}
                            ></Image>
                            <Text style={styles.containerBotaoTextoGoogle}>{props.texto} com Google</Text>
                </TouchableOpacity>
            );
          }
}

const styles = StyleSheet.create({
    containerBotaoTextoGoogle:{
        fontWeight: "400",
        fontSize: 13,
        // Falta adicionar a fonte aqui
    },
    containerBotaoGoogle:{
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderRadius: 50,
        width: 255,
        height: 40,
        opacity: 0.8
    },
    containerBotaoGoogleTelaLogin:{
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderRadius: 50,
        width: 197,
        height: 40,
        opacity: 0.8
    },
    containerLogoGoogle:{
        width: 15,
        height: 15.38,
        marginRight: 8,
        marginLeft: 3,
        backgroundColor: "transparent",
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
    containerBotaoAppleTelaLogin:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
        borderRadius: 5,
        width: 102,
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
    }
})