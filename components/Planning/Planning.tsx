import DailyPlanning from "./DailyPlanning";
import {Button, ScrollView, StyleSheet} from "react-native";
import {useCallback, useEffect, useState} from "react";
import {fetchPlanningsDataAndStorageSaved, Plannings} from "../../utils/fetchPlannings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FlatButton from "../UI/FlatButton";

const Planning = () => {
    const [plannings, setPlannings] = useState<Plannings[]>([]);


    const updatePlanning = async () => {
        const updatedPlanning = await fetchPlanningsDataAndStorageSaved();
        setPlannings(updatedPlanning);
    }

    const fetchPlannings = useCallback(async () => {
        const planningsData = await AsyncStorage.getItem('plannings');
        try {
            if (planningsData) {
                const planningStored = await JSON.parse(planningsData);
                setPlannings(planningStored);
            }
        } catch (e) {
            console.log(e)
        }
    }, []);

    useEffect(() => {
        fetchPlannings();
    }, []);

    return <ScrollView>
        <FlatButton children='Mettre à jour les plannings' themeButton='secondary' onPress={updatePlanning}/>
        <DailyPlanning plannings={plannings}/>
    </ScrollView>


}

export default Planning;

const styles = StyleSheet.create({
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center'
    },
    welcome: {
        textAlign: 'center',
        paddingVertical: 8,
        fontSize: 22,
        marginBottom: 24,
        fontWeight: 'bold'
    }
})

