import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
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
                <TouchableOpacity style={styles.containerBotaoSair}>
                    <Image
                    style={styles.containerSairImagem}
                    source={require("../../../assets/sair_drawer.png")}
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