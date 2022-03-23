import React from "react";
import axios from "utils/axios";
import '../styles/Register.css';

class Register extends React.Component{
    state = {
        id: "",
        username: "",
        pass: "",
        email: "",
        failedRegistser: false
    };

    handleChange = (event) => {

    }

    handleRegister = (event) => {

    }

    render() {
        return(
            <div className="register-container">
            <div className="register-window">
            <h1>Register</h1>
                <form action="">
                    <input className = "register-input" type="text" id="email" name="email" placeholder="Email"></input><br></br>
                    <input className = "register-input" type="text" id="username" name="username" placeholder="Username"></input><br></br>
                    <input className = "register-input" type="password" id="password" name="password" placeholder="Password"></input><br></br>
                    <input className = "register-input" type="submit" value="Register"></input>
                </form>
            </div>
            </div>
        );
    }
}

export default Register;
/**
export default function Register() {
    return (
        <div className="register-container">
            <div className="register-window">
            <h1>Register</h1>
                <form action="">
                    <input className = "register-input" type="text" id="email" name="email" placeholder="Email"></input><br></br>
                    <input className = "register-input" type="text" id="username" name="username" placeholder="Username"></input><br></br>
                    <input className = "register-input" type="password" id="password" name="password" placeholder="Password"></input><br></br>
                    <input className = "register-input" type="submit" value="Register"></input>
                </form>
            </div>
        </div>

    )
} */