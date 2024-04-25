import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Button,
  Alert,
} from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";

export default function Exames() {

  const navigation = useNavigation();

    const AbrirNavMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

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
  const handlePressAddExames = () => {
    Alert.alert("indisponível no momento");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
          <TouchableOpacity onPress={AbrirNavMenu} >
          <Image style={styles.menu} source={require("../../../assets/menu-lateral.png")}/>
          </TouchableOpacity>
          <Text style={styles.textContainerTop}>CONSULTAS E EXAMES</Text>
          <Image style={styles.logoHospital} source={require("../../../assets/logo_hospital.png")}/>
        </View>
        
      <View style = {styles.subContainer}>        
        <View style={styles.containerExames}>
          {buttonClicked && (
            <TouchableOpacity onPress={handleButtonClick} style={styles.stylesContainerExames}>
              <View style={styles.containerExamesAlert}>
                <View style= {styles.circleRed}><Text style = {styles.circleText}>08</Text> 
                <View style = {styles.testeLinha}></View>
                <Text style = {styles.circleText}>04</Text>
                </View>
                <Text style={styles.stylesContainerExamesTextAlert}> EXAME OFTALMOLÓGICO</Text>
                <Image style = {styles.imagAlert} source={require("../../../assets/imagem_alerta.png")}/>
              </View>
            </TouchableOpacity>
          )}
          {secondClicked && (
            <TouchableOpacity onPress={handleSecondButtonClick} style={styles.stylesContainerExamesClicked}> 
              <View style={styles.containerExamesAlert}>
                <View style= {styles.circleRed}>
                <Text style = {styles.circleText}>08</Text> 
                <View style = {styles.testeLinha}></View>
                <Text style = {styles.circleText}>04</Text>
                </View>
                <Text style={styles.stylesContainerExamesTextAlert}>EXAME OFTALMOLÓGICO</Text>
                <Image style = {styles.imagAlert} source={require("../../../assets/imagem_alerta.png")}/>
            </View>
            <View style = {styles.stylesContainerExamesClickedInfo}>
              <View style = {styles.stylesContainerExamesClickedInfoAdd}>
              <Text style = {styles.stylesContainerExamesClickedInfoAddText}>CLINICA OFTALMODIAGNOSE</Text>
              <Text style = {styles.stylesContainerExamesClickedInfoAddTextLocal} >AV. APOLONIO SALES, 930 - CENTRO</Text>
              <Text style = {styles.stylesContainerExamesClickedInfoAddHour}>17:00H </Text>
              </View>
            </View>       
            </TouchableOpacity>
          )}
          {thirdClicked && (
            <TouchableOpacity onPress={handleThirdButtonClick}style={styles.stylesContainerExames}>
              <View style = {styles.containerExamesAlert}>  
                <View style= {styles.circleYellow}><Text style = {styles.circleText}>12</Text> 
                <View style = {styles.testeLinha}></View>
                <Text style = {styles.circleText}>04</Text></View>
                <Text style={styles.stylesContainerExamesText}>CONSULTA MÉDICA{" "}</Text> 
              </View>
            </TouchableOpacity>
          )}
          {fourthClicked && (
            <TouchableOpacity onPress={handleFourthButtonClick} style={styles.stylesContainerExamesClicked}> 
            <View style={styles.containerExamesAlert}>
              <View style= {styles.circleYellow}>
                <Text style = {styles.circleText}>12</Text> 
                <View style = {styles.testeLinha}></View>
                <Text style = {styles.circleText}>04</Text>
              </View>
            <Text style={styles.stylesContainerExamesText}>CONSULTA MÉDICA</Text>
          </View>
          <View style = {styles.stylesContainerExamesClickedInfo}>
            <View style = {styles.stylesContainerExamesClickedInfoAdd}>
              <Text style = {styles.stylesContainerExamesClickedInfoAddText}>HMPA - HOSPITAL M. PAULO AFONSO</Text>
              <Text style = {styles.stylesContainerExamesClickedInfoAddTextLocal} >R. WILSON PEREIRA, 155 - BTN III</Text>
              <Text style = {styles.stylesContainerExamesClickedInfoAddHour}>14:00H</Text>
            </View>
          </View>       
          </TouchableOpacity>
          )}
         <TouchableOpacity onPress={handlePressAddExames} style={styles.stylesContainerExamesAdd}>
            <View style= {styles.circleInvisible}></View>
            <Text style={styles.stylesContainerExamesAddText}>ADICIONAR EXAME</Text>
         </TouchableOpacity>
        </View>
      </View>
      <View style = {styles.containerFooter}><Text></Text></View>
    </View>
  );
}
{/* Falta a fonte*/}
const styles = StyleSheet.create({
  circleRed:{
    borderColor: "#FF0000",
    borderRadius: 100,
    height:53,
    width:53,
    borderWidth:2,
    marginRight:12,
    marginLeft:10,
    alignItems:"center",
    justifyContent:"center"
  },
  circleYellow:{
    borderColor: "#FFB800",
    borderRadius: 100,
    height:53,
    width:53,
    borderWidth:2,
    marginRight:12,
    marginLeft:10,
    alignItems:"center",
    justifyContent:"center"
  },
  circleText: {
    fontWeight: "400",
    textAlign: "center",
    fontSize:20,
  },
  circleInvisible:{
    borderRadius: 100,
    height:53,
    width:53,
    marginRight:12,
    marginLeft:10,
  },
  testeLinha:{
    borderWidth:1,
    width:"70%"
  },
  imagAlert:{
    alignItems:"center",
    marginRight:34,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    maxWidth:"100%",
    alignItems:"center",
  },
  subContainer:{
    alignItems:"center",
    width:"auto",
  },
  containerTop: {
    backgroundColor: "#20A2EB",
    height: 88,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width:"100%",
  },
  textContainerTop: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "400",
  },
  logoHospital: {
    marginRight: 20,
    marginLeft: 15,
  },
  menu: {
    marginLeft: 20,
    marginRight: 15,
  },
  containerExames: {
    paddingRight: 17,
    paddingLeft: 17,
  },
  stylesContainerExames: {
    justifyContent: "center",
    flexDirection:"row",
    alignItems: "center",
    height: 59,
    borderRadius: 3,
    marginBottom: 10,
    backgroundColor: "#D9D9D9",
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 4, 
    },
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    elevation: 5, 
  
  },
  stylesContainerExamesTextAlert: {
    flex:1,
    height:23,
    borderColor:"#FFB800",
    textAlign:"center",
    fontSize:15,
    fontWeight:"400",
  },
  stylesContainerExamesAdd: {
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    elevation: 5, 
    flexDirection:"row",
    
    justifyContent: "center",
    alignItems: "center",
    height: 59,
    borderRadius: 3,
    marginBottom: 10,
    backgroundColor: "#BBE7FF",
  },
  stylesContainerExamesText: {
    flex:1,
    height:23,
    borderColor:"#FF0000",
    textAlign:"center",
    marginRight:61,
    fontSize:15,
    fontWeight:"400",
  },
  containerExamesAlert: {
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
  },
  stylesContainerExamesClicked: {
    alignItems: "center",
    height: 201,
    width:"100%",
    borderRadius: 3,
    marginBottom: 10,
    backgroundColor: "#D9D9D9",
    shadowColor: "#000", // Cor da sombra 
    shadowOffset: {
      width: 0,
      height: 4, // Deslocamento vertical positivo (gera sombra para baixo)
    },
    shadowOpacity: 0.25, // Opacidade da sombra (iOS)
    shadowRadius: 3.84, // Raio da sombra (iOS)
    elevation: 5, // Elevação da sombra (Android)
  
  },
  stylesContainerExamesClickedInfo:{
    
    borderTopWidth:2,
    margin:28,
    flex:1,
    width:325,
    
  },
  stylesContainerExamesClickedInfoAdd:{
    alignItems:"center",
    justifyContent:"center"
  },  
  stylesContainerExamesClickedInfoAddText:{
    fontSize:15,
    fontWeight:"400",
    marginTop:28,
  },
  stylesContainerExamesClickedInfoAddTextLocal:{
    fontSize:15,
    fontWeight:"400",
  },
  stylesContainerExamesClickedInfoAddHour:{
    fontSize:24,
    lineHeight:24,
    marginTop:15,
    marginBottom:33,
    

  },
  stylesContainerExamesAddText:{
 
    flex:1,
    height:23,
    borderColor:"#FF0000",
    textAlign:"center",
    marginRight:61,
    fontSize:15,
    fontWeight:"400",
    
  },
  containerFooter: {
    width: "100%",
    height: 30,
    backgroundColor: "#71AAFF",
    position: "absolute",
    bottom: 0,
  },
});
