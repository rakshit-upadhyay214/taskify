import { useNavigate, useParams } from "react-router-dom"
import {retrieveTodoById, updateTodoApi} from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"
import {Formik, Form, fieldset, Field, ErrorMessage} from "formik"
export default function AddTodo(){
    const {id}= useParams()
    const authContext = useAuth()
    const username = authContext.user
    const [description, setDescription]= useState('')
    const [targetDate, settargetDate]= useState('')
    const navigate = useNavigate()
    useEffect(()=>getTodo(),[id])

    function getTodo(){
        retrieveTodoById(username, id)
        .then((response)=> {
            setDescription(response.data.description)
            settargetDate(response.data.targetDate)
        })
        .catch((error)=>console.log(error))
    }

    function onSubmit(values){
        console.log(values)
        const todo={
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: "false"
        }
        console.log(todo)
        updateTodoApi(username, id, todo).then((response)=>navigate("/todos")).catch((error)=>console.log(error))
        
    }

    function validate(values){
        let errors={ }
        if (values.description.length<5){
            errors.description="Description should be of atleast 7 character"
        }
        if(values.targetDate==""){
            errors.targetDate = "Enter a Target date"
        }
        return errors
       
    }
    return(
        <>
            <h1>Enter todo details</h1>
            <div className="container">
                <b>Task ID:</b> {id} <br />
                <b>Username:</b> {username}
                <Formik initialValues={{description, targetDate}} enableReinitialize={true} onSubmit={onSubmit} validate={validate}>
                {
                    (props)=>(
                        <Form>
                            <ErrorMessage name="description" 
                            component="div"
                            className="alert alert-warning">
                            </ErrorMessage>

                            <ErrorMessage name="targetDate" 
                            component="div"
                            className="alert alert-warning">
                            </ErrorMessage>

                            <fieldset>
                                <label htmlFor="description"><b>Description:</b></label>
                                <Field type="text" className="form-control" name="description"></Field>
                            </fieldset>

                            <fieldset>
                                <label htmlFor="targetDate"><b>Target Date:</b></label>
                                <Field type="date" className="form-control" name="targetDate"></Field>
                            </fieldset>

                            <div>
                                <button className="btn btn-success" type="submit">Save</button>
                            </div>
                        </Form>
                    )
                }


                </Formik>
            </div>
        </>
    )
}