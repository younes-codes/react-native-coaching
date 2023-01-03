import SexDataForm from "../../components/Signin/SexDataForm";
import {StyleSheet, View} from "react-native";

const SexDataScreen = () => {
    return <View style={styles.container}>
        <SexDataForm/>
    </View>
}

export default SexDataScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})
