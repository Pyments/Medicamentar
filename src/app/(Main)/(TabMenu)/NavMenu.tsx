import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import Drawer from "expo-router/drawer";
import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

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
                source={require("../../../assets/DrawerIcons/usuario_icon.png")}
                />
                <View style={styles.containerTopoTextos}>
                    <Text style={styles.containerNomeUsuario}>Usuário Placeholder</Text>
                    <Text style={styles.containerNomeCidade}>Cidade Placeholder</Text>
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList state={newState} {...rest}/>
            </DrawerContentScrollView>
            <View style={styles.containerSair}>
                <TouchableOpacity style={styles.containerBotaoSair}>
                    <Image
                    style={styles.containerSairImagem}
                    source={require("../../../assets/DrawerIcons/sair_icon.png")}
                    >
                    </Image>
                    <Text style={styles.containerBotaoTexto}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View> 
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#20a2eb",
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
        borderColor: "#0C689C",
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
    containerSair:{
        width: "90%",
        alignSelf:"center",
        //backgroundColor: "rgba(255, 255, 255, 0.4)",
        marginBottom: 45,
    },
    containerSairImagem:{
        width: 30,
        height: 30,
    },
    containerBotaoSair:{
        width: "90%",
        flexDirection: "row",
        gap: 30
    },
    containerBotaoTexto:{
        color: "#d1d1d1",
        alignSelf: "center"
    }
})