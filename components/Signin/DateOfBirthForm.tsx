import {useState} from "react";
import {Platform, Pressable, StyleSheet, Text, View} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import {formatDate, getAge} from "../../utils/dateFormat";
import {Ionicons} from "@expo/vector-icons";
import FlatButton from "../UI/FlatButton";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {Colors} from "../../utils/colors";
import {useDispatch} from "react-redux";
import {userActions} from "../../store";

const DateOfBirthForm = () => {
    const dispatch = useDispatch();
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [placeholder, setPlaceHolder] = useState('Date de naissance');
    const [themeButton, setThemeButton] = useState('disabled');
    const [stylePlaceHolder, setStylePlaceHolder] = useState({color: '#ccc'})


    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const navigateToSexDataScreen = () => {
        const age = getAge(date);
        const DOB = formatDate(date);
        dispatch(userActions.saveAgeAndDOB({age, dateOfBirth: DOB}));
        navigation.navigate('SexData');
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        setPlaceHolder(formatDate(currentDate));
        setThemeButton(placeholder === 'placeholder' ? 'disabled' : 'primary');
        if (placeholder !== 'placeholder') {
            setStylePlaceHolder({color: Colors.primary500});
        }
    };


    return (
        <View>
            <View style={styles.inputContainerOuter}>
                <Text style={styles.label}>Date de naissance</Text>
                <Pressable style={styles.inputContainer} onPress={() => setShow(true)}>
                    <Text
                        style={[styles.placeholder, stylePlaceHolder]}>{placeholder}</Text>
                    <Ionicons name='calendar-outline' size={24}/>
                </Pressable>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode='date'
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    modal
                    onChange={onChange}
                />
            )}
            <View>
                <FlatButton children='Continuez' onPress={navigateToSexDataScreen}
                            themeButton={themeButton}/>
            </View>
        </View>
    );
}

export default DateOfBirthForm;

const styles = StyleSheet.create({
    inputContainerOuter: {
        alignItems: 'center'
    },
    label: {
        width: '80%',
        marginBottom: 4,
    },
    inputContainer: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 4,
        height: 50,
        marginVertical: 12,
        paddingHorizontal: 8,
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    placeholder: {
        fontWeight: 'bold'
    }
})
