import { KeyboardAvoidingView, Platform, View } from "react-native";
import Input from "../UI/Input";
import FlatButton from "../UI/FlatButton";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IsAuthContext } from "../../store/context/isAuth-context";
import axios from "axios";
import { URL } from '../../utils/http';
import { formatDate } from "../../utils/dateFormat";

const WeightAndHeightForm = () => {
    const [themeButton, setThemeButton] = useState('primary');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const authContext = useContext(IsAuthContext);

    const goToHomePageHandler = async () => {

        setThemeButton('loading');
        console.log("coucou");
        x        console.log("hey");
        console.log(URL);



        axios.post(`${URL}/admin/create-user`, {
            user: {
                ...user, height: height, weight: weight, isAuth: true
            }
        })
            .then((res) => {
                console.log("coucou2");
                console.log(res);

                const _id = res.data.uid._id;
                dispatch(userActions.saveBodyData({
                    height: height,
                    weight: weight,
                    isAuth: true,
                    _id: _id
                }));
                AsyncStorage.setItem(
                    'user',
                    JSON.stringify({
                        ...user, height: height, weight: weight, isAuth: true, _id
                    })
                );
                authContext.isAuth = user.isAuth;
                console.log(user);

                navigation.replace('HomeApp');
            }).catch((e) => {
                setThemeButton('primary');
                console.log(e.message)
            })
    }

    const onChangeWeight = (inputValue: any) => {
        setWeight(inputValue);
    }
    const onChangeHeight = (inputValue: any) => {
        setHeight(inputValue);
    }

    const enabledButton = () => setThemeButton(!height || !weight ? 'disabled' : 'primary');

    useEffect(() => {
        if (themeButton === 'loading') return;
        enabledButton()
    }, [enabledButton]);


    return <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'center' }}
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
    >
        <View>
            <Input label='Taille en cm' textInputConfig={{
                keyboardType: 'number-pad',
                placeholder: 'Taille en cm',
                value: height,
                onChangeText: onChangeHeight
            }} />
            <Input label='Poids' textInputConfig={{
                keyboardType: 'number-pad',
                placeholder: 'Poids',
                value: weight,
                onChangeText: onChangeWeight
            }} />
            <View>
                <FlatButton children={themeButton === 'loading' ? "Création de votre" +
                    " profil..." : "C'est fini" +
                " !"} themeButton={themeButton}
                    onPress={goToHomePageHandler} />
            </View>
        </View>
    </KeyboardAvoidingView>;
}

export default WeightAndHeightForm;
