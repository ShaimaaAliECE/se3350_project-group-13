import {React, useState} from "react";
import '../styles/Home.css';
//import bcrypt from 'bcrypt';

export default function Login() {
    // States for username and password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
    async function login(e){
        //e.preventDefault();
        const auth = await authenticate(username, password);
        if(auth === true){
            localStorage.setItem('Username', username);
            setUsername("");
            setPassword("");
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
        <div className="center">
            <form action="">
            <label>Username</label><br></br>
                <input onChange={onChangeUsername} type="text" id="username" name="username"></input><br></br>
                <label>Password</label><br></br>
                <input onChange={onChangePassword} type="password" id="password" name="password"></input><br></br>
                <button onClick={login} type="submit">Login</button>
            </form>
        </div>

    )
}
