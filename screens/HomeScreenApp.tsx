import {SafeAreaView, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";
import MainTitle from "../components/UI/MainTitle";
import UserConnectedMenu from "../components/UserConnectedMenu/UserConnectedMenu";
import {EMPTY_USER} from "../store";
import {fetchUser} from "../utils/fetchUser";
import {fetchPlanningsDataAndStorageSaved} from "../utils/fetchPlannings";


const HomeScreenApp = () => {
    const [user, setUser] = useState(EMPTY_USER);

    useEffect(() => {
        fetchUser().then(user => {
            setUser(user);
        })
    }, [fetchUser]);

    useEffect(() => {
        const fetchedPlanning = fetchPlanningsDataAndStorageSaved();
    }, [fetchPlanningsDataAndStorageSaved]);

    return (
        <SafeAreaView style={styles.container}>
            <MainTitle/>
            {user.isAuth && <UserConnectedMenu/>}
        </SafeAreaView>
    );
}

export default HomeScreenApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
