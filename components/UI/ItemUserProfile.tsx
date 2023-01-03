import {View, Text, StyleSheet} from "react-native";
import React from "react";
import {Colors} from "../../utils/colors";

const ItemUserProfile: React.FC<{ label: string }> = ({children, label}) => {
    return <View style={styles.mainContainer}>

        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.text}>{children}</Text>
        </View>
    </View>

}

export default ItemUserProfile;

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
        color: '#120b0b'
    },
    container: {
        paddingVertical: 8,
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary500,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        color: Colors.accent600,
        fontWeight: 'bold'
    }
})
