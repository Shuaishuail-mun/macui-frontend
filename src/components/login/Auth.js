import React, {createContext, useContext, useState} from "react";


const loginAuth = {
    isAuthenticated: false,
    signin(cb) {
        loginAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        loginAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const authContext = createContext(null);

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

export function useAuth() {
    return useContext(authContext);
}

function useProvideAuth() {
    const [user, setUser] = useState("user");

    const signin = cb => {
        return loginAuth.signin(() => {
            setUser("user");
            cb();
        });
    };

    const signout = cb => {
        return loginAuth.signout(() => {
            setUser(null);
            cb();
        });
    };

    return {
        user,
        signin,
        signout
    };
}
