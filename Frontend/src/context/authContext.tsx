import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { AuthPayLoad } from "../../../Shared/src/types/payload";

interface AuthContextType {
    token: string | null; 
    user: AuthPayLoad | null; 
    LOGIN: (token: string, userData: AuthPayLoad) => void; 
    LOGOUT: () => void; 
}

const AUTH_CONTEXT = createContext<AuthContextType | undefined>(undefined); 

export const AUTH_PROVIDER: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token")); 
    const [user, setUser] = useState<AuthPayLoad | null>(() => {
        const SAVED_USER = localStorage.getItem("user");
        return SAVED_USER ? JSON.parse(SAVED_USER): null;
    }); 

    const LOGIN = (newToken: string, userData: AuthPayLoad) => { 
        localStorage.setItem("token", newToken); 
        localStorage.setItem("user", JSON.stringify(userData));
        setToken(newToken);
        setUser(userData);
    };

    const LOGOUT = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
    };

    return (
        <AUTH_CONTEXT.Provider value={{ token, user, LOGIN, LOGOUT }}>
            {children}
        </AUTH_CONTEXT.Provider> 
    );
};

export const USE_AUTH = (): AuthContextType => {
    const CONTEXT = useContext(AUTH_CONTEXT); 
    if (!CONTEXT){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return CONTEXT; 
};