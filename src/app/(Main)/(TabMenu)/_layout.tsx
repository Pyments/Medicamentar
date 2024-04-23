import { Stack } from "expo-router";
import Drawer from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function UserAuthLayout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Drawer>
        <Drawer.Screen
        name="Perfil"
        options={{
          drawerLabel: "Usuário",
          title: "Usuário",
          headerShown: true
        }}
        />
        <Drawer.Screen
        name="Exames"
        options={{
          drawerLabel: "Consultas e Exames",
          title: "Consultas e Exames"
        }}
        />
        <Drawer.Screen
        name="AdMedicamentos"
        options={{
          drawerLabel: "Medicamentos",
          title: "Medicamentos"
        }}
        />
        <Drawer.Screen
        name="Configuration"
        options={{
          drawerLabel: "Configurações",
          title: "Configurações"
        }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
