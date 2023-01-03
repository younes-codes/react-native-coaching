import {Colors} from "../../utils/colors";
import HomeScreen from "../../screens/UserConnectedScreens/HomeScreen";
import {Ionicons} from "@expo/vector-icons";
import PlanningScreen from "../../screens/UserConnectedScreens/PlanningScreen";
import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {Platform, StyleSheet} from "react-native";
import ProfileScreen from "../../screens/UserConnectedScreens/ProfileScreen";
import GroupsScreen from "../../screens/UserConnectedScreens/GroupsScreen";
import PerformancesScreen from "../../screens/UserConnectedScreens/PerformancesScreen";

const UserConnectedMenu = () => {
    const Tab = createMaterialTopTabNavigator();

    return <Tab.Navigator
        tabBarPosition='bottom'
        name="Feed"
        screenOptions={{
            tabBarActiveTintColor: Colors.accent600,
            tabBarLabelStyle: {fontSize: 8, fontWeight: 'bold'},
            tabBarStyle: {
                backgroundColor: '#04c0dc',
                height: 60,
                padding: 0,
                alignContent: 'center'
            },
        }}
    >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarLabel: 'Acceuil',
                tabBarIcon: ({color}) =>
                    <Ionicons
                        color={color}
                        size={24}
                        name='home'
                    />
            }}
        />
        <Tab.Screen
            name="Performances"
            component={PerformancesScreen}
            options={{
                tabBarLabel: 'Perfs',
                tabBarIcon: ({color}) =>
                    <Ionicons
                        color={color}
                        size={24}
                        name='analytics-outline'
                    />
            }}
        />
        <Tab.Screen
            name="Planning"
            component={PlanningScreen}
            options={{
                tabBarLabel: 'Plannings',
                tabBarIcon: ({color}) =>
                    <Ionicons
                        color={color}
                        size={24}
                        name='calendar'
                    />
            }}
        />

        <Tab.Screen
            name="Groups"
            component={GroupsScreen}
            options={{
                tabBarLabel: 'Groupes',
                tabBarIcon: ({color}) =>
                    <Ionicons
                        color={color}
                        size={24}
                        name='people-sharp'
                    />
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Bons plans',
                tabBarIcon: ({color}) =>
                    <Ionicons
                        color={color}
                        size={24}
                        name='gift'
                    />
            }}
        />
    </Tab.Navigator>
}

export default UserConnectedMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 50 : 0
    }
})
