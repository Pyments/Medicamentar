import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Text, View, Image, TouchableOpacity, StyleSheet, Alert, BackHandler } from "react-native";

import { accentThemeColor, fgThemeColor, secBgThemeColor } from "@/src/constants/ColorTheming";

export default function NavMenu(props:any){
    const { state, ...rest } = props;
    const newState = { ...state}
    newState.routes = newState.routes.filter((item: { name: string; }) => item.name !== "AdMedicamentos")
    newState.routes = newState.routes.filter((item: { name: string; }) => item.name !== "NavMenu")
    return(
        <View style={styles.container}>
            <View style={styles.containerTopo}>
                <Image
                style={styles.containerImage}
                source={require("@/src/assets/DrawerIcons/usuario_icon.png")}
                />
                <View style={styles.containerTopoTextos}>
                    <Text style={styles.containerNomeUsuario}>Usuário Placeholder</Text>
                    <Text style={styles.containerNomeCidade}>Cidade Placeholder</Text>
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList state={newState} {...rest}/>
            </DrawerContentScrollView>
                <TouchableOpacity 
                style={styles.containerBotaoSair}
                onPress={() => Alert.alert("Deseja sair?", "Você tem certeza que deseja sair do app?",
                    [{
                    text: "Não",
                    style: "cancel",
                    },
                    {
                    text: "Sim",
                    onPress: () => BackHandler.exitApp()
                    } 
                    ]
                )}
                >
                    <Image
                    style={styles.containerSairImagem}
                    source={require("@/src/assets/sair_drawer.png")}
                    >
                    </Image>
                    <Text style={styles.containerBotaoTexto}>Sair</Text>
                </TouchableOpacity>
        </View> 
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:`${fgThemeColor}`,
    },
    containerTopo:{
        width: "80%",
        alignSelf: "flex-start",
        marginTop:15,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    containerImage:{
        width: 70,
        height: 70,
        borderWidth: 4,
        borderColor: `${accentThemeColor}`,
        borderRadius: 100
    },
    containerTopoTextos:{
        alignSelf: "center"
    },
    containerNomeUsuario:{
        color: "#ffffff"
    },
    containerNomeCidade:{
        color: "#c1c1c1"
    },
    containerSairImagem:{
        width: 30,
        height: 30,
    },
    containerBotaoSair:{
        alignSelf:"flex-start",
        flexDirection: "row",
        gap: 25,
        marginBottom:30,
        paddingHorizontal:20
    },
    containerBotaoTexto:{
        color: "#ffffff",
        alignSelf: "center"
    }
})