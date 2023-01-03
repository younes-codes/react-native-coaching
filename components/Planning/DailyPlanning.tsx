import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import {Colors} from "../../utils/colors";
import {Plannings} from "../../utils/fetchPlannings";

const days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];


const DailyPlanning: React.FC<{ plannings: Plannings[] }> = ({plannings}) => {

    const [openPlanning, setOpenPlanning] = useState({
        '0': false,
        '1': false,
        '2': false,
        '3': false,
    })

    const expandedPlanning = (index: number) => {
        if (index === 0) {
            setOpenPlanning({'0': !openPlanning['0'], "1": false, "2": false, "3": false})
        } else if (index === 1) {
            setOpenPlanning({'0': false, "1": !openPlanning['1'], "2": false, "3": false})
        } else if (index === 2) {
            setOpenPlanning({'0': false, "1": false, "2": !openPlanning['2'], "3": false})
        } else if (index === 3) {
            setOpenPlanning({'0': false, "1": false, "2": false, "3": !openPlanning['3']})
        }
    }

    // @ts-ignore
    return <ScrollView style={styles.container}>
        {plannings.map((p, index) => <View key={Math.random().toString()}>
            <Pressable
                style={styles.groupTitleContainer}
                onPress={expandedPlanning.bind(null, index)}>
                <Text style={styles.groupText}>Groupe {index + 1}</Text>
            </Pressable>
            {
                // @ts-ignore
                openPlanning[index.toString()] && days.map((day) => {
                    return <View key={day}>
                        <View style={styles.dayContainer}>
                            <Text style={styles.day}>{day}</Text>
                        </View>
                        <View style={styles.planningDay}>
                            <View style={styles.planningDayInner}>
                                <Text style={styles.time}>{p[day][0].time}</Text>
                                <Text style={styles.session}>{p[day][0].session}</Text>
                            </View>
                            <View style={styles.divider}/>
                            <View style={styles.planningDayInner}>
                                <Text style={styles.time}>{p[day][1].time}</Text>
                                <Text style={styles.session}>{p[day][1].session}</Text>
                            </View>
                        </View>

                    </View>
                })}
        </View>)}
    </ScrollView>
}

export default DailyPlanning;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    groupTitleContainer: {
        alignItems: 'center',
        borderBottomColor: Colors.accent600,
        borderBottomWidth: 2
    },
    groupText: {
        textAlign: 'center',
        backgroundColor: Colors.primary500,
        color: '#fff',
        paddingVertical: 18,
        width: '100%',
        fontWeight: 'bold',
        fontSize: 22,
        textTransform: 'uppercase'
    },
    divider: {
        width: '100%',
        marginVertical: 8,
        height: 2,
        backgroundColor: '#ccc'
    },
    planningDay: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingVertical: 12
    },
    planningDayInner: {
        alignItems: 'center'
    },
    time: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    dayContainer: {
        paddingVertical: 12,
        alignItems: 'center',
        backgroundColor: Colors.accent600,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    day: {
        textTransform: 'uppercase',
        fontSize: 16,
        letterSpacing: 2,
        fontWeight: 'bold',
        color: '#fff'
    },
    session: {
        marginVertical: 8,
        fontSize: 16
    },
    open: {
        display: 'flex',
    },
    close: {
        display: 'none'
    }
});
