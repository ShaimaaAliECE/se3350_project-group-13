import React from "react";
import axios from "../utils/axios";
import '../styles/Login.css';
import {useHistory} from 'react-router-dom';
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
  
      axios.get(`http://localhost:3001/verifylogin?username=${username}&password=${password}`).then((res) => {
        if (res.data) {
          localStorage.setItem("Username", username);
          localStorage.setItem("userID", res.data.id);
          
          this.props.history.push('/');
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
  
/*export default function Login() {
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
}*/
