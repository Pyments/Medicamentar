import { View, Text, StyleSheet } from "react-native";

export default function NotifiCard(props:any){
    return (
        <View style={styles.containerModalBox}>
              <View style={styles.containerModalBoxTitulo}>
                <Text style={styles.containerModalTitulo}>{props.titulo}</Text>
              </View>
              <View style={styles.containerModalMensagem}>
                <Text style={styles.containerModalMensagemTexto}>{props.mensagem}</Text>
              </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerModalBox:{
        width: "90%",
        height: 73,
        alignSelf: "center",
        borderRadius: 5,
        backgroundColor: "rgba(217, 217, 217, 1)",
        alignItems: "center",
        marginTop: 15    
      },
      containerModalBoxTitulo:{
        width: "80%",
        backgroundColor: "rgba(32, 162, 235, 1)",
        borderRadius: 3,
      },
      containerModalTitulo:{
        color: "#ffffff",
        textAlign: "center"
      },
      containerModalMensagem:{
        alignSelf: "center",
        width: "95%",
      },
      containerModalMensagemTexto:{
        textAlign: "center"
      },
      containerModalBotao:{
        width: 90,
        height: 35,
        alignSelf: "center",
        backgroundColor: "rgba(32, 162, 235, 1)",
        borderRadius: 15,
        marginTop: 15,
        marginBottom: 15,
        justifyContent: "center"
      },
      containerModalBotaoTexto:{
        alignSelf: "center",
        alignContent: "center",
        fontSize: 15,
        fontWeight: "400",
        color: "#ffffff"
      }
})