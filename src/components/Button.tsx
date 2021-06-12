import React from 'react';
import { TouchableOpacity, StyleSheet, Text, 
TouchableOpacityProps} from 'react-native';
import colors from '../estilos/colors';
import fonts from '../estilos/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string
}


export function Button({title, ...rest}: ButtonProps){
    return(
        <TouchableOpacity 
                style={styles.buttonMenu} 
                activeOpacity={0.7}
                {...rest}
            >
                
                <Text style={styles.buttonText}>
                    {title}
                    
                </Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonMenu: {
        backgroundColor: colors.verde,
        fontWeight: 'normal',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 50,
        height: 56,
        
        justifyContent: 'center',
        
    },

    buttonText: {
        color: colors.branco,
        fontFamily:fonts.text,
        fontSize: 24
    }
})