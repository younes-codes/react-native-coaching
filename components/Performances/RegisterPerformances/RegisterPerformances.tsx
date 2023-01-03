import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Ionicons} from "@expo/vector-icons";
import PlageForm from "../Plage/PlageForm";
import FractionneForm from "../Fractionne/FractionneForm";
import MusculationForm from "../Musculation/MusculationForm";
import BilanForm from "../Bilan/BilanForm";

const RegisterPerformances: React.FC<{ session: string, onCloseRegister: () => void }> =
    ({session, onCloseRegister}) => {
        const onCloseRegisterHandler = () => onCloseRegister();


        const getScreen = {
            'fractionne': <FractionneForm/>,
            'plage': <PlageForm/>,
            'musculation': <MusculationForm/>,
            'hiit': <BilanForm/>,
        }[session]

        return <ScrollView style={{flex: 1}}>
            <Pressable onPress={onCloseRegisterHandler}
                       style={styles.button}>
                <Ionicons name="close" size={24} color="black"/>
                <Text>fermer</Text>
            </Pressable>
            <View style={styles.formContainer}>
                {getScreen}
            </View>
        </ScrollView>
    }

export default RegisterPerformances;

const styles = StyleSheet.create({
    formContainer: {
        marginTop: 80,
        flex: 1
    },
    button: {
        position: 'absolute',
        alignItems: 'center',
        right: 40,
        justifyContent: 'flex-end',
        marginBottom: 20,
        width: 50,
        height: 50
    }
})
