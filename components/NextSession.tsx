import {Platform, StyleSheet, Text, View} from "react-native";
import {Colors} from "../utils/colors";
import {useEffect, useState} from "react";
import {fetchUser} from "../utils/fetchUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {frenchDay, getNextSession} from "../utils/dateFormat";

interface Session {
    when: string,
    session: string,
    time: string
}


const NextSession = () => {
    const [nextSession, setNextSession] = useState<Session>({
        when: '',
        session: '',
        time: ''
    });

    const fetchPlannings = async () => {
        const planningsData = await AsyncStorage.getItem('plannings');
        try {
            if (typeof planningsData === "string") {
                return JSON.parse(planningsData);
            }
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        fetchUser().then(user => {
            const getPlannings = async () => {
                const plannings = await fetchPlannings();
                try {
                    return getNextSession(plannings, user);

                } catch (e) {
                    console.log(e)
                }
            }
            getPlannings().then((nextSession: any) => {
                setNextSession({
                    session: nextSession.session,
                    when: nextSession.when,
                    time: nextSession.time
                })
            })
        })
    }, []);


    return <View style={styles.mainContainer}>
        <View style={styles.container}>
            <Text style={styles.nextSessionTitle}>Prochaine Session</Text>
            <View style={styles.nextSession}>
                <Text style={styles.when}>{frenchDay()} {nextSession.when}</Text>
                <Text style={styles.time}>{nextSession.time}</Text>
                <Text style={styles.session}>{nextSession.session}</Text>
            </View>
        </View>
    </View>

}

export default NextSession;

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
    },
    nextSessionTitle: {
        color: Colors.accent600,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingVertical: 8,
        fontSize: 16
    },
    nextSession: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 12,
        textTransform: 'uppercase',
        fontWeight: 'bold',

    },
    container: {
        backgroundColor: Colors.primary500,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
        width: '90%',
        elevation: 4,
        shadowOpacity: .25,
        shadowRadius: 8,
        borderRadius: 8,
        shadowOffset: {width: 0, height: 2},
        overflow: Platform.OS === 'android' ? "hidden" : "visible"
    },
    when: {
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#fff'
    },
    time: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 8,
        textTransform: 'uppercase',
    },
    session: {
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#fff'
    }
})
