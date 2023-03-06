import React, { createContext, useEffect, useState } from 'react';
import { IAuthProvider, IContext, IUser } from './types';
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from './utils';

export const AuthContext = createContext<IContext>({} as IContext);

// controla quem fez lo login e logout 
export const AuthProvider = ({ children }: IAuthProvider) => {

    const[user, setUser] = useState<IUser | null>()

    // a nossa aplicação precisa saber que a informação está
    // na local storage, pois vai ser executado quando o provider for montado
    // se o user estiver logado ele seta o user
    useEffect(() => {
        const user = getUserLocalStorage();

        if(user) {
            setUser(user);
        }

    }, [])


    async function authenticate(email: string, password: string) {
        const response = await LoginRequest(email, password);

        const payload = { token: response.token, email };

        setUser(payload);
        setUserLocalStorage(payload);
    }

    function logout() {
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    );

}