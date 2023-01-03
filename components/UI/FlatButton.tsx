import {View, Text, Pressable, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";
import {Colors} from "../../utils/colors";


const FlatButton: React.FC<{ onPress: () => any; themeButton?: string }> =
    ({children, onPress, themeButton}) => {

        const [isDisabled, setIsDisabled] = useState(false);

        const btnInner: any = {
            'primary': styles.primary,
            'secondary': styles.secondary,
            'disabled': styles.disabled,
            'loading': styles.disabled,
            'logout': styles.secondary,
            '': undefined
        }[themeButton || 'primary'];

        const btnText: { color: string } | undefined = {
            'secondary': styles.secondaryText,
            'logout': styles.logoutText,
            '': undefined
        }[themeButton || 'primary'];

        useEffect(() => {
            setIsDisabled(themeButton === 'disabled');
        }, [themeButton])

        return <View style={styles.buttonContainer}>
            <View style={styles.buttonOuter}>
                <Pressable
                    disabled={isDisabled || themeButton === 'loading'}
                    onPress={onPress}
                    style={({pressed}) => pressed
                        ? [styles.buttonInner, styles.pressed, btnInner]
                        : [styles.buttonInner, btnInner]}
                    android_ripple={{color: "#ccc"}}
                >
                    <Text style={[styles.button, btnText]}>
                        {children}
                    </Text>
                </Pressable>
            </View>
        </View>
    }

export default FlatButton;

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        alignItems: 'center'
    },
    buttonOuter: {
        borderRadius: 8,
        overflow: 'hidden',
        width: '80%',
        marginVertical: 4
    },
    buttonInner: {
        height: 60,
        justifyContent: 'center',
    },
    primary: {
        backgroundColor: Colors.primary500
    },
    secondary: {
        backgroundColor: 'transparent',
    },
    disabled: {backgroundColor: Colors.primary500, opacity: .5},
    secondaryText: {color: Colors.primary500},
    logoutText: {
        color: Colors.accent600,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    },
    button: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: .75
    }
})
