import { View, Text, StyleSheet } from "react-native"

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
        backgroundColor: "#20A2EB",
        position: "absolute",
        bottom: 0,
    }
})