import {Pressable, View, Text, StyleSheet, Dimensions} from "react-native";
import {Colors} from "../../utils/colors";
import React from "react";

const CustomButton: React.FC<{ onPress: () => void }> = ({onPress, children}) => {
    return <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
            <Pressable
                onPress={onPress}
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => pressed
                    ? [styles.pressContainer, styles.pressed]
                    : [styles.pressContainer]}
            >
                <Text style={styles.text}>
                    {children}
                </Text>
            </Pressable>
        </View>
    </View>
}

export default CustomButton;

const styles = StyleSheet.create({
    mainContainer: {
        height: 150,
        overflow: 'hidden',
        width: Dimensions.get('window').width < 380 ? 250 : 300
    },
    innerContainer: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        borderRadius: 8,
    },
    pressContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        overflow: 'hidden',
        borderColor: Colors.primary500,
        borderRadius: 8,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        letterSpacing: 2
    },
    pressed: {
        backgroundColor: '#ccc',
        borderColor: '#ccc',
    }
});
