import { React, useEffect, useState } from "react";
import '../styles/LevelsPage.css';
import { useHistory } from "react-router-dom";

export default function LevlesPage() {
    // Navigation 
    const history = useHistory();
    // State for verification 
    const [verified, setVerification] = useState();
    // Authentication before routing
    
    useEffect(() => {
        // Retrieve username from local storage 
        const credential = localStorage.getItem('Username');
        // Check if correct credential 
        // If correct then set user to verified
        if (credential) {
            setVerification(true);
        } else {
            // If not signed in then set verification to false 
            setVerification(false);
        }
    });

    // OnClick routing to levels
    const route = (level) => {
        // Holds all level references
        const levelsArray = ['customInput', 'one', 'two', 'three', 'four', 'five'];
        // Concats name 
        let levelName = '/mergeSort-levels-level-' + levelsArray[level];
        //Check if use is verified 
        if (verified) {
            // Directs to level name 
            history.push(levelName);
        } else {
            // If not verified deny access
            alert("Must login");
        }
    };

    return (
        <div className="center">
             <div className="ChooseAlgo" >Merge Sort Levels</div>
            <br></br>
            <a onClick={() => route(1)}><button className="btnDiv">Level 1</button></a>
            <br></br>
            <a onClick={() => route(2)}><button className="btnDiv">Level 2</button></a>
            <br></br>
            <a onClick={() => route(3)}><button className="btnDiv">Level 3</button></a>
            <br></br>
            <a onClick={() => route(4)}><button className="btnDiv">Level 4</button></a>
            <br></br>
            <a onClick={() => route(5)}><button className="btnDiv">Level 5</button></a>
            <br></br>
            <a onClick={() => route(0)}><button className="btnDiv">Custom Level</button></a>
            <br></br>
        </div>
    )
}
