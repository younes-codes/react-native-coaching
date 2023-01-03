import {View} from "react-native";
import Input from "../UI/Input";
import FlatButton from "../UI/FlatButton";
import React, {useState} from "react";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import ErrorMessage from "../UI/ErrorMessage";
import {userActions} from "../../store";
import {useDispatch, useSelector} from "react-redux";

const SigninForm: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const dispatch = useDispatch();

    const [themeButton, setThemeButton] = useState('primary');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const user = useSelector(state => state.user);

    const navigateToNameHandler = () => {
        setThemeButton('loading');
        dispatch(userActions.saveEmailAndPassword({
            email: enteredEmail,
            password: enteredPassword
        }));
        navigation.replace('PersonalData');
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
        <Input label='Email' textInputConfig={{
            keyboardType: 'email-address',
            placeholder: 'Email',
            value: enteredEmail,
            onFocus: () => setErrorMessage(''),
            onChangeText: updateInputValueHandler.bind(this, 'email'),
        }}/>
        {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Input label='Mot de passe' hidden={true} textInputConfig={{
            placeholder: 'Mot de passe',
            value: enteredPassword,
            onChangeText: updateInputValueHandler.bind(this, 'password'),

        }}/>
        <View>
            <FlatButton
                children={themeButton === 'loading' ? 'chargement...' : 'Commencez !'}
                themeButton={themeButton}
                onPress={navigateToNameHandler}/>
            <FlatButton children="J'ai déjà un compte"
                        themeButton='secondary'
                        onPress={() => navigation.replace('Login')}/>
        </View>
    </View>
}

export default SigninForm;
