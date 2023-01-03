import {KeyboardAvoidingView, Platform, StyleSheet, Text, View} from "react-native";
import Input from "../../UI/Input";
import FlatButton from "../../UI/FlatButton";
import {useEffect, useState} from "react";
import {formatDate} from "../../../utils/dateFormat";
import {Colors} from "../../../utils/colors";
import {EMPTY_USER} from "../../../store";
import {fetchUser} from "../../../utils/fetchUser";
import ItemMenuTitle from "../../UI/ItemMenuTitle";

interface PlageModel {
    date: string;
    time: number;
    kmh: number;
    kcal: number;
}

const PlageForm = () => {
    const [time, setTime] = useState('');
    const [performances, setPerformances] = useState<PlageModel[]>([]);
    const [user, setUser] = useState(EMPTY_USER);


    useEffect(() => {
        fetchUser().then(user => {
            setUser(user);
        })
    }, [fetchUser]);

    const onChangeTours = (value: any) => {
        setTime(value);
    }

    const savePlage = () => {
        const getKmh = (time: number): number => ((25 * 100) / (time * 60)) * 3.6;
        setTime('');
        setPerformances(prevState => [...prevState, {
            date: formatDate(new Date()),
            time: +time,
            kmh: +getKmh(+time).toFixed(2),
            kcal: +(2.5 * user.weight).toFixed(2)
        }]);
    }


    return <View style={styles.container}>
        <ItemMenuTitle children='plage'/>
        <View>
            <Text style={styles.performancesContainer}>
                <Text>{performances.length === 0 &&
                    <Text>0 plage réalisé pour le moment</Text>}</Text>
                <View>
                    {performances.length !== 0 &&
                        performances.map((perfs, i) => <View key={i}>
                                <View>
                                    <Text style={styles.fracId}>Plage #{i + 1}</Text>
                                    <Text
                                        style={styles.perfs}>{perfs.date}<Text></Text></Text>
                                    <Text style={styles.perfs}>2.5 km en {perfs.time} minutes</Text>
                                    <Text style={styles.perfs}>{perfs.kmh} km/h</Text>
                                    <Text style={styles.perfs}>environ {perfs.kcal} calories
                                        dépensées</Text>
                                </View>
                            </View>
                        )}
                </View>

            </Text>
        </View>
        <KeyboardAvoidingView style={{flex: 0, width: '100%'}}
                              behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Input label='temps réalisé' textInputConfig={{
                keyboardType: 'numeric',
                placeholder: 'temps réalisé',
                value: time,
                onChangeText: onChangeTours
            }}/>
            <FlatButton
                onPress={savePlage}
                children='enregistrez'/>
        </KeyboardAvoidingView>
    </View>
}

export default PlageForm;

const styles = StyleSheet.create({
    fracId: {
        color: Colors.primary500,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 18,
        textAlign: 'center',
        paddingVertical: 12,
        width: '100%'
    },

    container: {
        width: '100%',
        alignItems: 'center'
    },
    performancesContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        paddingVertical: 12,
    },
    perfs: {
        textAlign: 'center'
    }
})
