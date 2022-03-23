import {React, useState} from "react";
import axios from "utils/axios";
import '../styles/Login.css';
import {useHistory} from 'react-router-dom';

export default function Login() {
    // States for username and password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    // Routing history
    const history = useHistory();

    // Authenticate function
    function authenticate(username, password){
        // Can sub in code to check with db later 
        if(username === "admin" && password === "admin"){
            return true;
        } else{
            return false;
        }
    }

    // Login function 
    async function login(){
        const auth = await authenticate(username, password);
        if(auth === true){
            localStorage.setItem('Username', username);
            setUsername("");
            setPassword("");
            history.push('/');
            window.location.reload();
        } else{
            alert("Incorrect username/password");
        }
    }

    // Text onChange username function 
    function onChangeUsername(e){
        setUsername(e.target.value);
    }

    // Text onChange password function 
    function onChangePassword(e){
        setPassword(e.target.value);
    }

    return (
        <div className="login-container">
            <div className="login-window">
                <h1>Login</h1>
                <div className="login-window-align">
                    <form action="">
                        <input onChange={onChangeUsername} className = "login-input" type="text" id="username" name="username" placeholder="Username"></input><br></br>
                        <input onChange={onChangePassword} className = "login-input" type="password" id="password" name="password" placeholder="Password"></input><br></br>
                        <input onClick={login} className = "login-input" type="submit" value="Login"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}
