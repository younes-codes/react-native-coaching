import DateOfBirthForm from "../../components/Signin/DateOfBirthForm";
import {StyleSheet, View} from "react-native";

const DateOfBirthScreen = () => {
    return <View style={styles.container}>
        <DateOfBirthForm/>
    </View>

}

export default DateOfBirthScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})
