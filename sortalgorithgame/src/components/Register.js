import React from "react";
import axios from "../utils/axios";
import '../styles/Register.css';

class Register extends React.Component {
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

        //check if inputted values can be inserted in database
        axios.post(`http://35.206.82.164:3001/newUser`, user).then((res) => {
            if (res.data) { // able to register 
                localStorage.setItem("username", username);
                //localStorage.setItem("userID", res.data.id);
                this.props.history.push('/login');
            } 
            else { // if failed to register
                this.setState ({failedRegistser: true});
            }
        });
    }

    render() {
        return(
            <div className="register-container">
            <div className="register-window">
            <h1>Register</h1>
                <form action="" onSubmit={this.handleRegister}>
                    {this.state.failedRegistser? <h3 style={{ color: 'red' }}>Choose another username/Fill required fields</h3> : ""}
                    <input className = "register-input" type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/><br></br>
                    <input className = "register-input" type="text" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/><br></br>
                    <input className = "register-input" type="password" id="password" name="pass" placeholder="Password" value={this.state.pass} onChange={this.handleChange}/><br></br>
                    <input className = "register-input" type="submit" value="Register"/>
                </form>
            </div>
            </div>
        );
    }
}

export default Register;
