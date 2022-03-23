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
        //monitor form input
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value,
        });
    };

    //register click event
    handleRegister = (event) => {
        event.preventDefault();
        //get form data from input fields
        let username = event.target[0].value;
        const user = { ...this.state };

        axios.post(`http://localhost:3001/newUser`, user).then((res) => {
            if (res.data) {
                localStorage.setItem("username", username);
                localStorage.setItem("userID", res.data.id);
                this.props.history.push('/login');
            } 
            else {
                this.setState ({
                    failedRegistser: true
                });
            }
        });
    }

    render() {
        return(
            <div className="register-container">
            <div className="register-window">
            <h1>Register</h1>
                <form className="box register-window" onSubmit={this.handleRegister}>
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