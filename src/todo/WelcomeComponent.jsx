import { useParams, Link } from "react-router-dom"
import {useState} from 'react'
import {getHelloWorld, getHelloPathVariable} from "./api/HelloApiService";

export default function Welcome(){
    const {username}=useParams();

    function callRESTAPT(){
        console.log("called")
        getHelloWorld()
            .then((response)=>greetings(response))
            .catch((error)=>console.log(error))
            .finally(()=>console.log("cleanup"))

        getHelloPathVariable("Raju").then((response)=>greetings(response))
    }

    const [message, setMessage] = useState(null)

    function greetings(response){
        console.log(response)
        setMessage(response.data.message)
    }

    return (
        <>
            <div>
                <h1>Welcome {username}!</h1>
                <div>
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