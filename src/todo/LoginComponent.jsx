import './TodoApplication.css';
import {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import { useAuth } from './security/AuthContext';

export default function Login(){

    const [username, setUserName]= useState('user')
    const [password, setPassword]= useState('12345')

    
    const [showErrorMessage, setErrorMessage]= useState(false)

    const navigate= useNavigate();
    const authContext = useAuth();
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
        if(authContext.login(username, password)){
            navigate(`/welcome/${username}`)
        }else{
            authContext.setAuthenticated(false)
            console.log("Failed")
            setErrorMessage(true)
        }
    }

    return(
        <>
            <h1>Login</h1>
            <div className="login-container">
                {/* It is the shortcut way of displaying these messages; Another way can be making different function components for these messages */}
                
                {showErrorMessage && <div className='errorMessage'>Authentication Failed. Please check your credentials.</div>}


                {/* <form className="login-form"> */}
                    <div className='entry'>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="user" value={username} onChange={handleUserChange} required></input>
                    </div>
                    <div className='entry'>
                        <label htmlFor="password">Password:</label>
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