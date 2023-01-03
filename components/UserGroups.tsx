import {ScrollView, StyleSheet, Text, View} from "react-native";
import axios from "axios";
import {useCallback, useEffect, useState} from "react";
import {User} from "../store";
import {getUsersSortedByGroup} from "../utils/fetchUser";
import {URL} from '../utils/http';
import {Colors} from "../utils/colors";
import FlatButton from "./UI/FlatButton";

const UserGroups = () => {
    const [users, setUsers] = useState([]);
    const [groups, setGroups] = useState<number[]>([]);

    const fetchUsersData = useCallback(async () => {
        const response = await axios.get(`${URL}/admin/users`);
        try {
            setUsers(response.data.users);
            const groups = getUsersSortedByGroup(response.data.users);
            setGroups(groups)
            return response.data.users;
        } catch (e) {
            console.log(e)
        }
    }, []);


    useEffect(() => {
        fetchUsersData().then(r => {
        });

    }, []);

    const updateGroup = () => {
        fetchUsersData();
    }


    const getUserFromGroup = (users: User[], group: number) => users.filter(user => user.isValidated && user.group === group);

    return <ScrollView>
        <FlatButton children='Mettre à jour les groupes' themeButton='secondary'
                    onPress={updateGroup}/>
        {groups.length > 0 && groups.map((group) => <View key={group}>
                <View style={styles.groupTitleContainer}>
                    <Text style={styles.groupText}>GROUPE {group}</Text>
                </View>
                {getUserFromGroup(users, group).map((user, i) => <View
                    key={user._id}
                    style={[styles.userContainer, i === getUserFromGroup(users, group).length - 1 ? {borderBottomWidth: 0} : null]}>
                    <Text style={styles.userName}>{user.firstName}</Text>
                </View>)}
            </View>
        )}
    </ScrollView>
}

export default UserGroups;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    groupTitleContainer: {
        alignItems: 'center'
    },
    groupText: {
        textAlign: 'center',
        backgroundColor: Colors.primary500,
        paddingVertical: 18,
        color: '#fff',
        width: '100%',
        fontWeight: 'bold',
        fontSize: 22,
        textTransform: 'uppercase'
    },
    userContainer: {
        paddingVertical: 12,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: Colors.accent600,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    userName: {
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: 'bold'
    },
})
