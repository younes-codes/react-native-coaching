import AsyncStorage from "@react-native-async-storage/async-storage";
import {EMPTY_USER, User} from "../store";

export const fetchUser = async (): Promise<User> => {
    const user = await AsyncStorage.getItem('user');
    if (user) {
        return JSON.parse(user);
    }
    return EMPTY_USER;
}

export const getUsersSortedByGroup = (users: User[]): number[] => {
    const arrayGroup: number[] = [];
    users.forEach((u: User) => {
        arrayGroup.push(u.group!);
    })
    return [...new Set(arrayGroup)].sort();
}
