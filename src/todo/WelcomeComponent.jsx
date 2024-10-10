import { useParams, Link } from "react-router-dom"
import {useState} from 'react'
import {getHelloWorld, getHelloPathVariable} from "./api/HelloApiService";
import { useAuth } from "./security/AuthContext";

export default function Welcome(){
    const authContext = useAuth()
    const username = authContext.user

    console.log("Username should be "+username)

    const [message, setMessage] = useState(null)

    function callRESTAPT(){
        console.log("called")
        getHelloWorld()
            .then((response)=>greetings(response))
            .catch((error)=>console.log(error))
            .finally(()=>console.log("cleanup"))

        getHelloPathVariable(username).then((response)=>greetings(response))
    }


    function greetings(response){
        console.log(response)
        setMessage(response.data.message)
    }

    return (
        <>
            <div className="d-flex flex-column justify-contnet-center align-items-center h-100">
                <h1 className="text-center">Welcome {username}!</h1>
                <div >
                    <p>
                        Let's manage your Todos.
                    </p>
                    <br />
                    <Link to="/todos">Click Here</Link>
                </div>

                <div><button className="btn btn-success" onClick={callRESTAPT}>Call REST API</button></div>
                <div className="text">{message}</div>
            </div>
        </>
    )
}