import React from "react";
import '../styles/Login.css';

export default function Login() {
    return (
        <div className="login-container">
            <div className="login-window">
                <h1>Login</h1>
                <div className="login-window-align">
                    <form action="">
                        <input type="text" id="username" name="username" placeholder="Username"></input><br></br>
                        <input type="password" id="password" name="password" placeholder="Password"></input><br></br>
                        <input type="submit" value="Login"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}
