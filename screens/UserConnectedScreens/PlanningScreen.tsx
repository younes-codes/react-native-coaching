import Planning from "../../components/Planning/Planning";
import {StyleSheet, View} from "react-native";
import ItemMenuTitle from "../../components/UI/ItemMenuTitle";

const PlanningScreen = () => {
    return <View style={styles.bg}>
        <Planning/>
    </View>
}

export default PlanningScreen;


const styles = StyleSheet.create({
    bg: {flex: 1}
})
