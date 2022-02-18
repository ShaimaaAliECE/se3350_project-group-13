import Mergesort from "./Mergesort"
import React from 'react';
import '../styles/Mergesort.css';
import correctSFX from '../sounds/correct.mp3'
import incorrectSFX from '../sounds/incorrect.mp3'
import stuckSFX from '../sounds/boom.mp3'
import applauseSFX from '../sounds/applause.mp3'
import stepText from '../json/level1.json'

const min = 1;
const max = 20;
const len = 10;

class Mergesort_Lvl2 extends React.Component {
    state = {
        step: 1 //what step you are currently on
    };

    stepsarr = [[Array.from({ length: len }, () => Math.floor((Math.random() * (max - min + 1)) + min))]]; // generate list of random array

    componentDidMount() {
        this.mergeSort(this.stepsarr); //generate the mergesort array
    }

    // Previous button onClick
    onClickPrev() {
        if (this.state.step > 1) {
            this.setState({ step: this.state.step - 1 });
        }
    }

    onClickNext() {
        if (this.state.step < this.stepsarr.length) {
            this.setState({ step: this.state.step + 1 });
        }
        else {
            console.log("Incomplete step")
            stuckSound();
            document.getElementById("incorrect" + (this.state.steps + 1)).innerHTML = "Not so fast, you must complete this step before moving forward."
        }
    }

    render() {
        if (this.state.step == 1) {
            return (
                <div className="mergesort-container">
                    <div className="button-container">
                        <button className="prevBtn" onClick={this.onClickPrev.bind(this)}>previous step</button>
                        <button className="nextBtn" onClick={this.onClickNext.bind(this)}>next step</button>
                    </div>
                    <br></br>
                    <label className="step-container">
                        {stepText[this.state.step - 1]?.map((step) => {
                            return (<div>{step}<br></br></div>);
                        })}
                    </label>
                    <Steps numbers={this.stepsarr.slice(0, this.state.step)} />
                    <div>
                    <br></br><br></br>
                    <input type="text" className="numField" maxLength={2} id="1idx1"></input>
                    <input type="text" className="numField" maxLength={2} id="1idx2"></input>
                    <input type="text" className="numField" maxLength={2} id="1idx3"></input>
                    <input type="text" className="numField" maxLength={2} id="1idx4"></input>
                    <input type="text" className="numField" maxLength={2} id="1idx5"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="1idx6"></input>
                    <input type="text" className="numField" maxLength={2} id="1idx7"></input>
                    <input type="text" className="numField" maxLength={2} id="1idx8"></input>
                    <input type="text" className="numField" maxLength={2} id="1idx9"></input>
                    <input type="text" className="numField" maxLength={2} id="1idx10"></input>
                    <br></br><br></br>
                    <div>
                        <button className="submitBtn" id="btn" /*onClick={check1}*/>Check</button>
                    </div><div id="incorrect1"></div>
                    </div>
                </div>
            );
        }
        else if (this.state.step == 2) {
            return (
                <div className="mergesort-container">
                    <div className="button-container">
                        <button className="prevBtn" onClick={this.onClickPrev.bind(this)}>previous step</button>
                        <button className="nextBtn" onClick={this.onClickNext.bind(this)}>next step</button>
                    </div>
                    <br></br>
                    <label className="step-container">
                        {stepText[this.state.step - 1]?.map((step) => {
                            return (<div>{step}<br></br></div>);
                        })}
                    </label>
                    <Steps numbers={this.stepsarr.slice(0, this.state.step)} />
                    <div>
                    <br></br><br></br>
                    <input type="text" className="numField" maxLength={2} id="2idx1"></input>
                    <input type="text" className="numField" maxLength={2} id="2idx2"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="2idx3"></input>
                    <input type="text" className="numField" maxLength={2} id="2idx4"></input>
                    <input type="text" className="numField" maxLength={2} id="2idx5"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="2idx6"></input>
                    <input type="text" className="numField" maxLength={2} id="2idx7"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="2idx8"></input>
                    <input type="text" className="numField" maxLength={2} id="2idx9"></input>
                    <input type="text" className="numField" maxLength={2} id="2idx10"></input>
                    <br></br><br></br>
                    <div>
                        <button className="submitBtn" id="btn" /*onClick={check1}*/>Check</button>
                    </div><div id="incorrect2"></div>
                    </div>
                </div>
            );
        }
        else if (this.state.step == 3) {
            return (
                <div className="mergesort-container">
                    <div className="button-container">
                        <button className="prevBtn" onClick={this.onClickPrev.bind(this)}>previous step</button>
                        <button className="nextBtn" onClick={this.onClickNext.bind(this)}>next step</button>
                    </div>
                    <br></br>
                    <label className="step-container">
                        {stepText[this.state.step - 1]?.map((step) => {
                            return (<div>{step}<br></br></div>);
                        })}
                    </label>
                    <Steps numbers={this.stepsarr.slice(0, this.state.step)} />
                    <div>
                    <br></br><br></br>
                    <input type="text" className="numField" maxLength={2} id="3idx1"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="3idx2"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="3idx3"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="3idx4"></input>
                    <input type="text" className="numField" maxLength={2} id="3idx5"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="3idx6"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="3idx7"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="3idx8"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="3idx9"></input>
                    <input type="text" className="numField" maxLength={2} id="3idx10"></input>
                    <br></br><br></br>
                    <div>
                        <button className="submitBtn" id="btn" /*onClick={check1}*/>Check</button>
                    </div><div id="incorrect3"></div>
                    </div>
                </div>
            );
        }
        else if (this.state.step == 4) {
            return (
                <div className="mergesort-container">
                    <div className="button-container">
                        <button className="prevBtn" onClick={this.onClickPrev.bind(this)}>previous step</button>
                        <button className="nextBtn" onClick={this.onClickNext.bind(this)}>next step</button>
                    </div>
                    <br></br>
                    <label className="step-container">
                        {stepText[this.state.step - 1]?.map((step) => {
                            return (<div>{step}<br></br></div>);
                        })}
                    </label>
                    <Steps numbers={this.stepsarr.slice(0, this.state.step)} />
                    <div>
                    <br></br><br></br>
                    <input type="text" className="numField" maxLength={2} id="4idx1"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="4idx2"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="4idx3"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="4idx4"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="4idx5"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="4idx6"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="4idx7"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="4idx8"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="4idx9"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="4idx10"></input>
                    <br></br><br></br>
                    <div>
                        <button className="submitBtn" id="btn" /*onClick={check1}*/>Check</button>
                    </div><div id="incorrect4"></div>
                    </div>
                </div>
            );
        }
        else if (this.state.step == 5) {
            return (
                <div className="mergesort-container">
                    <div className="button-container">
                        <button className="prevBtn" onClick={this.onClickPrev.bind(this)}>previous step</button>
                        <button className="nextBtn" onClick={this.onClickNext.bind(this)}>next step</button>
                    </div>
                    <br></br>
                    <label className="step-container">
                        {stepText[this.state.step - 1]?.map((step) => {
                            return (<div>{step}<br></br></div>);
                        })}
                    </label>
                    <Steps numbers={this.stepsarr.slice(0, this.state.step)} />
                    <div>
                    <br></br><br></br>
                    <input type="text" className="numField" maxLength={2} id="5idx1"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="5idx2"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="5idx3"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="5idx4"></input>
                    <input type="text" className="numField" maxLength={2} id="5idx5"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="5idx6"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="5idx7"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="5idx8"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="5idx9"></input>
                    <input type="text" className="numField" maxLength={2} id="5idx10"></input>
                    <br></br><br></br>
                    <div>
                        <button className="submitBtn" id="btn" /*onClick={check1}*/>Check</button>
                    </div><div id="incorrect5"></div>
                    </div>
                </div>
            );
        }
        else if (this.state.step == 6) {
            return (
                <div className="mergesort-container">
                    <div className="button-container">
                        <button className="prevBtn" onClick={this.onClickPrev.bind(this)}>previous step</button>
                        <button className="nextBtn" onClick={this.onClickNext.bind(this)}>next step</button>
                    </div>
                    <br></br>
                    <label className="step-container">
                        {stepText[this.state.step - 1]?.map((step) => {
                            return (<div>{step}<br></br></div>);
                        })}
                    </label>
                    <Steps numbers={this.stepsarr.slice(0, this.state.step)} />
                    <div>
                    <br></br><br></br>
                    <input type="text" className="numField" maxLength={2} id="6idx1"></input>
                    <input type="text" className="numField" maxLength={2} id="6idx2"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="6idx3"></input>
                    <input type="text" className="numField" maxLength={2} id="6idx4"></input>
                    <input type="text" className="numField" maxLength={2} id="6idx5"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="6idx6"></input>
                    <input type="text" className="numField" maxLength={2} id="6idx7"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="6idx8"></input>
                    <input type="text" className="numField" maxLength={2} id="6idx9"></input>
                    <input type="text" className="numField" maxLength={2} id="6idx10"></input>
                    <br></br><br></br>
                    <div>
                        <button className="submitBtn" id="btn" /*onClick={check1}*/>Check</button>
                    </div><div id="incorrect6"></div>
                    </div>
                </div>
            );
        }
        else if (this.state.step == 7) {
            return (
                <div className="mergesort-container">
                    <div className="button-container">
                        <button className="prevBtn" onClick={this.onClickPrev.bind(this)}>previous step</button>
                        <button className="nextBtn" onClick={this.onClickNext.bind(this)}>next step</button>
                    </div>
                    <br></br>
                    <label className="step-container">
                        {stepText[this.state.step - 1]?.map((step) => {
                            return (<div>{step}<br></br></div>);
                        })}
                    </label>
                    <Steps numbers={this.stepsarr.slice(0, this.state.step)} />
                    <div>
                    <br></br><br></br>
                    <input type="text" className="numField" maxLength={2} id="7idx1"></input>
                    <input type="text" className="numField" maxLength={2} id="7idx2"></input>
                    <input type="text" className="numField" maxLength={2} id="7idx3"></input>
                    <input type="text" className="numField" maxLength={2} id="7idx4"></input>
                    <input type="text" className="numField" maxLength={2} id="7idx5"></input>
                    <text>&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <input type="text" className="numField" maxLength={2} id="7idx6"></input>
                    <input type="text" className="numField" maxLength={2} id="7idx7"></input>
                    <input type="text" className="numField" maxLength={2} id="7idx8"></input>
                    <input type="text" className="numField" maxLength={2} id="7idx9"></input>
                    <input type="text" className="numField" maxLength={2} id="7idx10"></input>
                    <br></br><br></br>
                    <div>
                        <button className="submitBtn" id="btn" /*onClick={check1}*/>Check</button>
                    </div><div id="incorrect7"></div>
                    </div>
                </div>
            );
        }
        else if (this.state.step == 8) {
            return (
                <div className="mergesort-container">
                    <div className="button-container">
                        <button className="prevBtn" onClick={this.onClickPrev.bind(this)}>previous step</button>
                        <button className="nextBtn" onClick={this.onClickNext.bind(this)}>next step</button>
                    </div>
                    <br></br>
                    <label className="step-container">
                        {stepText[this.state.step - 1]?.map((step) => {
                            return (<div>{step}<br></br></div>);
                        })}
                    </label>
                    <Steps numbers={this.stepsarr.slice(0, this.state.step)} />
                    <div>
                    <br></br><br></br>
                    <input type="text" className="numField" maxLength={2} id="8idx1"></input>
                    <input type="text" className="numField" maxLength={2} id="8idx2"></input>
                    <input type="text" className="numField" maxLength={2} id="8idx3"></input>
                    <input type="text" className="numField" maxLength={2} id="8idx4"></input>
                    <input type="text" className="numField" maxLength={2} id="8idx5"></input>
                    <input type="text" className="numField" maxLength={2} id="8idx6"></input>
                    <input type="text" className="numField" maxLength={2} id="8idx7"></input>
                    <input type="text" className="numField" maxLength={2} id="8idx8"></input>
                    <input type="text" className="numField" maxLength={2} id="8idx9"></input>
                    <input type="text" className="numField" maxLength={2} id="8idx10"></input>
                    <br></br><br></br>
                    <div>
                        <button className="submitBtn" id="btn" /*onClick={check1}*/>Check</button>
                    </div><div id="incorrect8"></div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="mergesort-container">
                    <div className="button-container">
                        <button className="prevBtn" onClick={this.onClickPrev.bind(this)}>previous step</button>
                        <button className="nextBtn" onClick={this.onClickNext.bind(this)}>next step</button>
                    </div>
                    <br></br>
                    <label className="step-container">
                        {stepText[this.state.step - 1]?.map((step) => {
                            return (<div>{step}<br></br></div>);
                        })}
                    </label>
                    <Steps numbers={this.stepsarr.slice(0, this.state.step)} />
                </div>
            );
        }
    }

    //merges two lists
    merge(left, right) {
        let arr = [] //holds merged
        while (left.length && right.length) { //there is elements left
            if (left[0] < right[0]) { //if left is smaller
                arr.push(left.shift()) //push left
            } else { //right is smaller
                arr.push(right.shift()) //push right
            }
        }
        return [...arr, ...left, ...right] //return sorted arrray as well as any left overs if one ran out first.
    }

    // Correct Sound Effect
    correctSound() {
        var cS = new Audio(correctSFX)
        cS.volume = 0.05;
        cS.play();
    }

    // Incorrect Sound Effect
    incorrectSound() {
        var iS = new Audio(incorrectSFX)
        iS.volume = 0.05;
        iS.play();
    }

    // Applause Sound Effect
    applauseSound() {
        var aS = new Audio(applauseSFX)
        aS.volume = 0.05;
        aS.play();
    }

    //the mergesort algorithm
    mergeSort(array) {

        //split

        //iterate through each step
        for (let step of array) {
            let newSubStep = [] //used to build up the substep
            let valid = false; //checks if the substep is valid (i.e. it's not empty, and something was split)

            //iterate through each substep
            for (let substep of array[array.length - 1]) {
                if (substep.length >= 1) { //if the substep has more than one element (i.e. should be split)
                    if (substep.length === 1) { //boundary case where the length is one we don't want to split but we still want to show it
                        newSubStep.push([...substep]); //add it
                    } else { //it should be split
                        valid = true; //means new elements were split in this step
                        let half = substep.length / 2; //get half
                        let left = substep.slice(0, half); //get left side
                        let right = substep.slice(half, substep.length); //get right side

                        newSubStep.push([...left]); //add the left side
                        newSubStep.push([...right]); //add the right side
                    }
                }
            }

            //if the step did something new
            if (valid) {
                array.push(newSubStep); //push it to the array
            }
        }

        //copy the substeps and reverse it (easier to traverse if for each loop)
        let arrayReverse = [...array].reverse();

        //holds the previous step (in order to merge it in the next step)
        let prevstep = [...array[array.length - 1]];

        //iterate through each step in reverse order
        for (let step of arrayReverse) {

            let num = 0; //this holds how much substeps had been added (used to index next substep to merge)
            let newSubStep = []; //holds the new substep that is merged of the previous substep

            //iterate through ecah substep
            for (let substep of step) {
                if (substep.length === prevstep[num].length) { //check if the length is the same as the required elements
                    newSubStep.push(prevstep[num]); //push that elements only (since it maches)
                    num++; //increment index
                } else if (substep.length === prevstep[num].length + prevstep[num + 1].length) { //check if the next two elements add up to the merged element
                    newSubStep.push(this.merge([...prevstep[num]], [...prevstep[num + 1]])); //merge those two elements
                    num += 2; //increment index
                }
            }

            prevstep = newSubStep; //update previous step

            array.push(newSubStep); //push new step
        }
        let mid = array.length / 2

        array.splice(mid - 1, 1);
    }

    /*
    check1() {
        let incorrect = 0;
        for (let i = 1; i < array.length + 1; i++) {
            // Gets input values through for loop
            var id = "1idx" + i
            let inputValue = document.getElementById(id).value
            if (inputValue == array[i - 1]) {
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

    // Check if second step is correct
    check2() {
        let incorrect = 0;
        for (let i = 1; i < array.length + 1; i++) {
            // Gets input values through for loop
            var id = "2idx" + i
            let inputValue = document.getElementById(id).value
            if (inputValue == array[i - 1]) {
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
    check3() {
        let incorrect = 0;
        for (let i = 1; i < array.length + 1; i++) {
            // Gets input values through for loop
            var id = "3idx" + i
            let inputValue = document.getElementById(id).value
            if (inputValue == array[i - 1]) {
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

    check4() {
        console.log("test")
        let incorrect = 0;
        for (let i = 1; i < mergeSortedArrayTwo.length + 1; i++) {
            // Gets input values through for loop
            var id = "4idx" + i
            let inputValue = document.getElementById(id).value
            if (inputValue == mergeSortedArrayTwo[i - 1]) {
                document.getElementById(id).className = "numField"
            }
            // If value is out of place, add one to the incorrect score
            else {
                document.getElementById(id).className = "numFieldError"
                console.log("Incorrect.")
                incorrect++;
            }
        }
        for (let i = 6; i < mergeSortedArrayThree.length + 6; i++) {
            // Gets input values through for loop
            var id = "4idx" + i
            let inputValue = document.getElementById(id).value
            if (inputValue == mergeSortedArrayThree[i - 6]) {
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

    check5() {
        let incorrect = 0;
        for (let i = 1; i < mergeSortedArrayOne.length + 1; i++) {
            // Gets input values through for loop
            var id = "5idx" + i
            let inputValue = document.getElementById("5idx" + i).value
            if (inputValue == mergeSortedArrayOne[i - 1]) {
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
    */
}

//shows the steps
function Steps(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <SubStep numbers={number} />
    );
    return (
        <div>{listItems}</div>
    )
}

//shows the substeps
function SubStep(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <Elements numbers={number} />
    );
    return (
        <div className='elements-container' >{listItems}</div>
    )
}

//shows the elements (i.e. numbers)
function Elements(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <div className='elements'>{number}</div>
    );
    return (
        <div className='substep'>{listItems}</div>
    );
}

// Stuck Sound Effect
function stuckSound() {
    var sS = new Audio(stuckSFX)
    sS.volume = 0.05;
    sS.play();
}

export default Mergesort_Lvl2;

