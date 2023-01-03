import {Platform, StyleSheet, Text, View} from "react-native";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {Colors} from "../../../utils/colors";
import FractionneSummary from "./FractionneSummary/FractionneSummary";
import BeachSummary from "./BeachSummary/BeachSummary";

const PerformancesSummary = () => {
    return <View style={styles.summaryContainer}>
        <Text style={styles.performancesTitle}>Vos performances</Text>
        <View style={styles.summary}>
            <FractionneSummary/>
            <BeachSummary/>
            <View style={styles.summaryItem}>
                <MaterialIcons name="fitness-center" size={24} color={Colors.primary500}/>
                <Text style={styles.summaryText}>Musculation</Text>
                <Text>32 exos</Text>
                <Text>320 kg de charge</Text>
                <Text>124 répetitions</Text>
            </View>
            <View style={styles.summaryItem}>
                <Ionicons name="fitness" size={24} color={Colors.primary500}/>
                <Text style={styles.summaryText}>hiit</Text>
                <Text>32 exos</Text>
                <Text>320 kg de charge</Text>
                <Text>124 répetitions</Text>
            </View>
        </View>
    </View>

}

export default PerformancesSummary;

const styles = StyleSheet.create({
    summaryContainer: {
        alignItems: 'center',
    },
    performancesTitle: {
        fontSize: 18,
        marginBottom: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    summaryText: {
        textTransform: 'uppercase',
        marginTop: 10,
        fontWeight: 'bold'
    },
    summary: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#ccc',
        width: '90%',
        height: 'auto',
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 4,
        shadowOpacity: .25,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 2},
        overflow: Platform.OS === 'android' ? "hidden" : "visible"
    },
    summaryItem: {
        alignItems: 'center',
        width: '50%',
    },
})
