import { apiClient } from "./ApiClient"
export const excuteBasicAuthentication = (token)=> apiClient.get(`/basicauth`,{
    headers:{
        Authorization: token
    }
})

export const excuteJWTAuthentication = (username, password)=> 
    apiClient.post(`/authenticate`,{username, password})