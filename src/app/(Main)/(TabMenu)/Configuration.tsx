import React, {useState} from "react"
import {SafeAreaView, View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, Switch} from 'react-native'

import {useFonts} from "expo-font"
import {LinearGradient} from "expo-linear-gradient"
import {router} from "expo-router"
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";

function Configuration() {
    useFonts({
        "armata-regular-400": require("../../../fonts/armata-regular-400.ttf")
    });

    /*const fontsLoaded = useFonts({
        "armata-regular-400": require("../../../fonts/armata-regular-400.ttf")
    })
    if(!fontsLoaded){
        return(<Text>Loading...</Text>)
    }*/

    const [isDark, setIsDark] = useState(false);
    const toggleSwitchTheme = () => setIsDark(previousState => !previousState);
    
    const [isPlusFS, setIsPlusFS] = useState(false);
    const toggleSwitchFontSize = () => setIsPlusFS(previousState => !previousState);

    const styleSwitchFontSize = (darkTheme: boolean) => darkTheme ? "#3E3C3C" : "#20A2EB";        

    const navigation = useNavigation();

    const AbrirNavMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return(
        <SafeAreaView style={isDark ? styles.containerDark : styles.container}>
            <StatusBar/>
            <View style={isDark ? styles.headerDark : styles.header}>
                <TouchableOpacity onPress={AbrirNavMenu}>
                    <Image source={require("../../../assets/menu-lateral.png")}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>CONFIGURAÇÕES</Text>
                <Image source={require("../../../assets/icon-config.png")}/>
            </View>

            <View style={styles.preferences}>
                <View style={isDark ? styles.settingsDark : styles.settings}>
                    <Text style={isPlusFS ? styles.settingsTextPlus : styles.settingsText}>Tema Escuro</Text>
                    <Switch
                    value={isDark}
                    onValueChange={toggleSwitchTheme}
                    trackColor={{false: "#DFDFDF", true: "#656565"}}
                    thumbColor={isDark ? "#E3E3E3" : "#20A2EB"}
                    />
                </View>
                <View style={isDark ? styles.settingsDark : styles.settings}>
                    <Text style={isPlusFS ? styles.settingsTextPlus : styles.settingsText}>Letras Grandes</Text>
                    <Switch
                    value={isPlusFS}
                    onValueChange={toggleSwitchFontSize}
                    trackColor={isDark ? {false: "#656565", true: "#656565"} : {false: "#E3E3E3", true: "#E3E3E3"}}
                    thumbColor={isPlusFS ? "#FFFFFF" : styleSwitchFontSize(isDark)}
                    />
                </View>
            </View>


            <View style={isDark ? styles.bottomMenuContainerDark : styles.bottomMenuContainer}>
                <View>
                    <TouchableOpacity onPress={() => router.navigate({pathname: "../Home"})}>
                        <LinearGradient colors={isDark ? ["#A2A2A2", "#656565"] : ["#20A2EB", "#1A8BCA"]} style={styles.imageBox}>
                            <Image
                            source={require("../../../assets/lar-bymuhammad-waqas-khan.png")}
                            style={styles.imageBottom}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={() => router.navigate({pathname: "./Exames"})}>
                        <View style={styles.imageBox}>
                            <Image 
                            source={require('../../../assets/hospital.png')}
                            style={styles.imageBottom}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity>
                        <LinearGradient colors={isDark ? ["#A2A2A2", "#656565"] : ["#20A2EB", "#1A8BCA"]} style={styles.imageBox}>
                            <Image
                            source={require("../../../assets/pilulas.png")}
                            style={styles.imageBottom}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity>
                        <View style={styles.imageBox}>
                            <Image
                            source={require("../../../assets/emergency.png")}
                            style={styles.imageBottom}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity>
                        <LinearGradient colors={isDark ? ["#A2A2A2", "#656565"] : ["#20A2EB", "#1A8BCA"]} style={styles.imageBox}>
                            <Image
                            source={require("../../../assets/user.png")}
                            style={styles.imageBottom}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>                
            </View>
        </SafeAreaView>    
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        backgroundColor: "#F6F6F6",
    },
    containerDark: {
        flex: 1,
        backgroundColor: "#131313"
    },
    header: {
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        flexDirection: "row",
        height: 88,
        // marginTop: 23,
        backgroundColor: "#20A2EB"
    },
    headerDark: {
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        flexDirection: "row",
        height: 88,
        // marginTop: 23,
        backgroundColor: "#656565",
    },
    headerText: {
        fontSize: 23,
        color: "#FFFFFF",
        fontFamily: "armata-regular-400"
    },
    preferences: {
        marginTop: 20,
    },
    settings: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        height: 60,
        marginVertical: 3,
        marginHorizontal: 20,
        paddingLeft: 30,
        borderRadius: 3
    },
    settingsDark: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#E3E3E3",
        height: 60,
        marginVertical: 3,
        marginHorizontal: 20,
        paddingLeft: 30,
        borderRadius: 3
    },
    settingsText: {
        fontSize: 16,
        fontFamily: "armata-regular-400",
    },
    settingsTextPlus: {
        fontFamily: "armata-regular-400",
        fontSize: 21
    },
    bottomMenuContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 83,
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#20A2EB",
    },
    bottomMenuContainerDark: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 83,
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#656565"
    },
    imageBottom: {
        height: 45,
        width: 45
    },
    imageBox: {
        alignItems: "center",
        justifyContent: "center",
        width: 78,
        height: 83
    },
});

export default Configuration;


                /* <TouchableOpacity onPress={() => router.navigate({pathname: "../Home"})}>
                    <LinearGradient colors={isDark ? ["#A2A2A2", "#656565"] : ["#20A2EB", "#1A8BCA"]} style={styles.imageBox}>
                        <Image
                        source={require("../../../assets/lar-bymuhammad-waqas-khan.png")}
                        style={styles.imageBottom}
                        />
                    </LinearGradient>
                </TouchableOpacity> */