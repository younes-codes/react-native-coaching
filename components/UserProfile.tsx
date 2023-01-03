import { ScrollView, StyleSheet, View } from "react-native";
import { EMPTY_USER } from "../store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { fetchUser } from "../utils/fetchUser";
import { getImc } from "../utils/bodyData";
import ItemUserProfile from "./UI/ItemUserProfile";
import FlatButton from "./UI/FlatButton";
import React from "react";

const UserProfile = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [user, setUser] = useState(EMPTY_USER);

    useEffect(() => {
        fetchUser().then(user => {
            setUser(user);
        })
    }, [fetchUser]);
    const removeData = async () => {
        await AsyncStorage.removeItem('user');
    }
    const logoutHandler = () => {
        removeData().then(() => {
            navigation.navigate('USER_LOGOUT', { screen: 'Login' });
        })
    }

    return <ScrollView>
        <FlatButton children='Mettre à jour mon profil' themeButton='secondary'
            onPress={() => null} />
        <ItemUserProfile label='groupe'>
            {user.group}
        </ItemUserProfile>
        <ItemUserProfile label='prénom'>
            {user.firstName}
        </ItemUserProfile>

        <ItemUserProfile label='nom'>
            {user.lastName}
        </ItemUserProfile>

        <ItemUserProfile label='age'>
            {user.age}
        </ItemUserProfile>

        <ItemUserProfile label='taille en cm'>
            {user.height}
        </ItemUserProfile>

        <ItemUserProfile label='poids en kg'>
            {user.weight}
        </ItemUserProfile>
        <ItemUserProfile label='imc'>
            {getImc(user)}
        </ItemUserProfile>
        <ItemUserProfile label='Présent à Coaching Village'>
            {user.isValidated ? 'true' : 'false'}
        </ItemUserProfile>
        <View style={styles.buttons}>
            <FlatButton onPress={logoutHandler} children='Déconnexion'
                themeButton='logout' />
        </View>
    </ScrollView>
}

export default UserProfile;

const styles = StyleSheet.create({
    buttons: {
        marginTop: 24
    }
})
