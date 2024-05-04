import { Stack } from "expo-router";

export default function UserAuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[AdMedicamentos]"
        options={{
          title: "Adicionar medicamento",
          statusBarHidden: false
        }}
      />
    </Stack>
  );
}
