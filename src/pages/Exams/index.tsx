import React,{useState} from "react";
import {View, StyleSheet, Text,Image,SafeAreaView, TouchableOpacity, Pressable,Button, Alert} from "react-native";


export default function Exams(){
    const [buttonClicked, setButtonClicked] = useState(true);
    const [secondClicked, setSecondClicked] = useState(false);
    const [thirdClicked, setThirdClicked] = useState(true);
    const [fourthClicked, setFourthClicked] = useState(false);

    const handleButtonClick = () => {
  
      setButtonClicked(false);
      setSecondClicked(true);
    };

    const handleSecondButtonClick = () => {

      setSecondClicked(false);
      setButtonClicked(true);
    };
    const handleThirdButtonClick = () => {

      setThirdClicked(false);
      setFourthClicked(true);
    };
    const handleFourthButtonClick = () => {

      setThirdClicked(true);
      setFourthClicked(false);
    };
    const handlePressAddExams = () => {
        Alert.alert('indisponível no momento');
      };

    return( 
        <SafeAreaView style = {styles.container}>
        <View>
            <View style = {styles.containerTop}>
                <Image style={styles.menu} source={require("../../assets/menu-lateral.png")}></Image>
                <Text style = {styles.textContainerTop}>CONSULTAS E EXAMES</Text>
                <Image style ={styles.logoHospital} source={require("../../assets/logo_hospital.png")}></Image>
            </View>
            <View style = {styles.containerExams} >
                {buttonClicked &&(
                    <TouchableOpacity onPress={handleButtonClick} style = {styles.stylesContainerExams}>
                        <View style = {styles.containerExamsAlert}>
                            <Text style = {styles.stylesContainerExamsTextAlert}>EXAME OFTALMOLÓGICO</Text> 
                    </View>
                </TouchableOpacity>
                )}
                {secondClicked &&(
                    <TouchableOpacity onPress={handleSecondButtonClick} style = {styles.stylesContainerExamsClicked}>
                        <Text style = {styles.stylesContainerExamsTextAlert}>EXAME OFTALMOLÓGICO</Text> 
                    </TouchableOpacity>
                )}
                {thirdClicked &&(
                <TouchableOpacity  onPress={handleThirdButtonClick}
                    style = {styles.stylesContainerExams}>
                        <Text style = {styles.stylesContainerExamsText}>CONSULTA MÉDICA </Text>
                </TouchableOpacity>
                )}
                {fourthClicked &&(
                    <TouchableOpacity onPress={handleFourthButtonClick} style = {styles.stylesContainerExamsClicked}>
                        <Text style = {styles.stylesContainerExamsText}>CONSULTA MÉDICA </Text>
                    </TouchableOpacity>
                )}
                <TouchableOpacity onPress={handlePressAddExams} style = {styles.stylesContainerExamsAdd}>
                        <Text style = {styles.stylesContainerExamsText}>ADICIONAR EXAME</Text>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFFFFF",
    },
    containerTop:{
        backgroundColor:"#20A2EB",
        height:88,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        marginBottom:10,
    },
    textContainerTop:{
        flex:1,
        alignItems:"center",
        textAlign:"center",
        fontSize:24,
        color:"#FFFFFF",
        fontWeight:"400",
    },
    logoHospital:{
        marginRight:20,
        marginLeft:14,
    },
    menu:{
        marginLeft:20,
        marginRight:14,
    },
    containerExams:{
        paddingRight:17,
        paddingLeft:17,

    },
    stylesContainerExams:{
        justifyContent:"center",
        alignItems:"center",
        height:59,
        borderRadius:30,
        marginBottom:10,
        backgroundColor:"#D9D9D9",
    },
    stylesContainerExamsTextAlert:{
        textAlign:"center",
        justifyContent:"center",
        alignContent:"center"
        },
    stylesContainerExamsAdd:{
        justifyContent:"center",
        alignItems:"center",
        height:59,
        borderRadius:30,
        marginBottom:10,
        backgroundColor:"#BBE7FF",
    },
    stylesContainerExamsText:{
        fontSize: 15,
        fontWeight:"400",
    },
    containerExamsAlert:{

        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",

    },
    stylesContainerExamsClicked:{
        alignItems:"center",
        height:201,
        borderRadius:30,
        marginBottom:10,
        backgroundColor:"#D9D9D9",
    },

});