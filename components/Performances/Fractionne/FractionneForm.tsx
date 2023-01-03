import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import Input from "../../UI/Input";
import FlatButton from "../../UI/FlatButton";
import {useEffect, useState} from "react";
import {formatDate} from "../../../utils/dateFormat";
import {Colors} from "../../../utils/colors";
import {EMPTY_USER} from "../../../store";
import {fetchUser} from "../../../utils/fetchUser";
import axios from "axios";
import {URL} from '../../../utils/http';
import ItemMenuTitle from "../../UI/ItemMenuTitle";

export interface FractionneModel {
    date: string;
    kmh: number;
    tours: number;
    kcal: number;
}

export const getKmh = (toursNum: string): number => ((+toursNum * 100) / (12 * 60)) * 3.6;

const FractionneForm = (props) => {
    const [tours, setTours] = useState('');
    const [performances, setPerformances] = useState<FractionneModel[]>([]);
    const [user, setUser] = useState(EMPTY_USER);


    useEffect(() => {
        fetchUser().then(user => {
            setUser(user);
        })
    }, [fetchUser]);



    const onChangeTours = (value: any) => {
        setTours(value);
    }

    const saveFractionne = () => {
        setTours('');
        setPerformances(prevState => [...prevState, {
            date: formatDate(new Date()),
            tours: +tours,
            kmh: +getKmh(tours).toFixed(2),
            kcal: +(+tours / 10 * user.weight).toFixed(2)
        }]);
    }


    return <View style={styles.container}>
        <ItemMenuTitle children='fractionné'/>
        <View>
            <View style={styles.performancesContainer}>
                <View>
                    {performances.length === 0 ? <Text>0 fractionné réalisé pour le
                        moment</Text> : performances.map((perfs, i) =>
                        <View key={i}>
                            <View>
                                <Text style={styles.fracId}>Fractionné #{i + 1}</Text>
                                <Text
                                    style={styles.perfs}>{perfs.date}<Text></Text></Text>
                                <Text style={styles.perfs}>{perfs.tours} tours</Text>
                                <Text style={styles.perfs}>{perfs.kmh} km/h</Text>
                                <Text style={styles.perfs}>environ {perfs.kcal} calories
                                    dépensées</Text>
                            </View>
                        </View>
                    )}
                </View>
            </View>
        </View>
        <KeyboardAvoidingView style={{flex: 0, width: '100%'}}
                              behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Input label='nombre de tours' textInputConfig={{
                keyboardType: 'numeric',
                placeholder: 'nombre de tours',
                value: tours,
                onChangeText: onChangeTours
            }}/>
            <View style={styles.btnContainer}>
                <FlatButton
                    onPress={saveFractionne}
                    children='enregistrez'
                />
            </View>
        </KeyboardAvoidingView>
    </View>
}

export default FractionneForm;

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
    btnContainer: {
        marginBottom: 54
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingBottom: 24
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
