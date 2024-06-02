import Drawer from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import NavMenu from "./NavMenu";
import { Image, StatusBar } from "react-native";

export default function UserAuthLayout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#000"}></StatusBar>
      <Drawer 
        drawerContent={NavMenu} 
        screenOptions={{
          drawerActiveBackgroundColor: "rgba(255, 255, 255, 0.4)",
          drawerActiveTintColor: "#ffffff",
          drawerInactiveTintColor: "#ffffff",
          drawerType:"slide",
        }}
        >
        <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Tela Principal",
          title: "Tela Principal",
          headerShown: false,
          drawerIcon: ({}) => (
            <Image
              source={require("@/src/assets/DrawerIcons/home_icon.png")}
              resizeMode="contain"
              style={{width:30, height:30}}
            />
          )
        }}
        />
        <Drawer.Screen
        name="Perfil"
        options={{
          drawerLabel: "Usuário",
          title: "Usuário",
          headerShown: false,
          drawerIcon: ({}) => (
            <Image
              source={require("@/src/assets/user.png")}
              resizeMode="contain"
              style={{width:30, height: 30}}
            />
          )
        }}
        />
        <Drawer.Screen
        name="Exames"
        options={{
          drawerLabel: "Consultas e Exames",
          title: "Consultas e Exames",
          headerShown: false,
          drawerIcon: ({}) => (
            <Image
              source={require("@/src/assets/hospital.png")}
              resizeMode="contain"
              style={{width:30, height:30}}
            />
          )
        
        }}
        />
        <Drawer.Screen
          name="Medicamentos"
          options={{
            drawerLabel: "Medicamentos",
            title: "Medicamentos",
            headerShown: false,
          
            drawerIcon: ({}) => (
              <Image
                source={require("@/src/assets/pilulas.png")}
                resizeMode="contain"
                style={{width:30, height:30}}
              />
            )
          }}
        />
         <Drawer.Screen
          name="Emergencia"
          options={{
            drawerLabel: "Emergência",
            title: "Emergência",
            headerShown: false,
          
            drawerIcon: ({}) => (
              <Image
                source={require("@/src/assets/DrawerIcons/emergencia_icon.png")}
                resizeMode="contain"
                style={{width:30, height:30}}
              />
            )
          }}
        />
       <Drawer.Screen
        name="Configuration"
        options={{
          drawerLabel: "Configurações",
          title: "Configurações",
          headerShown: false,
          drawerIcon: ({}) => (
            <Image
              source={require("@/src/assets/DrawerIcons/config_icon.png")}
              resizeMode="contain"
              style={{width:30, height:30}}
            />
          )
        }}
        />
        <Drawer.Screen
          name="ConsultasAdd"
          options={{
            drawerLabel: "Adicionar Consultas",
            title: "Adicionar Consultas",
            headerShown: false,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
