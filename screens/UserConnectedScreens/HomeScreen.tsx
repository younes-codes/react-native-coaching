import { ImageBackground, Pressable, ScrollView, StyleSheet, Text } from "react-native";
import NextSession from "../../components/NextSession";
import ItemMenuTitle from "../../components/UI/ItemMenuTitle";
import { useEffect, useState } from "react";
import { EMPTY_USER } from "../../store";
import { fetchUser } from "../../utils/fetchUser";
import PerformancesSummary
    from "../../components/Performances/PerformancesSummary/PerformancesSummary";
import React from "react";
import UserProfile from "../../components/UserProfile";

const HomeScreen = () => {
    const [user, setUser] = useState(EMPTY_USER);


    useEffect(() => {
        fetchUser().then(user => {
            setUser(user);
        })
    }, [fetchUser]);

    return <ScrollView style={styles.bg}>
        <Text style={styles.welcome}>
            Bonjour <Text style={{ fontWeight: 'bold' }}>{user.firstName}</Text>,
        </Text>
        <Text style={styles.groupInfo}>Vous êtes dans le <Text
            style={styles.group}>groupe {user.group}</Text></Text>
        <NextSession />
        <PerformancesSummary />
        <Text style={styles.groupInfo}>
            Réalisez votre bilan
        </Text>
        <ImageBackground source={require('../../assets/images/bilan.jpg')}
            resizeMode="cover" style={styles.container}>
            <Pressable onPress={() => null} style={styles.button}>
                <Text style={styles.text}>bilan</Text>
            </Pressable>
        </ImageBackground>
        <UserProfile></UserProfile>
    </ScrollView>
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        height: 182,
        backgroundColor: "rgba(0,0,0,0.37)",
    },
    text: {
        color: "white",
        fontSize: 42,
        letterSpacing: 3,
        textTransform: 'uppercase',
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    },
    button: {
        height: '100%',
        justifyContent: 'center'
    },
    bg: { flex: 1, paddingBottom: 40 },
    welcome: {
        textAlign: 'center',
        paddingVertical: 8,
        fontSize: 22,
        flexDirection: 'column',
    },
    groupInfo: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    group: {
        fontWeight: 'bold'
    }
})

