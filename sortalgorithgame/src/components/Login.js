import React from "react";
import '../styles/Home.css';

export default function Login() {
    return (
        <div className="center">
            <form action="">
            <label>Username</label><br></br>
                <input type="text" id="username" name="username"></input><br></br>
                <label>Password</label><br></br>
                <input type="text" id="password" name="password"></input><br></br>
                <input type="submit" value="Login"></input>
            </form>
        </div>

    )
}
