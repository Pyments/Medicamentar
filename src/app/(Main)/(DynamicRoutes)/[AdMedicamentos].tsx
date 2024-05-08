import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import CheckBox from "expo-checkbox"

export default function AdMedicamentos(){
    return( 
        <View style={styles.container}>
            <View style={styles.containerBox1}></View>
            <View style={styles.conteinerForm}>
                <Text style={styles.textoForm}>Nome do paciente:</Text>
                <TextInput style={styles.Input}></TextInput>
                <Text style={styles.textoForm}>Medicamento:</Text>
                <TextInput style={styles.Input}></TextInput>
                <Text style={styles.textoForm}>Dosagem:</Text>
                <TextInput style={styles.InputDosagem}></TextInput>
                <Text style={styles.textoForm}>Periodo:</Text>
                <TextInput style={styles.InputPeriodo}></TextInput>
                <Text style={styles.textoComprimidoP}>Comprimido por período:</Text>
                <View style={styles.posicaoComprimidoP}>
                    <TextInput style={styles.InputComprimidoP}></TextInput>
                </View>
                <View style={styles.linhaMedico}>
                    <Text style={styles.textoForm}>Médico:</Text>
                    <TextInput style={styles.InputMedico}></TextInput>
                </View>
                <Text style={styles.textoVencimento}>Vencimento:</Text>
                <View style={styles.posicaoVencimento}>
                    <TextInput style={styles.InputVenciemnto}></TextInput>
                </View>
                <View style={styles.posicaoCheckBox}>
                    <CheckBox style={styles.checkBox1}></CheckBox>
                    <CheckBox style={styles.checkBox2}></CheckBox>		
                    <Text style={styles.sim}>Sim</Text>
                    <Text style={styles.nao}>Não</Text>
                </View>
                <View style={styles.posicaoBotaoSalvar}>
                    <TouchableOpacity style={styles.containerBotao}>
                    <Image 
                    source={require("../../../assets/botao_salvar.png")}
                    style={styles.containerImagemBotaoSalvar}
                    >
                    </Image>
                    <Text style={styles.textoForm}>Salvar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.posicaoBotaoVoltar}>
                    <TouchableOpacity style={styles.containerBotao}>
                    <Image 
                    source={require("../../../assets/seta_voltar.png")}
                    style={styles.containerImagemBotaoSalvar}
                    >
                    </Image>
                    <Text style={styles.textoForm}>Voltar</Text>
                    </TouchableOpacity>
                    <Text style={styles.textoUsoContinuo}>Uso contínuo</Text>
                </View>
            </View>
            <View style={styles.containerBox2}></View>
        </View>
    );
};

    const styles = StyleSheet.create({
        posicaoBotaoVoltar:{
            top:-210,
            left:70
        },
        posicaoBotaoSalvar:{
            top:-170,
            left:-70
        },
        containerImagemBotaoSalvar:{
            width: 20,
            height: 20,
            marginRight: 8,
        },
        containerBotao:{
            borderWidth:1,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            borderRadius: 15,
            width: 100,
            height:  40,
            flexDirection: "row",
        },
        posicaoCheckBox:{
            top:-230,
            left:30
        },
        InputVenciemnto:{
            borderWidth: 1,
            backgroundColor: "#ffffff",
            borderColor: "#000000",
            shadowColor: "#000000",
            elevation: 15,
            shadowOffset:{width: -1,height: 1},
            shadowOpacity: 0.9,
            shadowRadius: 1,
            fontSize: 15,
            fontWeight: "600",
            borderRadius: 3,
            paddingTop: 5,
            paddingBottom: 5,
            
        },
        posicaoVencimento:{
            left:200,
            top:-110,
            maxWidth:100,
            minWidth:50,
        },
        textoVencimento:{
        fontSize: 15,
        //mudar a fonte aqui
        left:200,
        top:-111
        },
        linhaMedico:{
            top:-50
        },
        InputMedico:{
            maxWidth:190,
            minWidth:150,
            borderWidth: 1,
            backgroundColor: "#ffffff",
            borderColor: "#000000",
            shadowColor: "#000000",
            elevation: 15,
            shadowOffset:{width: -1,height: 1},
            shadowOpacity: 0.9,
            shadowRadius: 1,
            fontSize: 15,
            fontWeight: "600",
            borderRadius: 3,
            paddingTop: 5,
            paddingBottom: 5,
        },
        posicaoComprimidoP:{
            left:100,
            top:-60
        },
        InputComprimidoP:{
            maxWidth:200,
            minWidth:170,
            borderWidth: 1,
            backgroundColor: "#ffffff",
            borderColor: "#000000",
            shadowColor: "#000000",
            elevation: 15,
            shadowOffset:{width: -1,height: 1},
            shadowOpacity: 0.9,
            shadowRadius: 1,
            fontSize: 15,
            fontWeight: "600",
            borderRadius: 3,
            paddingTop: 5,
            paddingBottom: 5,
            width:"100%",
        },
        textoComprimidoP:{
        fontSize: 15,
        //mudar fonte aqui
        left:110,
        top:-61,
        },
        InputPeriodo:{
        maxWidth:90,
        minWidth:30,
        borderWidth: 1,
        backgroundColor: "#ffffff",
        borderColor: "#000000",
        shadowColor: "#000000",
        elevation: 15,
        shadowOffset:{width: -1,height: 1},
        shadowOpacity: 0.9,
        shadowRadius: 1,
        paddingHorizontal: 10,
        fontSize: 15,
        fontWeight: "600",
        borderRadius: 3,
        paddingTop: 5,
        paddingBottom: 5,
        
        },
        sim:{
        fontSize: 15,
        //mudar fonte aqui
        left:160,
        top:-93,
        },
        nao:{
        fontSize: 15,
        //mudar fonte aqui
        left:240,
        top:-113,
        },
        checkBox1:{
            width:25,
            height:25,
            left:130,
            top:-45
        },
        checkBox2:{
            width:25,
            height:25,
            left:210,
            top:-70

        },
        textoUsoContinuo:{
        fontSize: 15,
        //mudar fonte aqui
        left:90,
        top:-265,
        },
        InputDosagem:{
        maxWidth:120,
        minWidth:80,
        borderWidth: 1,
        backgroundColor: "#ffffff",
        borderColor: "#000000",
        shadowColor: "#000000",
        elevation: 15,
        shadowOffset:{width: -1,height: 1},
        shadowOpacity: 0.9,
        shadowRadius: 1,
        paddingHorizontal: 10,
        fontSize: 15,
        fontWeight: "600",
        borderRadius: 3,
        paddingTop: 5,
        paddingBottom: 5,
        },
        containerBox1:{
            backgroundColor:"#20A2EB",
            width:"100%",
            height:40,
            
        },
        containerBox2:{
            backgroundColor:"#20A2EB",
            width:"100%",
            height:40,
            top:"91%",
        },
        Input:{
        borderWidth: 1,
        backgroundColor: "#ffffff",
        borderColor: "#000000",
        shadowColor: "#000000",
        elevation: 15,
        shadowOffset:{width: -1,height: 1},
        shadowOpacity: 0.9,
        shadowRadius: 1,
        paddingHorizontal: 10,
        fontSize: 15,
        fontWeight: "600",
        borderRadius: 3,
        paddingTop: 5,
        paddingBottom: 5,
        },
        conteinerForm:{
        justifyContent:"space-around",
        paddingHorizontal:40,
        position: 'absolute',
        width:"100%",
        alignSelf: "center",
        top:75,
        gap:0,
        maxWidth: 380,
        minWidth: 300,
        },
        textoForm:{
        fontSize: 15,
        //mudar fonte aqui
        },
        container:{
        flex:1,
        width: "100%",
        height:"100%",
        }
      });
