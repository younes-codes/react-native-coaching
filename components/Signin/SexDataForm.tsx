import {StyleSheet, View} from "react-native";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import CustomButton from "../UI/CustomButton";
import {useDispatch} from "react-redux";
import {userActions} from "../../store";

const SexDataForm = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const dispatch = useDispatch();
    const navigateToWeightHeightScreenHandler = (sex: string) => {
        dispatch(userActions.saveSex(sex));
        navigation.navigate('Group');
    }
    return <View style={styles.container}>
        <View>
            <CustomButton
                onPress={navigateToWeightHeightScreenHandler.bind(null, 'femme')}
                children='UNE FEMME'
            />
        </View>
        <View style={styles.secondBtn}>
            <CustomButton
                onPress={navigateToWeightHeightScreenHandler.bind(null, 'homme')}
                children='UN HOMME'/>
        </View>
        <View>
        </View>
    </View>
}

export default SexDataForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondBtn: {
        marginTop: 8
    }
})
