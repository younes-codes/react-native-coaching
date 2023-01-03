import {TextInput, View, Text, TextInputProps, StyleSheet} from "react-native";
import React from "react";
import {Colors} from "../../utils/colors";

const Input: React.FC<{ label: string; hidden?: boolean, textInputConfig: TextInputProps }> =
    ({label, hidden = false, textInputConfig}) => {
        return <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
            </View>
            <TextInput {...textInputConfig} secureTextEntry={hidden}
                       style={styles.input}/>
        </View>
    }

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 12
    },
    labelContainer: {
        alignItems: 'flex-start',
        width: '80%',
        marginBottom: 4,
    },
    label: {
        textAlign: 'left',
        color: Colors.accent600
    },
    input: {
        borderColor: Colors.primary500,
        borderWidth: 2,
        borderRadius: 4,
        height: 50,
        width: '80%',
        paddingLeft: 8
    }
})
