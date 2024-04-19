import { Stack, Tabs } from "expo-router";

export default function UserAuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="LogIn"
        options={{
          title: "Log In",
          // headerShown: false
        }}
      />
      <Stack.Screen
        name="SignIn"
        options={{
          title: "Sign In",
          // headerShown: false
        }}
      />
    </Stack>
  );
}
