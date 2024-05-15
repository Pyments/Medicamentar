import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { secBgThemeColor, textThemeColor } from '../constants/ColorTheming';

interface ExameCardprops{
  dia:string;
  mes:string;
  consultaOuExame:string;
  nomeClinica:string;
  local:string;
  hora:string;
  imagem?:boolean;
}
const ExameCard = (props:ExameCardprops) => {
  const [isClicked, setIsClicked] = useState(false);

  const handlePress = () => {
    setIsClicked(!isClicked);
  };

  return (
    
      <>
      {/* Card com as informações básicas */}
      
      <TouchableOpacity onPress={handlePress} style={styles.stylesContainerExames}>
        <View style={styles.containerExamesAlert}>
       

          <View style  = {styles.circle}>
            <Text style = {styles.circleText}>{props.dia}</Text> 
            <View style = {styles.testeLinha}></View>
            <Text style = {styles.circleText}>{props.mes}</Text>
          </View>
          <View style = {styles.caixaTextoimage}>
          <Text style={styles.stylesContainerExamesTextAlert}>{props.consultaOuExame}</Text>
          {!props.imagem && <View style={styles.invisibleSpace}></View>}
          </View>
          {props.imagem && <Image style={styles.imagAlert} source={require("@/src/assets/imagem_alerta.png")} />}
          
        </View>
      </TouchableOpacity>
      
      {/* Renderizando um texto condicionalmente com base no estado de isClicked (Card com as info completas) */}

      {isClicked && (
          <TouchableOpacity onPress={handlePress} style={styles.stylesContainerExamesClicked}>
            
              <View style = {styles.stylesContainerExamesClickedInfoAdd}>
              <Text style = {styles.stylesContainerExamesClickedInfoAddText}>{props.nomeClinica}</Text>
              <Text style = {styles.stylesContainerExamesClickedInfoAddTextLocal} >{props.local}</Text>
              <Text style = {styles.stylesContainerExamesClickedInfoAddHour}>{props.hora}</Text>
              </View>
              
        </TouchableOpacity>
      )}
      </>
    
  );
};

const styles = StyleSheet.create({
  invisibleSpace: {
    width: 53,
  },
  
  caixaTextoimage:{
    
    flexDirection:"row",
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    
    
  },
  stylesContainerExamesClickedInfoAdd:{
    color: `${textThemeColor}`,
    alignItems:"center",
    paddingTop:1,
    width:"90%",
    marginBottom:33,
    marginTop:10,
  
  },  
  stylesContainerExamesClickedInfoAddText:{
    color: `${textThemeColor}`,
    fontSize:15,
    fontWeight:"400",
    marginTop:28,
    
  },
  stylesContainerExamesClickedInfoAddTextLocal:{
    color: `${textThemeColor}`,
    fontSize:15,
    fontWeight:"400",
  },
  stylesContainerExamesClickedInfoAddHour:{
    color: `${textThemeColor}`,
    fontSize:24,
    lineHeight:24,
    marginTop:16,
  },
  
  stylesContainerExames: {
    justifyContent: "center",
    flexDirection:"row",
    alignItems: "center",
    height: 59,
    borderRadius: 3,
    marginBottom: 10,
    backgroundColor: `${secBgThemeColor}`,
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 4, 
    },
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    elevation: 5,   
  },
  containerExamesAlert:{    
    alignItems:"center",
    flexDirection:"row",
  },
  circle:{
    borderRadius: 100,
    height:53,
    width:53,
    marginLeft:10,
    alignItems:"center",
    justifyContent:"center"
  },
  circleText: {
    fontWeight: "400",
    textAlign: "center",
    fontSize:24,
    color: `${textThemeColor}`
  },
  testeLinha:{
    borderWidth:0.8,
    borderColor: `${textThemeColor}`,
    backgroundColor:"#000000",
    width:"60%"
  },
  stylesContainerExamesTextAlert: {
    height:23,
    borderColor:`${textThemeColor}`,
    fontSize:15,
    fontWeight:"400",
    color: `${textThemeColor}`
  },
  imagAlert:{
    alignItems:"center",
    marginRight:34,
  },
 
  stylesContainerExamesClicked: {
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 3,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginBottom: 10,
    marginTop:-10,
    borderTopWidth:2,
    backgroundColor: `${secBgThemeColor}`,
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 4, 
    },
    shadowOpacity: 0.25, 
    shadowRadius: 3.84,
    elevation: 5, 
  },

});

export default ExameCard;
