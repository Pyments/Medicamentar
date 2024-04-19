import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(UserAuth)" options={{ headerShown: false }} />
    </Stack>
  );
}
