import {StyleSheet, Text, View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";
import {Colors} from "../../../../utils/colors";
import {fetchFractionne} from "../../../../utils/fetchFractionne";
import {useEffect, useState} from "react";
import {fetchUser} from "../../../../utils/fetchUser";
import * as constants from "constants";
import {getKmh} from "../../Fractionne/FractionneForm";

const FractionneSummary = () => {

    return <View style={styles.summaryItem}>
        <FontAwesome5 name="running" size={24} color={Colors.primary500}/>
        <Text style={styles.summaryText}>fractionné</Text>
        <Text>3 fractionnés</Text>
        <Text>90 tours soit 9 km</Text>
        <Text>≃ 10 km/h</Text>
        <Text>kcal perdus: 587</Text>
    </View>
}

export default FractionneSummary;

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
