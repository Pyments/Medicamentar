import { useCallback } from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, Switch, Platform } from 'react-native'
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useFonts } from "expo-font"
import { useState } from "react"
import * as SplashScreen from 'expo-splash-screen';

import Footer from "@/src/components/Footer";
import { accentThemeColor, bgThemeColor, fgThemeColor, secBgThemeColor, textThemeColor } from '@/src/constants/ColorTheming';

export default function Configuration() {
    const [isPlusFS, setIsPlusFS] = useState(false);
    const toggleSwitchFontSize = () => setIsPlusFS(previousState => !previousState);

    const styleSwitchFontSize = (darkTheme: boolean) => darkTheme ? "#3E3C3C" : "#20A2EB";        

    const navigation = useNavigation();

    const AbrirNavMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    // Código que faz a fonte funcionar:
    const [fontsLoaded, fontError] = useFonts({
        "armata-regular-400": require("../../../fonts/armata-regular-400.ttf"),
      });   

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);
    
    if (!fontsLoaded && !fontError) {
        return null;
    }
    
    return(
        <SafeAreaView style={[styles.container, styles.paddingStatusBar]}
        onLayout={onLayoutRootView}
        >
            <StatusBar/>
            <View style={styles.header}>
                <TouchableOpacity onPress={AbrirNavMenu}>
                    <Image source={require("@/src/assets/menu-lateral.png")}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>CONFIGURAÇÕES</Text>
                <Image source={require("@/src/assets/icon-config.png")}/>
            </View>

            <View style={styles.preferences}>
                <View style={styles.settings}>
                    <Text style={isPlusFS ? styles.settingsTextPlus : styles.settingsText}>Tema Escuro</Text>
                    <Switch
                    value={false}
                    onValueChange={console.log("switchOn")}
                    trackColor={{false: "#DFDFDF", true: "#656565"}}
                    thumbColor={`${accentThemeColor}`}
                    />
                </View>
                <View style={styles.settings}>
                    <Text style={isPlusFS ? styles.settingsTextPlus : styles.settingsText}>Letras Grandes</Text>
                    <Switch
                    value={isPlusFS}
                    onValueChange={toggleSwitchFontSize}
                    trackColor={{false: "#E3E3E3", true: "#E3E3E3"}}
                    thumbColor={isPlusFS ? "#FFFFFF" : styleSwitchFontSize("")}
                    />
                </View>
            </View>
            <Footer/>
        </SafeAreaView>    
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        backgroundColor: `${bgThemeColor}`
    },
    header: {
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        flexDirection: "row",
        height: 88,
        backgroundColor: `${fgThemeColor}`
    },
    headerText: {
        fontSize: 23,
        color: "#FFFFFF",
        fontFamily: "armata-regular-400"
    },
    paddingStatusBar: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    preferences: {
        marginTop: 20,
    },
    settings: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: `${secBgThemeColor}`,
        height: 60,
        marginVertical: 3,
        marginHorizontal: 20,
        paddingHorizontal: 30,
        borderRadius: 3
    },
    settingsText: {
        fontFamily: "armata-regular-400",
        color: `${textThemeColor}`,
        fontSize: 16
    },
    settingsTextPlus: {
        fontFamily: "armata-regular-400",
        fontSize: 21
    },
});

