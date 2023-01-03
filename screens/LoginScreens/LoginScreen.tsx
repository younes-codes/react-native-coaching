import {StyleSheet, View} from "react-native";
import LoginForm from "../../components/Login/LoginForm";

const LoginScreen = () => {
    return <View style={styles.container}>
        <LoginForm/>
    </View>

}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})
