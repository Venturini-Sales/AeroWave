import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.find(
                (user) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) setUser(hasUser);
        }
    }, []);

    const signin = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));

        const hasUser = usersStorage?.find((user) => user.email === email);

        if (hasUser) {
            if (hasUser.password === password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ email, token }));
                setUser(hasUser);
                return;
            } else {
                return "Incorrect email or password.";
            }
        } else {
            return "Unregistered user";
        }
    };

    const signup = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));

        const hasUser = usersStorage?.find((user) => user.email === email);

        if (hasUser) {
            return "An account with this email already exists";
        }

        const newUser = [...(usersStorage || []), { email, password }];
        localStorage.setItem("users_db", JSON.stringify(newUser));
        return;
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return (
        <AuthContext.Provider value={{ user, signed: !!user, signin, signup, signout }}>
            {children}
        </AuthContext.Provider>
    );
};