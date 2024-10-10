import { useEffect, useState } from "react"
import retreiveAllTodosOfUser, { deleteTodobyId } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
// import {retreiveTodoById} from "./api/TodoApiService"

export default function TodoList(){
    // const today= new Date()
    // const targetDate= new Date(today.getFullYear(), today.getMonth()+5, today.getDay())

    // const todos= [{id:1, descp: "Learn FullStack development", isDone: false, targetDate:targetDate},
    //                 {id:2, descp: "Learn Critical Thinking", isDone: false, targetDate:targetDate},
    //                 {id:3, descp: "Learn GenAI", isDone: false, targetDate:targetDate}
    // ]

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)
    const authContext = useAuth()
    const username = authContext.user

    useEffect(
        () => refreshTodos(), []
    )
    

    function deleteMessage(){
        setMessage(" Your Todo Deleted Successfully")
    }

    function refreshTodos(){
        retreiveAllTodosOfUser(username)
        .then((response) => {
            console.log(response.data)
            setTodos(response.data)
        })
        .catch((error) => console.log(error))

        // retreiveTodoById('Jonas',1)
        // .then((response) => {
        //         console.log(response.data)
        //         setTodos(response.data)
        //     })
    }

    function deleteTodo(id){
        deleteTodobyId(username, id)
            .then((response)=>{
                deleteMessage()
                refreshTodos()
            })
            .catch((error)=>console.log(error))
    }

    return(
        <>
            <div className="container">
                <h1>Todo List</h1>
                <p>Here is the list of tasks, you have to do.</p>
                {message && <div class="alert alert-warning">{message}</div>}         
                <div>
                    <table className="table">
                        <thead>
                            <tr>                    
                                <th>Description</th>
                                <th>Is Done?</th>
                                <th>Target Date</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map(
                                    todo => (
                                        <tr key={todo.id}>
                                            {/* <td>{todo.id}</td> */}
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td><button type="button" className="btn btn-secondary" onClick={()=>{deleteTodo(todo.id)}}>Delete</button></td>
                                            <td><button type="button" className="btn btn-primary" onClick={()=>{deleteTodo(todo.id)}}>Edit</button></td>
                                        </tr>
                                    )
                                )

                            }
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    )
}