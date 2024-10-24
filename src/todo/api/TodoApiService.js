import {apiClient} from './ApiClient.js'


export default function retreiveAllTodosOfUser(username){
    return (apiClient.get(`/users/${username}/todos`))

}

export const retrieveTodoById= (username, id)=> apiClient.get(`/users/${username}/todos/${id}`)

export const deleteTodobyId= (username, id)=> apiClient.delete(`/users/${username}/todos/${id}`)

export const updateTodoApi = (username, id, todo)=> apiClient.put(`/users/${username}/todos/${id}`,todo)

export const createTodoApi = (username, todo)=> apiClient.post(`/users/${username}/todos`,todo)