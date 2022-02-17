import Mergesort from "./Mergesort"
import { React, useState } from 'react';
import '../styles/Mergesort.css';
import correctSFX from '../sounds/correct.mp3'
import incorrectSFX from '../sounds/incorrect.mp3'
import stuckSFX from '../sounds/boom.mp3'
import applauseSFX from '../sounds/applause.mp3'

const min = 1;
const max = 20;
const len = 10;
const arrayRandomGenerate = Array.from({length: len}, () => Math.floor((Math.random() * (max))+min));

class Mergesort_Lvl2 extends Mergesort {
    Mergesort_lvl2 (min, max, len, arrayRandomGenerate) {
        this.min = min;
        this.max = max;
        this.len = len;
        this.arrayRandomGenerate = arrayRandomGenerate;
    }
}

// Correct Sound Effect
function correctSound() {
    var cS = new Audio(correctSFX)
    cS.volume = 0.05;
    cS.play();
}

// Incorrect Sound Effect
function incorrectSound() {
    var iS = new Audio(incorrectSFX)
    iS.volume = 0.05;
    iS.play();
}

// Stuck Sound Effect
function stuckSound() {
    var sS = new Audio(stuckSFX)
    sS.volume = 0.05;
    sS.play();
}

// Applause Sound Effect
function applauseSound() {
    var aS = new Audio(applauseSFX)
    aS.volume = 0.05;
    aS.play();
}


export default function MergeSort_Lvl2 (){
    new Mergesort_Lvl2(min, max, len, arrayRandomGenerate);
    const [array, setArray] = useState(arrayRandomGenerate);
    const [steps, setSteps] = useState(0);
    let stepComplete = false;

    function Array(array) {
        return(
            <div>
                {steps === 0 ? 
                <>
                <div>
                    <label className='levelLabels'>
                        Here we have a randomized array.
                        <br></br>
                        Perform the first step for the merge-sort algorithm.
                    </label>
                </div>
                <div className="array">
                {
                    array.map((element, id) => {
                        return (
                            <div className="elements" key={id}>{element}</div>
                        );
                    })
                }
                </div>
                <br></br><br></br>
                <div className="answers">
                    <input type = "text" className = "numField" maxLength={2} id="1idx1"></input>
                    <input type = "text" className = "numField" maxLength={2} id="1idx2"></input>
                    <input type = "text" className = "numField" maxLength={2} id="1idx3"></input>
                    <input type = "text" className = "numField" maxLength={2} id="1idx4"></input>
                    <input type = "text" className = "numField" maxLength={2} id="1idx5"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type = "text" className = "numField" maxLength={2} id="1idx6"></input>
                    <input type = "text" className = "numField" maxLength={2} id="1idx7"></input>
                    <input type = "text" className = "numField" maxLength={2} id="1idx8"></input>
                    <input type = "text" className = "numField" maxLength={2} id="1idx9"></input>
                    <input type = "text" className = "numField" maxLength={2} id="1idx10"></input>
                </div>
                <br></br>
                <div>
                    <button className = "submitBtn" id = "btn" onClick = {check1}>Check</button>
                </div>
                <br></br>
                <div id="incorrect1">
                </div>
                </> : null }
            </div>
            
        )

        // Check if correct
        function check1() {
            let incorrect = 0;
            for (let i = 1 ; i < array.length+1 ; i++) {
                // Gets input values through for loop
                var id = "1idx"+i
                let inputValue = document.getElementById(id).value
                if (inputValue==array[i-1]) {
                    document.getElementById(id).className = "numField"
                }
                // If value is out of place, add one to the incorrect score
                else {
                    document.getElementById(id).className = "numFieldError"
                    console.log("Incorrect.")
                    incorrect++;
                }
            }
            // If flawless, send correct message
            if (incorrect == 0) {
                console.log("Correct.")
                correctSound();
                document.getElementById('incorrect1').innerHTML = "Correct! Move on to the next step."
                // Allows to move to next step
                stepComplete = true;
            }
            // If incorrect, print how many incorrect
            else {
                incorrectSound();
                if (incorrect == 1) {
                    document.getElementById('incorrect1').innerHTML = "You have " + incorrect + " number out of place."
                }
                else {
                    document.getElementById('incorrect1').innerHTML = "You have " + incorrect + " numbers out of place."
                }
            }
        }
    }

    // Split the array in half then store in seperate arrays
    function split(array) {
        // Reference to index 
        let counter = 0;
        // Left array 
        let left = [];
        // Right array 
        let right = [];
        // Half way point of array, if odd length then it rounds up to nearest integer 
        let halfIndex = Math.ceil(array.length / 2);
        // Loop up to the half way point of the array
        while (counter < array.length) {
            // If the array is one element long then just return it
            if (array.length == 1) {
                return array;
            }
            // If reference index is less than half then append element to left array 
            else if (counter < halfIndex) {
                left.push(array[counter]);
            } else {
                // Append element to right if on or passed half way point of array 
                right.push(array[counter]);
            }
            // Increment the counter each time to move it along the array 
            counter++;
        }
        // Return left and right in an object 
        return { left, right };
    }

    // Split array in half 
    function DisplaySplit(array) {
        // Initial array
        let arrayOne = split(array);
        // Split initial array into left and right children
        let arrayOneLeft = arrayOne.left;
        let arrayOneRight = arrayOne.right;
        // Split left child of initial array
        let arrayTwo = split(arrayOneLeft);
        // Left and right child of array
        let arrayTwoLeft = arrayTwo.left;
        let arrayTwoRight = arrayTwo.right;
        // Split right child of initial array
        let arrayThree = split(arrayOneRight);
        // Left and right child of array 
        let arrayThreeLeft = arrayThree.left;
        let arrayThreeRight = arrayThree.right;
        
        return (
            <div className="visual-container">
                { steps === 1 ?
                <>
                <div>
                    <label className='levelLabels'>
                        Perform the next step for the merge-sort algorithm.
                    </label>
                </div>
                <div className="split-container">
                    <div className="array" id="array-split-one">
                        {
                            arrayOneLeft.map((element, id) => {
                                return (
                                    <div className="elements" key={id}>{element}</div>
                                );
                            })
                        }
                    </div>

                    <div className="array" id="array-split-two">
                        {
                            arrayOneRight.map((element, id) => {
                                return (
                                    <div className="elements" key={id}>{element}</div>
                                );
                            })
                        }
                    </div>
                </div>
                <br></br><br></br>
                <div className="answers">
                    <text>&nbsp;&nbsp;</text>
                    <input type = "text" className = "numField" maxLength={2} id ="2idx1"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="2idx2"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="2idx3"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type = "text" className = "numField" maxLength={2} id ="2idx4"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="2idx5"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type = "text" className = "numField" maxLength={2} id ="2idx6"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="2idx7"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="2idx8"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type = "text" className = "numField" maxLength={2} id ="2idx9"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="2idx10"></input>
                </div>
                <br></br>
                <div>
                    <button className = "submitBtn" id = "btn" onClick={check2}>Check</button>
                </div>
                <br></br>
                <div id="incorrect2">
                </div>
                </>
                : null }

                {steps === 2 ?
                <>
                <div>
                    <label className='levelLabels'>
                        Perform the next step for the merge-sort algorithm.
                    </label>
                </div>

                <div className="split-container">
                    <div className="array" id="array-split-one">
                        {
                            arrayTwoLeft.map((element, id) => {
                                return (
                                    <div className="elements" key={id}>{element}</div>
                                );
                            })
                        }
                    </div>

                    <div className="array" id="array-split-two">
                        {
                            arrayTwoRight.map((element, id) => {
                                return (
                                    <div className="elements" key={id}>{element}</div>
                                );
                            })
                        }
                    </div>
                    
                    <div className="array" id="array-split-three">
                        {
                            arrayThreeLeft.map((element, id) => {
                                return (
                                    <div className="elements" key={id}>{element}</div>
                                );
                            })
                        }
                    </div>

                    <div className="array" id="array-split-four">
                        {
                            arrayThreeRight.map((element, id) => {
                                return (
                                    <div className="elements" key={id}>{element}</div>
                                );
                            })
                        }
                    </div>
                </div>
                <br></br><br></br>
                <div className="answers">
                    <text>&nbsp;&nbsp;</text>
                    <input type = "text" className = "numField" maxLength={2} id ="3idx1"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type = "text" className = "numField" maxLength={2} id ="3idx2"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type = "text" className = "numField" maxLength={2} id ="3idx3"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type = "text" className = "numField" maxLength={2} id ="3idx4"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type = "text" className = "numField" maxLength={2} id ="3idx5"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type = "text" className = "numField" maxLength={2} id ="3idx6"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type = "text" className = "numField" maxLength={2} id ="3idx7"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type = "text" className = "numField" maxLength={2} id ="3idx8"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type = "text" className = "numField" maxLength={2} id ="3idx9"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type = "text" className = "numField" maxLength={2} id ="3idx10"></input>
                </div>
                <br></br>
                <div>
                    <button className = "submitBtn" id = "btn" onClick={check3}>Check</button>
                    </div>
                <br></br>
                <div id="incorrect3">
                </div>
                </>
            : null }
            </div>
        );

        // Check if second step is correct
        function check2() {
            let incorrect = 0;
            for (let i = 1 ; i < array.length+1 ; i++) {
                // Gets input values through for loop
                var id = "2idx"+i
                let inputValue = document.getElementById(id).value
                if (inputValue==array[i-1]) {
                    document.getElementById(id).className = "numField"
                }
                // If value is out of place, add one to the incorrect score
                else {
                    document.getElementById(id).className = "numFieldError"
                    console.log("Incorrect.")
                    incorrect++;
                }
            }
            // If flawless, send correct message
            if (incorrect == 0) {
                console.log("Correct.")
                correctSound();
                document.getElementById('incorrect2').innerHTML = "Correct! Move on to the next step."
                // Allows to move to next step
                stepComplete = true;
            }
            // If incorrect, print how many incorrect
            else {
                incorrectSound();
                if (incorrect == 1) {
                    document.getElementById('incorrect2').innerHTML = "You have " + incorrect + " number out of place."
                }
                else {
                    document.getElementById('incorrect2').innerHTML = "You have " + incorrect + " numbers out of place."
                }
            }
        }

        // Check if third step is correct
        function check3() {
            let incorrect = 0;
            for (let i = 1 ; i < array.length+1 ; i++) {
                // Gets input values through for loop
                var id = "3idx"+i
                let inputValue = document.getElementById("3idx"+i).value
                if (inputValue==array[i-1]) {
                    document.getElementById(id).className = "numField"
                }
                // If value is out of place, add one to the incorrect score
                else {
                    document.getElementById(id).className = "numFieldError"
                    console.log("Incorrect.")
                    incorrect++;
                }
            }
            // If flawless, send correct message
            if (incorrect == 0) {
                console.log("Correct.")
                correctSound();
                document.getElementById('incorrect3').innerHTML = "Correct! Move on to the next step."
                // Allows to move to next step
                stepComplete = true;
            }
            // If incorrect, print how many incorrect
            else {
                incorrectSound();
                if (incorrect == 1) {
                    document.getElementById('incorrect3').innerHTML = "You have " + incorrect + " number out of place."
                }
                else {
                    document.getElementById('incorrect3').innerHTML = "You have " + incorrect + " numbers out of place."
                }
            }
        }
    }

    // Merge and sort two arrays
    function mergeSort(elementsOne, elementsTwo) {
        // Merged array 
        let mergedArray = [];
        // Temp array
        let tempArray = [];
        // Concat both arrays 
        tempArray = elementsOne.concat(elementsTwo);
        // Sort merged array
        mergedArray = tempArray.sort(function (a, b) { return a - b });
        // Return sorted and merged array 
        return mergedArray;
    }

    function DisplayMergeSort(array) {
        // Initial split
        let arrayOne = split(array);
        let arrayOneLeft = arrayOne.left;
        let arrayOneRight = arrayOne.right;
        // Second split 
        let arrayTwo = split(arrayOneLeft);
        let arrayTwoLeft = arrayTwo.left;
        let arrayTwoRight = arrayTwo.right;
        // Third split 
        let arrayThree = split(arrayOneRight);
        let arrayThreeLeft = arrayThree.left;
        let arrayThreeRight = arrayThree.right;

        // Right array is sorted 
        let mergeSortedArrayThree = mergeSort(arrayThreeLeft, arrayThreeRight);
        // Left array is sorted 
        let mergeSortedArrayTwo = mergeSort(arrayTwoLeft, arrayTwoRight);
        // Fully sorted array
        let mergeSortedArrayOne = mergeSort(arrayOneLeft, arrayOneRight);
       
        return (
            <div className="sort-container">
                {steps === 3 ?
                <>
                <div>
                    <label className='levelLabels'>
                        Perform the next step for the merge-sort algorithm.
                    </label>
                </div>

                { array.length < 5 ?
                null
                :
                <div className="elements-container">
                    {array.map((element, key) => {
                        return (
                            <div className="elements" id="initial-sort-elements" key={key}>{element}</div>
                        );
                    })}
                </div>
                }
                <br></br>
                <div className="answers">
                    <input type = "text" className = "numField" maxLength={2} id ="4idx1"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="4idx2"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="4idx3"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="4idx4"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="4idx5"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type = "text" className = "numField" maxLength={2} id ="4idx6"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="4idx7"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="4idx8"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="4idx9"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="4idx10"></input>
                </div>
                <br></br>
                <div>
                    <button className = "submitBtn" id = "btn" onClick={check4}>Check</button>
                </div>
                <br></br>
                <div id="incorrect4">
                </div>
                </>
                : null }

                {steps === 4 ?
                <>
                <div>
                    <label className='levelLabels'>
                        Perform the next step for the merge-sort algorithm.
                    </label>
                </div>

                <div className="sorted-array">
                    <div className="inner-array">
                        {mergeSortedArrayTwo.map((element, key) => {
                            return (
                                <div className="elements" key={key}>{element}</div>
                            )
                        })}
                    </div>

                    <div className="inner-array">
                        {mergeSortedArrayThree.map((element, key) => {
                            return (
                                <div className="elements" key={key}>{element}</div>
                            )
                        })}
                    </div>
                </div>
                <br></br><br></br>
                <div className="answers">
                    <input type = "text" className = "numField" maxLength={2} id ="5idx1"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="5idx2"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="5idx3"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="5idx4"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="5idx5"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="5idx6"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="5idx7"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="5idx8"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="5idx9"></input>
                    <input type = "text" className = "numField" maxLength={2} id ="5idx10"></input>
                </div>
                <br></br>
                <div>
                    <button className = "submitBtn" id = "btn" onClick={check5}>Check</button>
                </div>
                <br></br>
                <div id="incorrect5">
                </div>
                </>
                : null}

                {steps === 5 ?
                <>
                <div>
                    <label className='levelLabels'>
                        And just like that, you've succesfully sorted the
                        <br>
                        </br>
                        randomized array using the merge-sort algorithm!
                    </label>
                </div>

                <div className="inner-array">
                    {mergeSortedArrayOne.map((element, key) => {
                        applauseSound();
                        return (
                            <div className="elements" key={key}>{element}</div>
                        )
                    })}
                </div>
                </>
                : null}
            </div>
        )
        
        // Check if fourth step is correct
        function check4() {
            console.log("test")
            let incorrect = 0;
            for (let i = 1 ; i < mergeSortedArrayTwo.length+1 ; i++) {
                // Gets input values through for loop
                var id = "4idx"+i
                let inputValue = document.getElementById(id).value
                if (inputValue==mergeSortedArrayTwo[i-1]) {
                    document.getElementById(id).className = "numField"
                }
                // If value is out of place, add one to the incorrect score
                else {
                    document.getElementById(id).className = "numFieldError"
                    console.log("Incorrect.")
                    incorrect++;
                }
            }
            for (let i = 6 ; i < mergeSortedArrayThree.length+6 ; i++) {
                // Gets input values through for loop
                var id = "4idx"+i
                let inputValue = document.getElementById(id).value
                if (inputValue==mergeSortedArrayThree[i-6]) {
                    document.getElementById(id).className = "numField"
                }
                // If value is out of place, add one to the incorrect score
                else {
                    document.getElementById(id).className = "numFieldError"
                    console.log("Incorrect.")
                    incorrect++;
                }
            }
            // If flawless, send correct message
            if (incorrect == 0) {
                correctSound();
                console.log("Correct.")
                document.getElementById('incorrect4').innerHTML = "Correct! Move on to the next step."
                // Allows to move to next step
                stepComplete = true;
            }
            // If incorrect, print how many incorrect
            else {
                incorrectSound();
                if (incorrect == 1) {
                    document.getElementById('incorrect4').innerHTML = "You have " + incorrect + " number out of place."
                }
                else {
                    document.getElementById('incorrect4').innerHTML = "You have " + incorrect + " numbers out of place."
                }
            }
        }

        // Check if fifth step is correct
        function check5() {
            let incorrect = 0;
            for (let i = 1 ; i < mergeSortedArrayOne.length+1 ; i++) {
                // Gets input values through for loop
                var id = "5idx"+i
                let inputValue = document.getElementById(id).value
                if (inputValue==mergeSortedArrayOne[i-1]) {
                    document.getElementById(id).className = "numField"
                }
                // If value is out of place, add one to the incorrect score
                else {
                    document.getElementById(id).className = "numFieldError"
                    console.log("Incorrect.")
                    incorrect++;
                }
            }
            // If flawless, send correct message
            if (incorrect == 0) {
                console.log("Correct.")
                correctSound();
                document.getElementById('incorrect5').innerHTML = "Correct! Move on to the next step."
                // Allows to move to next step
                stepComplete = true;
            }
            // If incorrect, print how many incorrect
            else {
                incorrectSound();
                if (incorrect == 1) {
                    document.getElementById('incorrect5').innerHTML = "You have " + incorrect + " number out of place."
                }
                else {
                    document.getElementById('incorrect5').innerHTML = "You have " + incorrect + " numbers out of place."
                }
            }
        }
    }

    /* Next button onClick NO RESTRICTION
    function onClickNext(){
        if(steps < 5 && steps >= 0){
            setSteps(steps+1);
        } 
    }
    */

    // Next step ONLY IF current step is completed
    function onClickNext(){
        if(steps < 5 && steps >= 0){
            if (stepComplete==true) {
                setSteps(steps+1);
                stepComplete = false;
            }
            else {
                console.log("Incomplete step")
                stuckSound();
                document.getElementById("incorrect"+(steps+1)).innerHTML = "Not so fast, you must complete this step before moving forward."
            }
        } 
    }

    // Previous button onClick
    function onClickPrev(){
        if(steps >= 1 && steps < 6){
            setSteps(steps - 1);
        }
    }

    return (
    
        <div className="mergesort-container">
            <div className="button-container">
                <button className="prevBtn" onClick={onClickPrev}>previous step</button>
                <button className="nextBtn" onClick={onClickNext}>next step</button>
            </div>
            {Array(array)}
            {DisplaySplit(array)}
            {DisplayMergeSort(array)}
        </div>
    );
}