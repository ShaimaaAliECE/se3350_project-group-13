import React, { useState } from 'react';
import axios from "../utils/axios";
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
        console.log(`len: ${props.len} \nmin: ${props.min} \nmax: ${props.max}`)
        let stepsarr = [[Array.from({ length: props.len }, () => Math.floor(Math.random() * (props.max - props.min + 1) + props.min))]]; // generate list of random array

        this.elementSize = {
            width: Math.min((window.innerWidth/ (props.len*2))-2, window.innerWidth / 50),
            fontSize: Math.min(window.innerWidth / (props.len * 4), window.innerWidth / 100),
        }
        this.elementSize.margin = this.elementSize.width/10;
        this.elementSize.width -= this.elementSize.margin*2;
        this.elementSize.height = this.elementSize.width;

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
            stepsarr: stepsarr, // the actual array of elements (the tree)
            lives: 3, //the number of lives the user has
            timer: null,  // timer
            index_i: 0, // i value of input field 
            index_j: 0, // j value of input field
            valueMatrix: [],
            username: localStorage.getItem('Username'),
            level: props.level,
            attempts: 0,
            completed: false,
            completionTime: '0:0:0'
        }
        /*axios.get(`http://localhost:3001/getLevelAttemptsInfo?username=${this.state.username}&level=${this.state.level}`).then((res) => {
            this.setState({attempts: res.data});
        });*/
    }

    // Next button onClick
    onClickNext() {
        // Reset autofill positions when next is clicked 
        this.setState({
            index_i: 0,
            index_j: 0
        });
        
        if (!this.nextStep && this.state.step < this.state.stepsarr.length) { // if you are not permitted
            //say your not
            let resonseLabel = document.getElementById("incorrect")
            resonseLabel.innerHTML = "Not so fast, you must complete this step before moving forward.";
            resonseLabel.style.color = "yellow";
            this.stuckSound();

        }
        if (this.nextStep && this.state.step < this.state.stepsarr.length) { //check if it's not last step
            this.setState({ step: this.state.step + 1 }); //increment steps

            // reset all input values
            let inputs = document.querySelectorAll("input");
            for (let input of inputs) {
                input.value = "";
                input.parentElement.style.backgroundColor = "transparent"
            }
            //reset response label text
            let resonseLabel = document.getElementById("incorrect")
            resonseLabel.innerHTML = "";
            this.nextStep = false;

            // if it is the last step
            if (this.state.step === this.state.stepsarr.length - 1) {
                this.setState({
                    completed: true,
                    completionTime: document.getElementById("time").innerHTML
                }, ()=>this.handleCompletion()); 
                // display congradulations
                this.applauseSound();
                let resonseLabel = document.getElementById("incorrect")
                resonseLabel.innerHTML = "Congratulations!! You have completed this level";
                resonseLabel.style.color = "green";
                
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
                input.parentElement.backgroundColor = "transparent"
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
        steps.push(<Steps numbers={this.state.stepsarr.slice(0, this.state.step)} empty={false} passStyle={this.elementSize} />);
        if (this.state.stepsarr[this.state.step]) { //if there is a next step
            steps.push(<SubStepInput numbers={this.state.stepsarr[this.state.step]} passStyle={this.elementSize} />)
        }

        return (
            <div className="main-container">
                <div className="level-header">
                    <div className="left-container"></div>
                    <div className="button-container">
                        <button className="prevBtn" onClick={this.onClickPrev.bind(this)}>previous step</button>
                        <button className="nextBtn" onClick={this.onClickNext.bind(this)}>next step</button>
                    </div>
                    <div className="lives-container">
                        <div className='elements' id='error0'></div>
                        <div className='elements' id='error1'></div>
                        <div className='elements' id='error2'></div>
                        <div className='element-time' id='time'></div>
                    </div>
                </div>
                <br></br>
                <div className="mergesort-container">
                    <label className="step-container">
                        {steptextArr}
                    </label>

                    <label id="incorrect" className='incorrect-container'></label>
                    {steps}

                    <br></br>
                    <button className="submitBtn" id="checkbtn" onClick={this.checkAnswer.bind(this)}>Check</button>
                </div>
            </div>
        );
    }
    handleCompletion() {
        const lvlInfo = {...this.state };
        //check if inputted values can be inserted in database
        axios.put(`http://35.206.82.164:3001/levelInfo/${this.state.username}`, lvlInfo).then((res) => {
            if (res.data) { 
                console.log("success");
            } 
            else { // if failed to register
                console.log("fail");
            }
        });
    }
    //starts timer when page loads
    componentDidMount() {
        let time = [0, 0, 0]; //time array
        let totalSeconds = 0; //total time
        let timeout = 0;
        this.setState({ timer: setInterval(startTimer, 1000) }); //starts timer in state so that it can be cleared (not sure if necessary)
        setInterval(startTimeout, 1000);
        //startTimer function to set the timer and display it to the user
        function startTimer() {
            ++totalSeconds;
            time[0] = Math.floor(totalSeconds / 3600);
            time[1] = Math.floor((totalSeconds - time[0] * 3600) / 60);
            time[2] = totalSeconds - (time[0] * 3600 + time[1] * 60);
            document.getElementById("time").innerHTML = String(time[0]).padStart(2, '0') + ":" +  String(time[1]).padStart(2, '0') + ":" + String(time[2]).padStart(2, '0');
        }
        function startTimeout() {
            ++timeout;
            if (timeout >= 300) { // 5 minutes = 300 seconds
                window.location.replace("/");
            }
        }
        document.onmousemove = () => {
            timeout = 0;
        }

        document.onkeydown = (e) =>{
            if(e.key === "/"){
                // Fill in function 
                this.fillIn();
            }
            if (e.key === "`") {
                timeout += 290;
                totalSeconds += 290;
            }
        }   
    }

    // Fill in answers at an interval 
    fillIn(){
        // Get element by id 
        let element = document.getElementById(`${this.state.index_i}${this.state.index_j}`);
        // Check next i position to see if another element exists 
        let checkElementi = document.getElementById(`${this.state.index_i+1}${0}`);
        // Check next j position to see if another element exists 
        let checkElementj = document.getElementById(`${this.state.index_i}${this.state.index_j+1}`);
        // If element exists in sequence then write the answer
        if(checkElementj){
           element.value = element.name;
           // Increment j to get next element 
           this.setState({
             index_j: this.state.index_j+1
           }); 
        } else if(checkElementi){
            // If another array exists in the step then go to it and fill it in 
            this.setState({
                index_i: this.state.index_i+1,
                index_j: 0
            }); 
            element.value = element.name;
        } else{
            // Otherwise if no array exists reset i and j position
            this.setState({
                index_i: 0,
                index_j: 0
            });
            element.value = element.name;
        }
    }

    //check that the answer is right or wrong
    checkAnswer() {
        let incorrect = 0; //number of incorrect values
        let inputs = document.querySelectorAll("input"); //get all inputs

        //go through each input
        for (let input of inputs) {
            if (input.value != input.name) { //if it's wrong
                incorrect++;
                input.parentElement.style.backgroundColor = "red"
            } else { //if it's right
                input.parentElement.style.backgroundColor = "green"
            }
        }

        if (incorrect > 0) { //if there was at least one incorrect value
            //display incorrect stuff
            let resonseLabel = document.getElementById("incorrect")
            resonseLabel.innerHTML = "You have " + incorrect + " number(s) out of place.";
            resonseLabel.style.color = "red";
            this.incorrectSound();
            this.checkLives();
        } else { // no incorrect = correct
            //show correct
            let resonseLabel = document.getElementById("incorrect")
            resonseLabel.innerHTML = "Correct!! You may move on";
            resonseLabel.style.color = "green";
            this.correctSound();
            this.nextStep = true;
        }
    }

    checkLives() {
        this.setState({ lives: this.state.lives - 1 }); // decrement lives
        this.setState({ attempts: this.state.attempts + 1 }); //incr attempts
        //show that error was made to user
        let errorNo = JSON.stringify(3 - this.state.lives);
        let errorText = document.getElementById("error" + errorNo);
        errorText.innerHTML = 'X';

        //redirects user if lives are used up
        if (this.state.lives === 1) {
            //stops and can set time variable to store somewhere
            this.setState({ timer: clearInterval(this.state.timer)});
            var time = document.getElementById("time").innerHTML;
            //takes user to a "level failed" page
            var url = window.location.pathname;
            window.localStorage.setItem("url", url);
            window.location.replace("/levelFailed");
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
        <SubStep numbers={number} passStyle={props.passStyle} />
    );
    return (
        <div>{listItems}</div>
    )
}

//shows the substeps
function SubStep(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
        <Elements numbers={number} passStyle={props.passStyle} />
    );
    return (
        <div className='elements-container' >{listItems}</div>
    )
}

//shows the elements (i.e. numbers)
function Elements(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
        <Element number={number} passStyle={props.passStyle} />
    );
    return (
        <div className='substep' style={{ marginLeft: props.passStyle.width / 2, marginRight: props.passStyle.width / 2 }}>{listItems}</div>
    );
}

// the actual individal elements
function Element(props) {
    return (
        <div className='elements' style={props.passStyle}>{props.number.value}</div>
    )
}


//shows the substeps input field
function SubStepInput(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
        <ElementsInput numbers={number} index={index} passStyle={props.passStyle} />
    );
    return (
        <div className='elements-container'>{listItems}</div>
    )
}

//shows the elements input field
function ElementsInput(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
        <ElementInput number={number} id={`${props.index}${index}`} passStyle={props.passStyle} />
    );
    return (
        <div className='substep' style={{ marginLeft: props.passStyle.width / 2, marginRight: props.passStyle.width / 2 }}>{listItems}</div>
    );
}

// the actual individal elements input
function ElementInput(props) {
    return (
        <div className='elements' style={props.passStyle}><input type="text" id={props.id} name={props.number.value} autocomplete="off" style={props.passStyle} /></div>
    )
}

export default Mergesort_input;