import * as React from 'react';
import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreenApp from "./screens/HomeScreenApp";
import {Provider} from "react-redux";
import {EMPTY_USER, store} from "./store";
import {IsAuthContextProvider} from "./store/context/isAuth-context";
import AuthScreen from "./screens/AuthScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";


const App = () => {
    const [user, setUser] = useState(EMPTY_USER);
    useEffect(() => {
        const fetchUser = async () => {
            const user = await AsyncStorage.getItem('user');
            if (user) {
                setUser(JSON.parse(user));
            }
        }

        fetchUser();
    }, []);


    return (
        <Provider store={store}>
            <IsAuthContextProvider>
                <NavigationContainer>
                    {user.isAuth && <HomeScreenApp/>}
                    {!user.isAuth && <AuthScreen/>}
                </NavigationContainer>
            </IsAuthContextProvider>
        </Provider>
    );
}

export default App;
