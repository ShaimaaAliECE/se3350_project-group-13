import React from "react";
import '../styles/Navbar.css';

// the top navbar
class Navbar extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '', //current logged in
            auth: false // if you are logged in
        }
    }

    componentDidMount(){
        const username = localStorage.getItem('Username'); //check if you are logged in
        if(username){ //if you are
            //set the state
            this.setState({
                username:username,
                auth:true
            });
        }
    }

    logOut(){
        localStorage.clear();
        window.location.reload();
    }

    render() {
        return (
            <ul className ="bar">
                <li> <a href="/"><b>Sorting Algorithm Education Game</b></a> </li>
                <li> <a href="/about">About Us</a> </li>
                <li> <a href="/">Sorting Algorithms</a> </li>
                {/* State when authenticated */
                this.state.auth?
                <li> <a href="/profile">Profile</a></li>:
                <></>
                }
                {/* State when authenticated */
                this.state.auth?
                <li onClick={this.logOut}> <a href="/">Log Out</a></li>:
                <></>
                }
                {/* State when authenticated */
                this.state.auth?
                <p className="login-profile-nav"> Hello, {this.state.username} </p> :
                <>
                    <li className = "right"> <a href="/login">Log In</a> </li>
                    <li className = "right"> <a href="/register">Register</a> </li>
                </>
                }
            </ul>
        )
    }

}


export default Navbar