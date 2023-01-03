import SelectDropdown from 'react-native-select-dropdown'
import {StyleSheet, View} from "react-native";
import FlatButton from "../UI/FlatButton";
import {useState} from "react";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useDispatch} from "react-redux";
import {userActions} from "../../store";

const GroupForm = () => {
    const [userGroup, setUserGroup] = useState(0);
    const [themeButton, setThemeButton] = useState('disabled');
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const dispatch = useDispatch();

    const navigateHeightAndWeight = () => {
        dispatch(userActions.saveGroup(userGroup));
        navigation.navigate('WeightAndHeight');
    }

    const groups = [1, 2, 3, 4]

    // @ts-ignore
    return <View style={styles.container}>
        <SelectDropdown
            buttonTextAfterSelection={(selectedItem) => selectedItem}
            rowTextForSelection={(item) => item}
            defaultButtonText='groupe'
            data={groups}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            onSelect={(selectedItem, index) => {
                setUserGroup(selectedItem);
                setThemeButton('primary')
            }}/>
        <View style={styles.button}>
            <FlatButton children='Continuez' onPress={navigateHeightAndWeight}
                        themeButton={themeButton}/>
        </View>
    </View>

}

export default GroupForm;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-around'
    },
    button: {
        width: '100%'
    },
    dropdown1BtnStyle: {
        width: '80%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    dropdown1BtnTxtStyle: {color: '#444', textAlign: 'auto'},
})
