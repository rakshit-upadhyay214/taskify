import axios from "axios";

const apiClient=axios.create(
    {
        baseURL: "http://localhost:8080"
    }
)

export default function retreiveAllTodosOfUser(username){
    return (apiClient.get(`/users/${username}/todos`))

}

export const retreiveTodoById= (username, id)=>apiClient.get(`/users/${username}/todos/${id}`)

export const deleteTodobyId= (username, id)=> apiClient.delete(`/users/${username}/todos/${id}`)