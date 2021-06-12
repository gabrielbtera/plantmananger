
import React from 'react';
import {
    SafeAreaView, 
    Text, 
    Image, 
    TouchableOpacity, 
    StyleSheet, 
    Dimensions,
    View
}from 'react-native';

import {Entypo} from '@expo/vector-icons'
import wateringImg from '../assets/watering.png';
import colors from '../estilos/colors';
import fonts from '../estilos/fonts';
import { useNavigation } from '@react-navigation/core';

export function Welcome(){
    const navigation = useNavigation();
    
    function handleStart(){
        navigation.navigate('UserIdentification');

    }
    return(
        <SafeAreaView style= {styles.container}>
            <View style={styles.wrapper}>

           
                <Text style={styles.title}>
                    Gerrencie{'\n'}suas plantas de{'\n'}forma fácil</Text>
            
                    <Image 
                        source={wateringImg} 
                        style={styles.imagePrincipal}
                        resizeMode='contain'
                    
                    />
                    
                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você
                    sempre que precisar
                </Text>

                <TouchableOpacity 
                    style={styles.buttonMenu} 
                    activeOpacity={0.7}
                    onPress={handleStart}
                >
                
                    <Entypo 
                        name="chevron-thin-right" 
                        style={styles.buttonText}/>
                    
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent:'space-around',

    },
    title :{
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.titulo,
        marginTop: 70,
        fontFamily: fonts.heading,
        lineHeight: 30

    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.titulo,
        fontFamily: fonts.text

    },
    imagePrincipal: {
        height: Dimensions.get('window').width * 0.7
    },
    buttonMenu: {
        backgroundColor: '#00bc2c',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 50,
        height: 56,
        width: 56
    },
    buttonText: {
        color: colors.green_light,
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold'
    },
    wrapper:{
        paddingHorizontal: 30,
        flex:1,
        alignItems: 'center',
        justifyContent:'space-around',

    }
})