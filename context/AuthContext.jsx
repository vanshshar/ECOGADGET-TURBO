"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let fetchUser = async () => {
            try{
                const result = await axios.get("http://localhost:4000/user", {
                    withCredentials: true,
                });

                console.log(result.data);
    
                setUser(result?.data?.user);
            } catch(e) {
                setUser(null);
            }
        };

        fetchUser();
    }, []);


    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export function useUser() {
    return useContext(AuthContext);
}