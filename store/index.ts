import {
    AnyAction,
    configureStore,
    createSlice,
    Dispatch,
    Store, ThunkAction,
    ThunkDispatch
} from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch} from "react-redux";

export interface User {
    _id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    age: number;
    sex: string;
    height: number;
    weight: number;
    group: number;
    isAuth: boolean;
    isValidated: boolean;
}

export const EMPTY_USER: User = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    age: 0,
    sex: '',
    height: 0,
    weight: 0,
    group: 0,
    isAuth: false,
    isValidated: false
}


const initialState: User = EMPTY_USER;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveEmailAndPassword(state, action) {
            state.email = action.payload.email.toLowerCase();
            state.password = action.payload.password;
        },
        saveFirstAndLastName(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        saveAgeAndDOB(state, action) {
            state.age = action.payload.age;
            state.dateOfBirth = action.payload.dateOfBirth;
        },
        saveSex(state, action) {
            state.sex = action.payload;
        },
        saveGroup(state, action) {
            state.group = action.payload;
        },
        saveBodyData(state, action) {
            state.height = action.payload.height;
            state.weight = action.payload.weight;
            state.isAuth = action.payload.isAuth;
            state._id = action.payload._id;
        },
    }
});

export const userActions = userSlice.actions;

export const store: Store = configureStore({
    reducer:
        {user: userSlice.reducer},
});
