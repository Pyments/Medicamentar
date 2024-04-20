import { Text, Image, StyleSheet, TouchableOpacity, Platform } from "react-native";

export default function BotoesLogin(){
        if (Platform.OS === "ios"){  
            return (
                <TouchableOpacity
                        style={styles.containerBotaoApple}
                        >
                        <Image 
                        source={require("../assets/UserAuth/logo_apple.png")}
                        style={styles.containerLogoIos}
                        >
                        </Image>
                        <Text style={styles.containerTextoIos}> Logar com Apple</Text>
                </TouchableOpacity>
            );
          }else{
            return (
                <TouchableOpacity style={styles.containerBotaoGoogle}>
                            <Image 
                            source={require("../assets/UserAuth/logo_google.png")}
                            style={styles.containerLogoGoogle}
                            ></Image>
                            <Text style={styles.containerBotaoTextoGoogle}>Cadastar-se com Google</Text>
                        </TouchableOpacity>
            );
          }
}

const styles = StyleSheet.create({
    containerBotaoTextoGoogle:{
        fontWeight: "bold",
        fontSize: 15,
        color: "#000000"
    },
    containerBotaoGoogle:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderRadius: 20,
        width: 215,
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
    }
})