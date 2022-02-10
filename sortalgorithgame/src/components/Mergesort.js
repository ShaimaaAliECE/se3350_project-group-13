import React from 'react';
import '../styles/Mergesort.css';
//array constraints
const min = 1;
const max = 20;
const len = 10;
//randomly generates array
function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [...arr, ...left, ...right]
}


let stepsarr = [];

function mergeSort(array, depth = 0) {
    const half = array.length / 2

    // Base case or terminating case
    
    if (array.length < 2) {
        return array
    }

    const left = array.splice(0, half)
    if (stepsarr[depth] === undefined) {
        stepsarr[depth] = [];
    }
    
    stepsarr[depth].push([...left])
    stepsarr[depth].push([...array])

    let merged = merge(mergeSort(left, depth + 1), mergeSort(array, depth + 1));


    if (stepsarr[8 -depth] === undefined) {
        stepsarr[ 8 -depth] = [];
    }
    stepsarr[8 -depth].push([...merged]);
    return merged;
}


const arrayRandomGenerate = Array.from({ length: len }, () => Math.floor((Math.random() * (max + 1)) + min));
class Mergesort extends React.Component {

    componentDidMount() {
    }

    render() {
        mergeSort([1,5,2,3,5, 2,5,6 , 7])

        console.log(stepsarr)

        return (
            <div className="mergesort-container">
                <br></br>
                <Steps numbers={stepsarr} />
            </div>
        );
    }
}

function Steps(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <SubStep numbers={number}/>
    );
    return (
        <div>{listItems}</div>
    )
}

function SubStep(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <Elements numbers={number}/>
    );
    return (
        <div className='elements-container' >{listItems}</div>
    )
}

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