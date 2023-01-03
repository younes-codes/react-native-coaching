import {StyleSheet, Text, View} from "react-native";

const ErrorMessage = ({children}) => <View style={styles.containerOuter}>
    <View style={styles.container}>
        <Text style={styles.errorMessage}>{children}</Text>
    </View>
</View>


export default ErrorMessage;

const styles = StyleSheet.create({
    containerOuter: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',

    },
    container: {
        backgroundColor: "rgb(220,214,214)",
        borderRadius: 8,
        width: '80%',
        padding: 16,
    },
    errorMessage: {
        color: "#cb174d",
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
