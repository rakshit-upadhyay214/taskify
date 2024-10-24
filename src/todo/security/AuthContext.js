import { createContext, useState, useContext } from "react";
import { excuteJWTAuthentication } from "../api/AuthenticationService";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext();
export const useAuth=()=> useContext(AuthContext); 



export default function AuthProvider({children}){
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [user, setUsername] = useState()
    const [token, setToken] = useState()

    // function login(username, password){
    //     console.log("Form submitted")
    //     if(username==='Jonas' && password==='12345'){
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     }else{
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    // }
    // async function login(username, password){
    //     const baToken= 'Basic '+ window.btoa(username + ':' + password)
    //     try{
    //         const response = await excuteBasicAuthentication(baToken)
    //         if(response.status===200){
    //             setAuthenticated(true)
    //             setUsername(username)
    //             console.log(baToken)
    //             setToken(baToken)
    //             apiClient.interceptors.request.use(
    //                 (config)=>{
    //                     console.log("intercepting and adding token")
    //                     config.headers.Authorization = baToken
    //                     return config
    //                 }
    //             )
    //             return true
    //         }else{
    //             logout()
    //             return false
    //         }
    //     }
    //     catch(error){
    //         logout()
    //         return false
    //     }
    // }

    async function login(username, password){
        try{
            const response = await excuteJWTAuthentication(username, password)
            if(response.status===200){
                const jwtToken = 'Bearer ' + response.data.token
                setAuthenticated(true)
                setUsername(username)
                setToken(jwtToken)

                apiClient.interceptors.request.use(
                    (config)=>{
                        console.log("intercepting and adding token")
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )
                return true
            }else{
                logout()
                return false
            }
        }
        catch(error){
            logout()
            return false
        }
        
    }
    function logout(){
        setAuthenticated(false)
        setUsername(null)
        setToken(null)
    }

    return(
        // this{number,isAuthenticated, setAuthenticated} is an object passed directly.
        <AuthContext.Provider value={{isAuthenticated,setAuthenticated, login, logout, user, token}}> 
            {children}
        </AuthContext.Provider>
    )
}