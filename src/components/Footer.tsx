import { View, Text, StyleSheet } from "react-native"
import { fgThemeColor } from "@/src/constants/ColorTheming"

export default function Footer(){
    return(
        <View style={styles.footer}>
            <Text/>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: "100%",
        height: 30,
        backgroundColor: `${fgThemeColor}`,
        position: "absolute",
        bottom: 0,
    }
})