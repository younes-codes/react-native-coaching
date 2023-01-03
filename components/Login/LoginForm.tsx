import {View} from 'react-native';
import Input from "../UI/Input";
import FlatButton from "../UI/FlatButton";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useState} from "react";
import axios from "axios";
import {URL} from "../../utils/http";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginForm = () => {
    const [themeButton, setThemeButton] = useState('primary');
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const signinHandler = () => navigation.replace('Signin');
    const logHandler = async () => {
        setThemeButton('loading');
        const loginData = await axios.post(`${URL}/admin/login`, {
            email: enteredEmail,
            password: enteredPassword
        });
        try {
            AsyncStorage.setItem('user', JSON.stringify(loginData.data.user));
            navigation.replace('HomeApp');
        } catch (error) {
            console.log(error)
        }
    }

    const updateInputValueHandler = (inputType, enteredValue) => {
        switch (inputType) {
            case 'email':
                setEnteredEmail(enteredValue.trim());
                break;
            case 'password':
                setEnteredPassword(enteredValue.trim());
                break;
        }
    }

    return <View>
        <Input label='email'
               textInputConfig={{
                   keyboardType: 'email-address',
                   value: enteredEmail,
                   placeholder: 'Email',
                   onChangeText: updateInputValueHandler.bind(this, 'email'),
               }}
        />
        <Input label='Mot de passe'
               hidden={true} textInputConfig={{
            placeholder: 'Mot de passe',
            value: enteredPassword,
            onChangeText: updateInputValueHandler.bind(this, 'password'),
        }}/>
        <View>
            <FlatButton children='Me connecter'
                        themeButton={themeButton}
                        onPress={logHandler}/>
            <FlatButton children='Créer un compte' themeButton='secondary'
                        onPress={signinHandler}/>
        </View>
    </View>
}

export default LoginForm;
