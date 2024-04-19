import { Stack, Tabs } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="Home"
        options={
          {
            headerShown: false
          }
        }
      />
    </Stack>
  );
}
