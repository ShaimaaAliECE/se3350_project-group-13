import React from "react";
import '../styles/Navbar.css';


class Navbar extends React.Component {


    render() {
        return (
            <ul className ="bar">
                <li> <a href="/"><b>Sorting Algorithm Education Game</b></a> </li>
                <li> <a href="/about">About Us</a> </li>
                <li> <a href="/">Sorting Algorithms</a> </li>
                <li className = "right"> <a href="/login">Log In</a> </li>
                <li className = "right"> <a href="/register">Register</a> </li>

            </ul>




        )
    }

}


export default Navbar