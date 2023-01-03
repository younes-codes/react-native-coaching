import {StyleSheet, Text, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Colors} from "../../../../utils/colors";

const BeachSummary = () => {
    return <View style={styles.summaryItem}>
        <MaterialCommunityIcons name="beach" size={24} color={Colors.primary500}/>
        <Text style={styles.summaryText}>plage</Text>
        <Text>4 plages</Text>
        <Text>10 km parcourus</Text>
        <Text>≃ 10 km/h</Text>
        <Text>kcal perdus: 587</Text>
    </View>
}

export default BeachSummary;

const styles = StyleSheet.create({
    summaryText: {
        textTransform: 'uppercase',
        marginTop: 10,
        fontWeight: 'bold'
    },
    summaryItem: {
        alignItems: 'center',
        width: '50%',
    },
})
