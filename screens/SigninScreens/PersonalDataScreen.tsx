import {KeyboardAvoidingView, Platform, StyleSheet, View} from "react-native";
import PersonalDataForm from "../../components/Signin/PersonalDataForm";

const PersonalDataScreen = () => {
    return <KeyboardAvoidingView
        style={{flex: 1, justifyContent: 'center'}}
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
    >
        <View style={styles.container}>
            <PersonalDataForm/>
        </View>
    </KeyboardAvoidingView>
}

export default PersonalDataScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})
