"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let fetchUser = async () => {
            try {
                const result = await axios({
                    method: "get",
                    url: "http://localhost:4000/user",
                    withCredentials: true,
                });

                const response = result.data;

                setUser(response?.user);
            } catch (e) {
                setUser(null);
                console.error("Failed to fetch the user: ", e);
            }
        };

        fetchUser();
    }, []);


    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export function useUser() {
    return useContext(AuthContext);
}