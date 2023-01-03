import {StyleSheet, View} from "react-native";
import SigninForm from "../../components/Signin/SigninForm";

const SignInScreen = () => {
    return <View style={styles.container}>
        <SigninForm/>
    </View>
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})
