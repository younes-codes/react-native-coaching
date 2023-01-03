import WeightAndHeightForm from "../../components/Signin/WeightAndHeightForm";
import {StyleSheet, View} from "react-native";
import {useSelector} from "react-redux";

const WeightAndHeightScreen = () => {
    return <View style={styles.container}>
        <WeightAndHeightForm/>
    </View>;

}

export default WeightAndHeightScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})
