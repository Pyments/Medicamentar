import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
} from "react-native";
import Footer from "../../../components/Footer";

export default function Perfil(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerTopo}>
                <View style={styles.containerTopoItems}>
                    <TouchableOpacity>
                    <Image 
                    source={require("../../../assets/menu-lateral.png")}
                    style={styles.containerTopoMenuLat}
                    >
                    </Image>
                    </TouchableOpacity>
                    <Text style={styles.containerTopoTexto}>PERFIL</Text>
                    <Image 
                    source={require("../../../assets/perfil.png")}
                    style={styles.containerTopoImagem}
                    >
                    </Image>
                </View>
            </View>
            <View style={styles.containerDadosForms}>
                <Text>NOME:</Text>
                <TextInput 
                style={styles.containerInput}
                placeholder="ex. João Carlos de  Oliveira"
                placeholderTextColor={"#a9a9a9"}
                autoCapitalize="words"
                >
                </TextInput>
                <Text>IDADE:</Text>
                <TextInput 
                style={styles.containerInput}
                placeholder="ex. 35"
                placeholderTextColor={"#a9a9a9"}
                
                >
                </TextInput>
                <Text>ENDEREÇO:</Text>
                <TextInput 
                style={styles.containerInput}
                placeholder="ex. Rua Oliveira 123 - Bairro  Jardim América"
                placeholderTextColor={"#a9a9a9"}
                >
                </TextInput>
                <Text>TIPO SANGUINEO:</Text>
                <TextInput 
                style={styles.containerInput}
                placeholder="ex. A+"
                placeholderTextColor={"#a9a9a9"}
                >
                </TextInput>
                <View style={{width:"65%", flexDirection:"row", justifyContent:"space-between"}}>
                <Text>PESO:</Text>
                <Text>ALTURA:</Text>
                </View>
                <View style={{width:"100%", flexDirection:"row", justifyContent:"space-between"}}>
                <TextInput 
                style={{width:"49%", height:50, backgroundColor:"#d9d9d9", paddingHorizontal: 10}}
                placeholder="ex. 70"
                placeholderTextColor={"#a9a9a9"}
                >
                </TextInput>
                <TextInput
                style={{width:"49%", height:50, backgroundColor:"#d9d9d9", paddingHorizontal: 10}}
                placeholder="ex. 1.75"
                placeholderTextColor={"#a9a9a9"}
                >
                </TextInput>
                </View>
            </View>
            <Footer/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
        height: "100%",
    }, 
    containerTopo:{
        width: "100%",
        height: 75,
        backgroundColor: "#71AAFF",
        alignSelf: "center",
        alignItems:"center",
    },
    containerTopoItems:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    containerTopoMenuLat:{
        width: 35,
        height: 25,
        marginLeft: 10,
        marginTop: 9,
    },
    containerTopoTexto:{
        fontSize: 32,
        fontWeight: "300",
        color: "#ffffff"
    },
    containerTopoImagem:{
        width: 50,
        height: 50,
        marginRight: 10,
    },
    containerDadosForms:{
        width: "100%",
        maxWidth: 400,
        paddingTop: 15,
        alignSelf: "center",
        paddingHorizontal: 15,
        gap: 5,
    },
    containerInput:{
        width: "100%",
        height: 50,
        backgroundColor: "#d9d9d9",
        paddingHorizontal: 10,
    }
})