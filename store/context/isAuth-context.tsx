import { createContext, useState } from "react";

export const IsAuthContext = createContext({
    isAuth: false
})

export const IsAuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    const setAuthUser = () => setIsAuth(true);

    return <IsAuthContext.Provider value={{ isAuth: isAuth }}>
        {children}
    </IsAuthContext.Provider>
}
