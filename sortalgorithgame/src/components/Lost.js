import { React, useEffect, useState } from "react";
import '../styles/LevelsPage.css';
import { useHistory } from "react-router-dom";

export default function LostPage() {
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
            <h1>Level Failed :(</h1>
            <br></br>
            <a onClick={() => route(0)}><button className="btnDiv">Restart</button></a>
            <br></br>
            <a onClick={() => route(1)}><button className="btnDiv">Go back to Levels</button></a>
            <br></br>
            <a onClick={() => route(2)}><button className="btnDiv">Return to Algorithms Page</button></a>
            <br></br>
            <a onClick={() => route(3)}><button className="btnDiv">Quit</button></a>
        </div>
    )
}
