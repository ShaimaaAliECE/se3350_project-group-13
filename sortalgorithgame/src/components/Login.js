import React from "react";
import axios from "../utils/axios";
import '../styles/Login.css';
class Login extends React.Component {

    state = {
      failedLogin: false
    };
    //login click event
    handleLogin = (event) => {
      //prevent default action
      event.preventDefault();
  
      //get form data from input fields
      let username = event.target[0].value;
      let password = event.target[1].value
  
      //login logic (verify with server)
      axios.get(`http://35.206.82.164:3001/verifylogin?username=${username}&password=${password}`).then((res) => {
        if (res.data) {
          localStorage.setItem("Username", username);
          
          this.props.history.push('/');
          window.location.reload();
        } 
        else {
          this.setState ({failedLogin: true});
        }
      });
    }
  
    render() {
      return (
        <div className="login-container">
            <div className="login-window">
                <h1>Login</h1>
                <div className="login-window-align">
                    <form action="" onSubmit={this.handleLogin}>
                        {this.state.failedLogin? <h3 style={{ color: 'red' }}>Incorrect username or password</h3> : ""}
                        
                        <input className = "login-input" type="text" id="username" name="username" placeholder="Username"/><br></br>
                        
                        <input className = "login-input" type="password" id="password" name="pass" placeholder="Password"/><br></br>
                        <input className = "login-input" type="submit" value="Login"/>
                    </form>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Login;
  
    
  
