import React from "react";
import '../styles/Login.css';

export default function Register() {
    return (
        <div className="login-container">
            <div className="login-window">
            <h1>Register</h1>
                <form action="">
                    <input className = "login-input" type="text" id="email" name="email" placeholder="Email"></input><br></br>
                    <input className = "login-input" type="text" id="username" name="username" placeholder="Username"></input><br></br>
                    <input className = "login-input" type="password" id="password" name="password" placeholder="Password"></input><br></br>
                    <input className = "login-input" type="submit" value="Register"></input>
                </form>
            </div>
        </div>

    )
}