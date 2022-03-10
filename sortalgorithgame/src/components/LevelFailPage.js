import { React, useEffect, useState } from "react";
import '../styles/LevelFailed.css';
import { useHistory } from "react-router-dom";

export default function LevelFailPage() {
    // Navigation 
    const history = useHistory();

    // OnClick routing to levels
    const route = (option) => {
        // Holds all level references
        const lastLevel = localStorage.getItem('url');
        const lastAlg = lastLevel.split('-')[0] + '-' + lastLevel.split('-')[1];
        let page = '/';
        console.log(lastLevel);
        if (option === 3)
            window.close();
        else {
            if (option === 0)
                page = lastLevel;
            else if (option === 1)
                page = lastAlg;

            history.push(page);
        }
    };

    return (
        <div className="center">
            <div className="ChooseAlgo">Level Failed :(</div>
            <br></br>
            <a onClick={() => route(0)}><button className="failed-btnDiv">Restart</button></a>
            <br></br>
            <a onClick={() => route(1)}><button className="failed-btnDiv">Go Back to Levels</button></a>
            <br></br>
            <a onClick={() => route(2)}><button className="failed-btnDiv">Return to Algorithms Page</button></a>
            <br></br>
            <a onClick={() => route(3)}><button className="failed-btnDiv">Quit</button></a>
        </div>
    )
}
