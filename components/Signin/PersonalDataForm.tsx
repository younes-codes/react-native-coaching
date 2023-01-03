import {View} from "react-native";
import Input from "../UI/Input";
import FlatButton from "../UI/FlatButton";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useEffect, useState} from "react";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../store";

const PersonalDataForm = () => {
    const dispatch = useDispatch();

    const [enteredName, setEnteredName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [themeButton, setThemeButton] = useState('disabled');
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const navigateToDateOfBirthScreen = () => {
        dispatch(userActions.saveFirstAndLastName({
            firstName: enteredName.trim(),
            lastName: enteredLastName.trim()
        }));
        navigation.navigate('DateOfBirth');
    }

    const onChangeFNHandler = (inputValue: string) => {
        setEnteredName(inputValue);
    }
    const onChangeLNHandler = (inputValue: string) => {
        setEnteredLastName(inputValue);
    }
    const enabledButton = () => setThemeButton(!enteredName || !enteredLastName ? 'disabled' : 'primary');


    useEffect(() => {
        enabledButton()
    }, [enabledButton]);


    return <View>
        <Input
            label='Nom'
            textInputConfig={{
                keyboardType: 'default',
                placeholder: 'Nom',
                value: enteredLastName,
                onChangeText: onChangeLNHandler
            }}/>
        <Input
            label='Prénom'
            textInputConfig={{
                keyboardType: 'default',
                placeholder: 'Prénom',
                value: enteredName,
                onChangeText: onChangeFNHandler
            }}/>
        <View>
            <FlatButton children='Continuez' onPress={navigateToDateOfBirthScreen}
                        themeButton={themeButton}/>
        </View>
    </View>
}

export default PersonalDataForm;
