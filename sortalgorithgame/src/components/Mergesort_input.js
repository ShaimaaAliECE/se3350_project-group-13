import React, { useState } from 'react';
import '../styles/Mergesort.css';
import stepText from '../json/level1.json'
import correctSFX from '../sounds/correct.mp3'
import incorrectSFX from '../sounds/incorrect.mp3'
import stuckSFX from '../sounds/boom.mp3'
import applauseSFX from '../sounds/applause.mp3'


//shows all the mergesort steps
class Mergesort_input extends React.Component {

    nextStep = false; // true if you can move to next step

    constructor(props) {
        super(props);
        let stepsarr = [[Array.from({ length: props.len }, () => Math.floor((Math.random() * (props.max - props.min + 1)) + props.min))]]; // generate list of random array

        this.mergeSort(stepsarr); //generate the mergesort array

        //make each element a object with a value and a color
        for (let step = 0; step < stepsarr.length; step++) {
            for (let substep = 0; substep < stepsarr[step].length; substep++) {
                stepsarr[step][substep] = stepsarr[step][substep].map((element) => {
                    return ({ value: element, color: "transparent" });
                })
            }
        }
        this.state = {
            step: 1, //what step you are currently on
            stepsarr: stepsarr // the actual array of elements (the tree)
        }
    }

    //holds the array of all the steps


    // Next button onClick
    onClickNext() {
        if (!this.nextStep && this.state.step < this.state.stepsarr.length) { // if you are not permitted
            //say your not
            let resonseLabel = document.getElementById("incorrect")
            resonseLabel.innerHTML = "Not so fast, you must complete this step before moving forward.";
            resonseLabel.style = "color: yellow";
            this.stuckSound();

        }
        if (this.nextStep && this.state.step < this.state.stepsarr.length) { //check if it's not last step
            this.setState({ step: this.state.step + 1 }); //increment steps

            // reset all input values
            let inputs = document.querySelectorAll("input");
            for (let input of inputs) {
                input.value = "";
                input.parentElement.style = "background-color: transparent"
            }
            //reset response label text
            let resonseLabel = document.getElementById("incorrect")
            resonseLabel.innerHTML = "";
            this.nextStep = false;

            // if it is the last step
            if (this.state.step === this.state.stepsarr.length - 1) {
                // display congradulations
                this.applauseSound();
                let resonseLabel = document.getElementById("incorrect")
                resonseLabel.innerHTML = "Congratulations!! You have completed this level";
                resonseLabel.style = "color: green";
            }
        }
    }

    // Previous button onClick
    onClickPrev() {
        if (this.state.step > 1) { //check if there is a previous step
            this.setState({ step: this.state.step - 1 }); // decrement step

            //reset all the input values
            let inputs = document.querySelectorAll("input");
            for (let input of inputs) {
                input.value = "";
                input.parentElement.style = "background-color: transparent"
            }

            //reset response label text
            let resonseLabel = document.getElementById("incorrect")
            resonseLabel.innerHTML = "";
            this.nextStep = false;
        }

    }

    // render method
    render() {

        //get the step text if it's enabled in the prop
        let steptextArr = <div>Please perform the next step of the algorithm<br></br></div>;
        if (this.props.showSteps) {
            steptextArr = stepText[this.state.step - 1]?.map((step) => {
                return (<div>{step}<br></br></div>);
            })
        }

        let steps = []; //holds the steps and also the next step if it exists
        steps.push(<Steps numbers={this.state.stepsarr.slice(0, this.state.step)} empty={false} />);
        if (this.state.stepsarr[this.state.step]) { //if there is a next step
            steps.push(<SubStepInput numbers={this.state.stepsarr[this.state.step]} />)
        }

        return (
            <div className="mergesort-container">
                <div className="button-container">
                    <button className="prevBtn" onClick={this.onClickPrev.bind(this)}>previous step</button>
                    <button className="nextBtn" onClick={this.onClickNext.bind(this)}>next step</button>
                </div>
                <br></br>
                <label className="step-container">
                    {steptextArr}
                </label>

                <label id="incorrect" className='incorrect-container'></label>
                {steps}

                <br></br>
                <button className="submitBtn" id="checkbtn" onClick={this.checkAnswer.bind(this)}>Check</button>

            </div>
        );
    }

    //check that the answer is right or wrong
    checkAnswer() {
        let incorrect = 0; //number of incorrect values

        let inputs = document.querySelectorAll("input"); //get all inputs

        //go through each input
        for (let input of inputs) {
            if (input.value != input.name) { //if it's wrong
                incorrect++;
                input.parentElement.style = "background-color: red"
            } else { //if it's right
                input.parentElement.style = "background-color: green"
            }
        }

        if (incorrect > 0) { //if there was at least one incorrect value
            //display incorrect stuff
            let resonseLabel = document.getElementById("incorrect")
            resonseLabel.innerHTML = "You have " + incorrect + " number(s) out of place.";
            resonseLabel.style = "color: red";
            this.incorrectSound();
        } else { // no incorrect = correct
            //show correct
            let resonseLabel = document.getElementById("incorrect")
            resonseLabel.innerHTML = "Correct!! You may move on";
            resonseLabel.style = "color: green";
            this.correctSound();
            this.nextStep = true;

        }

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
        aS.volume = 0.20;
        aS.play();
    }

    // Stuck Sound Effect
    stuckSound() {
        var sS = new Audio(stuckSFX)
        sS.volume = 0.05;
        sS.play();
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
    const listItems = numbers.map((number, index) =>
        <Elements numbers={number} />
    );
    return (
        <div className='elements-container' >{listItems}</div>
    )
}

//shows the elements (i.e. numbers)
function Elements(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
        <Element number={number} />
    );
    return (
        <div className='substep'>{listItems}</div>
    );
}

// the actual individal elements
function Element(props) {
    return (
        <div className='elements'>{props.number.value}</div>
    )
}


//shows the substeps input field
function SubStepInput(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
        <ElementsInput numbers={number} index={index} />
    );
    return (
        <div className='elements-container'>{listItems}</div>
    )
}

//shows the elements input field
function ElementsInput(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
        <ElementInput number={number} id={props.index + " " + index} />
    );
    return (
        <div className='substep'>{listItems}</div>
    );
}

// the actual individal elements input
function ElementInput(props) {
    return (
        <div className='elements'><input type="text" id={props.id} name={props.number.value} autocomplete="off"/></div>
    )
}

export default Mergesort_input;