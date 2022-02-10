import React from "react";
import '../styles/Navbar.css';


class Navbar extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            auth: false
        }
    }

    componentDidMount(){
        const username = localStorage.getItem('Username');
        if(username){
            this.setState({
                username:username,
                auth:true
            });
        }
    }

    render() {
        return (
            <ul className ="bar">
                <li> <a href="/"><b>Sorting Algorithm Education Game</b></a> </li>
                <li> <a href="/about">About Us</a> </li>
                <li> <a href="/">Sorting Algorithms</a> </li>
                {/* State when authenticated */
                this.state.auth?
                <p className="login-profile-nav">Hello, {this.state.username}</p> :
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