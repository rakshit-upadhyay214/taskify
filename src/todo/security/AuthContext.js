import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();
export const useAuth=()=> useContext(AuthContext); 
export default function AuthProvider({children}){

    function login(username, password){
        console.log("Form submitted")
        if(username==='user' && password==='12345'){
            setAuthenticated(true)
            return true
        }else{
            setAuthenticated(false)
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
    }


    const [isAuthenticated, setAuthenticated] = useState(false)
    return(
        // this{number,isAuthenticated, setAuthenticated} is an object passed directly.
        <AuthContext.Provider value={{isAuthenticated, login, logout}}> 
            {children}
        </AuthContext.Provider>
    )
}