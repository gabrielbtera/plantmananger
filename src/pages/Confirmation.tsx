import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Button } from "../components/Button";

import colors from "../estilos/colors";
import fonts from "../estilos/fonts";

export function Confirmation(){
    return(
    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            
            <Text style={styles.emoji}>
                😁
            </Text>
            
            <Text style={styles.title}>
                Prontinho
            </Text>
            
            <Text style={styles.subtitle}>
                Agora vamos cuidas das suas plantinhas
                com muito cuidado.
            </Text>
           
            <View style={styles.footer}>
                <Button title="Começar"/>

            </View>
        </View>
        
    </SafeAreaView>
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    content: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        padding: 30
    },
    emoji: {
        fontSize: 80,
        textAlign: 'center'

    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.titulo,
        lineHeight:38,
        marginTop:15,


    },
    subtitle: {
        fontFamily: fonts.text,
        fontSize: 17,
        textAlign: 'center',
        paddingHorizontal:20,
        color: colors.titulo
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        paddingTop:25,

    }
});