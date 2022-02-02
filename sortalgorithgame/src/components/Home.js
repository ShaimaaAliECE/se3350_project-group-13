import React from "react";
import '../styles/Home.css';

export default function Home() {
    return (
        <div >
            <br></br>
            <div className="ChooseAlgo" >Choose a Sorting Algorithm</div>
            <br></br>
            <a href="/mergeSortLevels"><button className="btnDiv">Merge Sort</button></a>
            <br></br>
            <a href="/levelTwo"><button className="btnDiv">Level 2</button></a>
            <br></br>
            <button className="btnDiv">Level 3</button>
            <br></br>
            <button className="btnDiv">Level 4</button>
            <br></br>
            <button className="btnDiv">Level 5</button>
            <br></br>
            <button className="btnDiv">Custom Level</button>

        </div>

    )
}