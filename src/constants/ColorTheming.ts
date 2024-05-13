import { Appearance } from "react-native";

const colorScheme = () => Appearance.getColorScheme() === "light" ? true : false;
const colorTheme = {
  light: {
    text: "#000000",
    primary: "#FFFFFF",
    secondary: "#20A2EB",
    tertiary: "#E8E8E8",
    accent: "#ADEDFF"
  },
  dark: {
    text: "#FFFFFF",
    primary: "#131313",
    secondary: "#656565",
    tertiary: "#656565",
    accent: "#4D6385"
  }
}

export const bgThemeColor = colorScheme() ? colorTheme.light.primary : colorTheme.dark.primary;
export const fgThemeColor = colorScheme() ? colorTheme.light.secondary : colorTheme.dark.secondary;
export const secBgThemeColor = colorScheme() ? colorTheme.light.tertiary : colorTheme.dark.tertiary;
export const textThemeColor = colorScheme() ? colorTheme.light.text : colorTheme.dark.text;
export const accentThemeColor = colorScheme() ? colorTheme.light.accent : colorTheme.dark.accent;