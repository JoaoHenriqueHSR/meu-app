import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"

const AuthContext = createContext();

export function AuthProvider({children}){
    
    async function login(usuario){
        const user={user: usuario};

        await AsyncStorage.setItem("@user", JSON.stringify(user));
    }

    async function logout(){
        await AsyncStorage.removeItem("@user");
    }

    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
}