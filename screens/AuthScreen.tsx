import {Stack} from "../utils/navigation";
import {Colors} from "../utils/colors";
import SignInScreen from "./SigninScreens/SignInScreen";
import LoginScreen from "./LoginScreens/LoginScreen";
import PersonalDataScreen from "./SigninScreens/PersonalDataScreen";
import SexDataScreen from "./SigninScreens/SexDataScreen";
import DateOfBirthScreen from "./SigninScreens/DateOfBirthScreen";
import WeightAndHeightScreen from "./SigninScreens/WeightAndHeightScreen";
import HomeScreenApp from "./HomeScreenApp";
import * as React from "react";
import {StyleSheet} from "react-native";
import GroupScreen from "./SigninScreens/GroupScreen";

const AuthScreen = () =>
    <Stack.Navigator
        screenOptions={{
            headerTitleAlign: 'center',
            contentStyle: {backgroundColor: Colors.primary50},
            headerStyle: {
                backgroundColor: Colors.primary500,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
        < Stack.Screen
            name="Signin"
            component={SignInScreen}
            options={{
                title: 'INSCRIPTION',
                headerBackVisible: false
            }}
        />
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
                title: 'CONNEXION', headerBackVisible: false
            }}
        />
        <Stack.Screen
            name="PersonalData"
            component={PersonalDataScreen}
            options={{
                title: 'Comment vous appelez-vous ?',
            }}
        />
        <Stack.Screen
            name="SexData"
            component={SexDataScreen}
            options={{
                title: 'Vous êtes: ',
                headerBackTitle: 'Nom, prénom'
            }}
        />
        <Stack.Screen
            name="DateOfBirth"
            component={DateOfBirthScreen}
            options={{
                title: 'Votre date de naissance',
                headerBackTitle: 'Sexe'
            }}
        />
        <Stack.Screen
            name="Group"
            component={GroupScreen}
            options={{
                title: 'Votre Groupe',
                headerBackTitle: 'Nom,' +
                    ' prénom'
            }}
        />
        <Stack.Screen
            name="WeightAndHeight"
            component={WeightAndHeightScreen}
            options={{
                title: 'Votre taille et poids',
                headerBackTitle: 'Votre groupe'
            }}
        />
        <Stack.Screen
            name="HomeApp"
            component={HomeScreenApp}
            options={{
                title: 'COACHING VILLAGE APP',
                headerShown: false
            }}
        />
        <Stack.Screen
            name='USER_LOGOUT'
            component={LoginScreen}
            options={{
                title: 'CONNEXION',
                left: null,
                gestureEnabled: false,
                headerBackVisible: false
            }}/>
    </Stack.Navigator>

export default AuthScreen;
const styles = StyleSheet.create({
    linearContainer: {
        flex: 1
    }
})
