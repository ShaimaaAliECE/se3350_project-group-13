import React from "react";
import '../styles/LevelsPage.css';

export default function LevlesPage() {
    return (
        <div class ="center">
            <br></br>
            <a href="/level-one"><button className="btnDiv">Level 1</button></a>
            <br></br>
            <a href="/level-two"><button className="btnDiv">Level 2</button></a>
            <br></br>
            <a href="/level-three"><button className="btnDiv">Level 3</button></a>
            <br></br>
            <a href="/level-four"><button className="btnDiv">Level 4</button></a>
            <br></br>
            <a href="/level-five"><button className="btnDiv">Level 5</button></a>
            <br></br>
            <a href="/custom-level"><button className="btnDiv">Custom Level</button></a>
            <br></br>
        </div>
    )
}
