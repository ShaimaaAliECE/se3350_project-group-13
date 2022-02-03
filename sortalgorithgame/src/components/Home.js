import React from "react";
import '../styles/Home.css';

export default function Home() {
    return (
        <div className ="center">
            <br></br>
            <div className="ChooseAlgo" >Choose a Sorting Algorithm</div>
            <br></br>
            <a href="/mergeSort-levels"><button className="btnDiv">Merge Sort</button></a>
            <br></br>
            <button className="btnDiv">Another Sort</button>
            <br></br>
            <button className="btnDiv">...</button>
            <br></br>
        </div>

    )
}
