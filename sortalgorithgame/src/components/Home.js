import React from "react";
import '../styles/Home.css';

export default function Home() {
    return (
        <div class ="center">
            <br></br>
            <div className="ChooseAlgo" >Choose a Sorting Algorithm</div>
            <br></br>
            <a href="/mergeSortLevels"><button className="btnDiv">Merge Sort</button></a>
            <br></br>
            <button className="btnDiv">Another Sort</button>
            <br></br>
            <button className="btnDiv">...</button>
        

        </div>

    )
}