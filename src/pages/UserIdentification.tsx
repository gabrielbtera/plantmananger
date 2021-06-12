import React from "react";
import {
    StyleSheet, 
    SafeAreaView,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard

} from 'react-native';
import colors from "../estilos/colors";
import fonts from "../estilos/fonts";
import { Button } from "../components/Button";
import { useState } from "react";
import { useNavigation } from '@react-navigation/core';

export function UserIdentification(){
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFiled] = useState(false);
    const [name, setName] = useState<string>()
    const navigation = useNavigation();
    
    function handleStart(){
        navigation.navigate('Confirmation');

    }

    function hadleInputBlur(){
        setIsFocused(false);
        setIsFiled(!!name)

    };

    function handleInputFocus(){
        setIsFocused(true);
    };

    function handleInputChange(value: string){
        setIsFiled(!!value)
        setName(value)
        console.log(name)
    }





    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.content}>
                        <View style={styles.form}>
                            <Text style={styles.emoji}>
                                {isFilled ? '😁':'😃'}
                            </Text>
                            <Text style={styles.question} >
                                Como podemos {'\n'}
                                chamar você?
                            </Text>
                            <TextInput 
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && 
                                    {borderColor: colors.verde}
                                ]}
                                placeholder="seu nome"
                                onBlur={hadleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />
                            <View style={styles.footer}>
                                <Button title='Confirmar'
                                onPress={handleStart}/>
                            </View>
                            
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    content: {
        flex: 1,
        width: '100%',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
        width: '100%'

    },
    emoji: {
        fontSize: 44,
        paddingBottom: 20,
    },
    input: {
        borderBottomWidth:1,
        borderColor: colors.cinza,
        color: colors.titulo,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },
    question: {
        fontSize: 24,
        fontFamily: fonts.heading,
        lineHeight: 32,
        color: colors.titulo,
        textAlign: 'center'
    },
    footer: {
        marginTop:25,
        width: '100%',
        paddingHorizontal: 20,


    }
})