import './TodoApplication.css';
import {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import { useAuth } from './security/AuthContext';

export default function Login(){
    const navigate= useNavigate();
    const authContext = useAuth();
    const [username, setUserName]= useState('user')
    const [password, setPassword]= useState('12345')

    
    const [showErrorMessage, setErrorMessage]= useState(false)

    
    function handleUserChange(event){
        setUserName(event.target.value)
    }

    
    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    async function handleSubmit(){
        if(await authContext.login(username, password)){
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