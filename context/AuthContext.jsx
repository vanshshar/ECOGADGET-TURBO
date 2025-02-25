"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

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
    
                setUser(result?.data?.user || null);
            } catch(e) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);


    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export function useUser() {
    return useContext(AuthContext);
}