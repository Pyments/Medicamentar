import { Stack } from "expo-router";

export default function UserAuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="LogIn"
        options={{
          title: "Log In",
        }}
      />
      <Stack.Screen
        name="SignIn"
        options={{
          title: "Sign In",
        }}
      />
    </Stack>
  );
}
