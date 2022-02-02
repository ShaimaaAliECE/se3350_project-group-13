import React from "react";
import '../styles/Home.css';

export default function Home() {
    return(
        <div class="background">
            <br></br>
            <div class="ChooseAlgo">Choose a Sorting Algorithm</div>
            <br></br>
            <a href = "/mergeSort" type = "button">Merge Sort</a>
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
        </div>
        
    )
}