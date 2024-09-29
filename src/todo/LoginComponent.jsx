import './Login.css';
import {useState} from 'react';
export default function Login(){

    const [username, setUserName]= useState('user')
    const [password, setPassword]= useState('12345')

    const [showSuccessMessage, setSuccessMessage]= useState(false)
    const [showErrorMessage, setErrorMessage]= useState(false)

    function handleUserChange(event){
        // console.log("Username is to be changed")
        // console.log(event.target.value)
        setUserName(event.target.value)
    }

    
    function handlePasswordChange(event){
        // console.log("Password is to be changed")
        // console.log(event.target.value)
        setPassword(event.target.value)
    }

    function handleSubmit(){
        console.log("Form submitted")
        if(username==='user' && password==='12345'){
            console.log("Success")
            setErrorMessage(false)
            setSuccessMessage(true)
        }else{
            console.log("Failed")
            setErrorMessage(true)
            setSuccessMessage(false)
        }
    }

    function SuccessMessage(){
        if(showSuccessMessage){
            return <div className='successMessage'>Authentication Successful</div>
        }

        return null;    
    }
    function ErrorMessage(){
        if(showErrorMessage){
            return <div className='errorMessage'>Authentication Failed. Please check your credentials.</div>
        }

        return null;    
    }

    return(
        <>
            <div className="login-container">
                <SuccessMessage/>
                <ErrorMessage/>
                {/* <form className="login-form"> */}
                    <div className='input'>
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="user" value={username} onChange={handleUserChange} required></input>
                    </div>
                    <div className='input'>
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="pass" placeholder="enter password" value={password} onChange={handlePasswordChange} required></input>
                    </div>
                    <div>
                        <button className='submitbtn' onClick={handleSubmit}>LOGIN</button>
                    </div>   
                {/* </form> */}
            </div>
        </>
    )
}