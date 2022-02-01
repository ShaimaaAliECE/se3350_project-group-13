import React from "react";
import '../styles/Home.css';

export default function Home() {
    return(
        <body class="background">
            <h1>Home Screen</h1>
            <div class="bar"></div>
            <div>
                <div class="rightnav">
                    <a class="register" href="">Register</a>  
                    <a class="login" href="">Log In</a>
                </div>
                <div class="leftnav">
                    <a class="active" href="home">Sorting Algorithm Education Game</a>
                    <a href="">About Us</a>
                    <a href="">Sorting Algorithms</a>
                </div>
            </div>
            <div class="bar"></div>
            <br></br>
            <div class="ChooseAlgo">Choose a Sorting Algorithm</div>
            <br></br>
            <button class="btnDiv">Merge Sort</button>
            <br></br>
            <button class="btnDiv">Level 2</button>
            <br></br>
            <button class="btnDiv">Level 3</button>
            <br></br>
            <button class="btnDiv">Level 4</button>
            <br></br>
            <button class="btnDiv">Level 5</button>
            <br></br>
            <button class="btnDiv">Level 6</button>
            <br></br>
        </body>
        
    )
}