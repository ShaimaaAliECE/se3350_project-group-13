import React from 'react';
import '../styles/Mergesort.css';
//array constraints
const min = 1;
const max = 20;
const len = 10;
//randomly generates array

//merges two lists
function merge(left, right) {
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

//holds the array to sort (initalized as unordered, call mergesort to fill it up with the mergesort steps)
//first list is the steps (new lines), second is substeps (same lines but with spacers), third is actual numbers.
let stepsarr = [[[1,2,5,6,6,7,2,2,5,6,7,2,4,5,2,2,3,5,6,6,3,32,2,21,2,3,4,65,7,87]]];
mergeSort();

function mergeSort(array){ 


    //split

    //iterate through each step
    for (let step of stepsarr) {
        let newSubStep = [] //used to build up the substep
        let valid = false; //checks if the substep is valid (i.e. it's not empty, and something was split)

        //iterate through each substep
        for (let substep of stepsarr[stepsarr.length-1]) {
            if (substep.length >= 1) { //if the substep has more than one element (i.e. should be split)
                if (substep.length == 1) { //boundary case where the length is one we don't want to split but we still want to show it
                    newSubStep.push([...substep]); //add it
                } else { //it should be split
                    valid = true; //means new elements were split in this step
                    let half = substep.length/2; //get half
                    let left = substep.slice(0, half); //get left side
                    let right = substep.slice(half, substep.length); //get right side
            
                    newSubStep.push([...left]); //add the left side
                    newSubStep.push([...right]); //add the right side
                }

               
            }
           
        }
        
        //if the step did something new
        if (valid) {
            stepsarr.push(newSubStep); //push it to the array
        }
    }
    
    //copy the substeps and reverse it (easier to traverse if for each loop)
    let stepsarrReverse = [...stepsarr].reverse(); 

    //holds the previous step (in order to merge it in the next step)
    let prevstep = [...stepsarr[stepsarr.length-1]];

    //iterate through each step in reverse order
    for (let step of stepsarrReverse) {

        let num = 0; //this holds how much substeps had been added (used to index next substep to merge)
        let newSubStep = []; //holds the new substep that is merged of the previous substep

        //iterate through ecah substep
        for (let substep of step) {
            if (substep.length == prevstep[num].length) { //check if the length is the same as the required elements
                newSubStep.push(prevstep[num]); //push that elements only (since it maches)
                num++; //increment index
            } else if (substep.length == prevstep[num].length + prevstep[num+1].length) { //check if the next two elements add up to the merged element
                newSubStep.push(merge([...prevstep[num]], [...prevstep[num + 1]])); //merge those two elements
                num += 2; //increment index
            }
        }

        prevstep = newSubStep; //update previous step

        stepsarr.push(newSubStep); //push new step


const arrayRandomGenerate = Array.from({ length: len }, () => Math.floor((Math.random() * (max + 1)) + min));

//shows all the mergesort steps
class Mergesort extends React.Component {

    componentDidMount() {
    }

    render() {
       // console.log(stepsarr)

        return (
            <div className="mergesort-container">
                <br></br>
                <Steps numbers={stepsarr} />
            </div>
        );
    }
}

//shows the steps
function Steps(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <SubStep numbers={number}/>
    );
    return (
        <div>{listItems}</div>
    )
}

//shows the substeps
function SubStep(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <Elements numbers={number}/>
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

export default Mergesort;