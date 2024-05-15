import { View, StyleSheet, Text, Image, SafeAreaView, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation, router } from "expo-router";

import Footer from "@/src/components/Footer";
import ExameCard from "@/src/components/ExameCard";
import { accentThemeColor, bgThemeColor, fgThemeColor, textThemeColor } from "@/src/constants/ColorTheming";

export default function Exames() {

  const navigation = useNavigation();

    const AbrirNavMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };
    
  const handlePressAddExames = () => {
    //Alert.alert("indisponível no momento");   
    return router.navigate({ pathname: "./ConsultasAdd" });
  };

  return (
   
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTop}>
          <TouchableOpacity onPress={AbrirNavMenu} >
          <Image style={styles.menu} source={require("@/src/assets/menu-lateral.png")}/>
          </TouchableOpacity>
          <Text style={styles.textContainerTop}>CONSULTAS E EXAMES</Text>
          <Image style={styles.logoHospital} source={require("@/src/assets/logo_hospital.png")}/>
        </View>
        
      <View style = {styles.subContainer}>        
        <View style={styles.containerExames}>
        <ExameCard
         dia='10'
         mes='02'
         consultaOuExame='CONSULTA MÉDICA'
         nomeClinica='HMPA - HOSPITAL M. PAULO AFONSO'
         local='R. WILSON PEREIRA, 155 - BTN III'
         hora='14:00H'
         imagem={true}
         ></ExameCard>
         <ExameCard
         dia='22'
         mes='05'
         consultaOuExame='EXAME OFTALMOLÓGICO'
         nomeClinica='HMPA - HOSPITAL M. PAULO AFONSO'
         local='R. WILSON PEREIRA, 155 - BTN III'
         hora='10:00H'
         imagem={false}
         ></ExameCard>
         <TouchableOpacity onPress={handlePressAddExames} style={styles.stylesContainerExamesAdd}>
            <Text>ADICIONAR CONSULTA/EXAME</Text>
         </TouchableOpacity>
        </View> 
      </View>
      <Footer />
    </SafeAreaView>
  );
}
{/* Falta a fonte*/}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${bgThemeColor}`,
    maxWidth:"100%",
    alignItems:"center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  subContainer:{
    alignItems:"center",
    width:"auto",
  },
  containerTop: {
    backgroundColor: `${fgThemeColor}`,
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
    backgroundColor: `${accentThemeColor}`,
  },
  circleInvisible:{
    borderRadius: 100,
    height:53,
    width:53,
    marginRight:12,
    marginLeft:10,
  },
  stylesContainerExamesAddText:{
    flex:1,
    height:23,
    borderColor:"#FF0000",
    textAlign:"center",
    marginRight:61,
    fontSize:15,
    fontWeight:"400",
    color: `${textThemeColor}`,    
  },
});