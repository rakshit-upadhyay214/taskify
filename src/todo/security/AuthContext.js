import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();
export const useAuth=()=> useContext(AuthContext); 



export default function AuthProvider({children}){
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [user, setUsername] = useState()

    function login(username, password){
        console.log("Form submitted")
        if(username==='Jonas' && password==='12345'){
            setAuthenticated(true)
            setUsername(username)
            return true
        }else{
            setAuthenticated(false)
            setUsername(null)
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
        setUsername(null)
    }

    return(
        // this{number,isAuthenticated, setAuthenticated} is an object passed directly.
        <AuthContext.Provider value={{isAuthenticated,setAuthenticated, login, logout, user}}> 
            {children}
        </AuthContext.Provider>
    )
}