import React from 'react';
import '../styles/Mergesort.css';
import stepText from '../json/level1Quicksort.json'

//array constraints
const min = 1;
const max = 20;
const len = 10;

//shows all the quickSort steps

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

// the actual individal elements
function Element(props) {
    return (
        <div substep = {props.substep} step = {props.step} style={{backgroundColor: props.color }} className='elements'>{props.value}</div>
    )
}
class quickSort extends React.Component {

    mergeWindow = 0; // how many substeps we passed in the merge
    left = 0; // the left element index of the merge
    right = 0; // the right element index of the merge

    constructor(props) {
        super(props);
        let stepsarr = [[Array.from({ length: len }, () => Math.floor((Math.random() * (max - min + 1)) + min))]]; // generate list of random array

        this.QuickSort(stepsarr, 0, stepsarr.length - 1); //generate the quickSort array

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
            substep: 0, //what substep you are currently on
            elementstep: 0, //what element step  you are currently on
            stepsarr: stepsarr, // the actual array of elements (the tree)
            currentStep: 1,
        }
    }

    reset(){
        for (let prevStep = 0; prevStep < this.state.step; prevStep++) {
            // Get length of reference array 
            this.state.stepsarr[prevStep].forEach((arr) => {
                arr.forEach((element) => {
                    element.color = 'transparent';
                });
            });
        }
    }
    //holds the array of all the steps


    // Next button onClick
    onClickNext() {
        // Grey out elements that have been used 
        for (let prevStep = 0; prevStep < this.state.step; prevStep++) {
            // Get length of reference array 
            this.state.stepsarr[prevStep].forEach((arr) => {
                if (this.state.step < 5) {
                    arr.forEach((element) => {
                        element.color = 'rgb(63, 63, 63)';
                    });
                } else if (this.state.step >= 5) {
                    arr.forEach((element) => {
                        if (element.color == 'green') {
                            element.color = 'rgb(63, 63, 63)';
                        }
                    });
                }
            });
        }

        if (this.state.step < this.state.stepsarr.length / 2) { //check if the steps are splitting
            if (this.state.step < this.state.stepsarr.length) { //check if it's not last step
                this.setState({ step: this.state.step + 1 }); //increment steps
            }
        } else { // merge steps
            if (this.state.elementstep === this.state.stepsarr[this.state.step][this.state.substep].length - 1) { //check if elements reached end of substep
                if (this.state.substep === this.state.stepsarr[this.state.step].length - 1) { //check if substep reached end of step
                    if (this.state.step < this.state.stepsarr.length) { //check if there is a next step
                        this.setState({ step: this.state.step + 1 }); //increment steps
                        this.setState({ substep: 0 }); //make substeps back to 0
                        this.setState({ elementstep: 0 }); // make element steps back to 0
                    }
                } else { //if there is still substeps left
                    this.setState({ substep: this.state.substep + 1 }); //increment substeps
                    this.setState({ elementstep: 0 }); // make elementsteps back to 0
                }
            } else { //if there is still element steps to go through
                this.setState({ elementstep: this.state.elementstep + 1 }); //increment element steps
            }

            let stepsarr = this.state.stepsarr; // temp value to hold the state

            if (this.state.elementstep == 0 && this.state.substep == 0) { //if this is the first step
                this.mergeWindow = 0; //reset merge window
            }

            //variable to hold left value, right, and current
            let left = stepsarr[this.state.step - 1][this.mergeWindow][this.left]
            let right = stepsarr[this.state.step - 1][this.mergeWindow + 1][this.right]
            let current = stepsarr[this.state.step][this.state.substep][this.state.elementstep]

            // Grey out previous steps
           

            // if there is only one element
            if (stepsarr[this.state.step][this.state.substep].length === 1) {
                left.color = "green"; //make the left green
                this.mergeWindow++; //increment merge window
            } else { //there is more than one element
                if (left?.value === current.value) { //check if the left value is the right one
                    if (left !== undefined) { 
                        left.color = "green"; // make the left green
                    }
                    if (right !== undefined) { 
                        right.color = "red"; //make the right red
                    }
                    this.left++; //increment left
                } else { // means right is the right value
                    if (left !== undefined) {
                        left.color = "red"; //make left red
                    }
                    if (right !== undefined) {
                        right.color = "green"; //make right green
                    }
                    this.right++; //increment right

                }

                //check if that was last step in the substep
                if (this.state.elementstep == stepsarr[this.state.step][this.state.substep].length - 1) {
                    this.mergeWindow += 2; //increment merge window
                    //reset left and right
                    this.left = 0;
                    this.right = 0;
                }
            }
            this.setState({ stepsarr: stepsarr }) //set the steparr to include new colors
        }
             
    }

    // Previous button onClick
    onClickPrev() {
        // Reset all elements to be transparent for consistency 
        this.reset();
        // Grey out boxes of used elements 
        if (this.state.step > 2) {
            for (let prevStep = 0; prevStep < this.state.step-1; prevStep++) {
                this.state.stepsarr[prevStep].forEach((arr) => {
                    
                    if (this.state.step > 0) {
                        arr.forEach((element) => {
                            element.color = 'rgb(63, 63, 63)';
                        });
                    }
                });
            }
        }
        

        if (this.state.step > 1) { //check if there is a previous step
            this.setState({ step: this.state.step - 1 }); // decrement step
            //reset all the substeps and elment steps and merge window and left and right
            this.setState({ substep: 0 });
            this.setState({ elementstep: 0 });
            this.mergeWindow = 0;
            this.left = 0;
            this.right = 0;

            let stepsarr = this.state.stepsarr; // temp to hold changes
            this.setState({ stepsarr: stepsarr }) //update the stepsarr
        } 
    } 

    // render method
    render() {
        let steps = []; //holds the steps and also the next step if it exists
        steps.push(<Steps numbers={this.state.stepsarr.slice(0, this.state.step)} empty={false} />);
        if (this.state.stepsarr[this.state.step]) { //if there is a next step
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

    swap(array, leftIndex, rightIndex){
        var temp = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = temp;
    }

    partition(array, left, right) {
        var pivot   = array[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }
            while (array[j] > pivot) {
                j--;
            }
            if (i <= j) {
                this.swap(array, i, j); //swapping two elements
                i++;
                j--;
            }
        }
        return i;
    }

    //the quickSort algorithm
    QuickSort(array, left, right) {

        var index;

        //iterate through each step
        for (let step of array) {
            let newSubStep = [] //used to build up the substep
            let valid = false; //checks if the substep is valid (i.e. it's not empty, and something was split)

            //iterate through each substep
            for (let substep of array[array.length - 1]) {
                index = this.partition(array, left, right); //index returned from partition
                if (left < index - 1) { //more elements on the left side of the pivot
                    this.QuickSort(array, left, index - 1);
                }
                if (index < right) { //more elements on the right side of the pivot
                    this.QuickSort(array, index, right);
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

            //iterate through each substep
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



export default quickSort;