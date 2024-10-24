import axios from "axios";

// export default function getHelloWorld(){
//     return axios.get("http://localhost:8080/hello-world")
// }
// Another way to write above statement 
const apiClient = axios.create(
    {
        baseURL: "http://localhost:8080"
    }
)

export const getHelloWorld = () => apiClient.get("/hello-world")

export const getHelloPathVariable = (username, token)=> apiClient.get(`/hello-world/path-variable/${username}`,{
    headers:{
        Authorization: token
    }
})
