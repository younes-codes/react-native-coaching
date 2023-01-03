import {StyleSheet, Text, View} from "react-native";
import {Colors} from "../../utils/colors";
import React from "react";

const MainTitle = () => {


    return <View style={styles.container}>
        <Text style={styles.mainTitle}>
            COACHING VILLAGE <Text style={styles.appWord}>APP</Text>
        </Text>
    </View>
}

export default MainTitle;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary500,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainTitle: {
        color: '#fff',
        fontSize: 16
    },
    appWord: {
        color: Colors.accent600,
        fontWeight: 'bold'
    }
})
