import React, { useState } from 'react';
import '../styles/Mergesort.css';
import stepText from '../json/level1.json'

//array constraints
const min = 1;
const max = 20;
const len = 10;

//shows all the mergesort steps

//shows the substeps
function SubStep(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
        <Elements numbers={number} empty={index >= props.substep && props.empty} elementstep={(index == props.substep) ? props.elementstep : 0} />
    );
    return (
        <div className='elements-container' >{listItems}</div>
    )
}

//shows the elements (i.e. numbers)
function Elements(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
        <Element number={number} empty={props.empty} elementstep={props.elementstep} value={(!props.empty || index < props.elementstep) ? number.value : ""} color={number.color} />
    );
    return (
        <div className='substep'>{listItems}</div>
    );
}

function Element(props) {
    return (
        <div style={{ backgroundColor: props.color }} className='elements'>{props.value}</div>
    )
}
class Mergesort extends React.Component {

    mergeWindow = 0;

    left = 0;
    right = 0;

    constructor(props) {
        super(props);
        let stepsarr = [[Array.from({ length: len }, () => Math.floor((Math.random() * (max - min + 1)) + min))]]; // generate list of random array

        this.mergeSort(stepsarr); //generate the mergesort array


        for (let step = 0; step < stepsarr.length; step++) {
            for (let substep = 0; substep < stepsarr[step].length; substep++) {
                stepsarr[step][substep] = stepsarr[step][substep].map((element) => {
                    return ({ value: element, color: "transparent" });
                })
            }
        }
        this.state = {
            step: 1, //what step you are currently on
            substep: 0,
            elementstep: 0,
            stepsarr: stepsarr
        }
    }

    //holds the array of all the steps


    // Next button onClick
    onClickNext() {

        if (this.state.step < this.state.stepsarr.length / 2) {
            if (this.state.step < this.state.stepsarr.length) {
                this.setState({ step: this.state.step + 1 });
            }
        } else {
            if (this.state.elementstep === this.state.stepsarr[this.state.step][this.state.substep].length - 1) {
                if (this.state.substep === this.state.stepsarr[this.state.step].length - 1) {
                    if (this.state.step < this.state.stepsarr.length) {
                        this.setState({ step: this.state.step + 1 });
                        this.setState({ substep: 0 });
                        this.setState({ elementstep: 0 });
                    }
                } else {
                    this.setState({ substep: this.state.substep + 1 });
                    this.setState({ elementstep: 0 });
                }
            } else {
                this.setState({ elementstep: this.state.elementstep + 1 });
            }

            let stepsarr = this.state.stepsarr;

            for (let step = 0; step < stepsarr.length; step++) {
                for (let substep = 0; substep < stepsarr[step].length; substep++) {
                    for (let element = 0; element < stepsarr[step][substep].length; element++) {
                        stepsarr[step][substep][element].color = "transparent";
                    }
                }
            }
            if (this.state.elementstep == 0 && this.state.substep == 0) {
                this.mergeWindow = 0;
            }

            let left = stepsarr[this.state.step - 1][this.mergeWindow][this.left]
            let right = stepsarr[this.state.step - 1][this.mergeWindow + 1][this.right]
            let current = stepsarr[this.state.step][this.state.substep][this.state.elementstep]



            if (stepsarr[this.state.step][this.state.substep].length === 1) {
                left.color = "green";
                this.mergeWindow++;
            } else {
                if (left?.value === current.value) {
                    if (left !== undefined) {
                        left.color = "green";
                    }
                    if (right !== undefined) {
                        right.color = "red";
                    }
                    this.left++;
                } else {
                    if (left !== undefined) {
                        left.color = "red";

                    }
                    if (right !== undefined) {
                        right.color = "green";

                    }
                    this.right++;

                }

                if (this.state.elementstep == stepsarr[this.state.step][this.state.substep].length - 1) {
                    this.mergeWindow += 2;
                    this.left = 0;
                    this.right = 0;
                }
            }

            this.setState({ stepsarr: stepsarr })

        }


    }

    // Previous button onClick
    onClickPrev() {
        if (this.state.step > 1) {
            this.setState({ step: this.state.step - 1});
            this.setState({ substep: 0});
            this.setState({ elementstep: 0});
            this.mergeWindow = 0;
            this.left = 0;
            this.right = 0;

            let stepsarr = this.state.stepsarr;

            for (let step = 0; step < stepsarr.length; step++) {
                for (let substep = 0; substep < stepsarr[step].length; substep++) {
                    for (let element = 0; element < stepsarr[step][substep].length; element++) {
                        stepsarr[step][substep][element].color = "transparent";
                    }
                }
            }

            this.setState({ stepsarr: stepsarr })

        }
    }

    // render method
    render() {
        let steps = [];
        steps.push(<Steps numbers={this.state.stepsarr.slice(0, this.state.step)} empty={false} />);
        if (this.state.stepsarr[this.state.step]) {
            steps.push(<SubStep numbers={this.state.stepsarr[this.state.step]} empty={true} substep={this.state.substep} elementstep={this.state.elementstep} />)
        }

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
                {steps}


            </div>
        );
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
        <SubStep numbers={number} empty={props.empty} substep={props.substep} />
    );
    return (
        <div>{listItems}</div>
    )
}



export default Mergesort;