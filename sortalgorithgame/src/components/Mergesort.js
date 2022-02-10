import React from 'react';
import '../styles/Mergesort.css';
//array constraints
const min = 1;
const max = 20;
const len = 10;
//randomly generates array
function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right]
}


let stepsarr = [[[1,2,5,6,6,7,2,2,5,6,7,2]]];
mergeSort();
function mergeSort(array){ 


    //split
    for (let step of stepsarr) {
        let newSubStep = []
        let valid = false;

        for (let substep of stepsarr[stepsarr.length-1]) {
            if (substep.length >= 1) {
                if (substep.length == 1) {
                    newSubStep.push([...substep]);
                } else {
                    valid = true;
                    let half = substep.length/2;
                    let left = substep.slice(0, half);
                    let right = substep.slice(half, substep.length);
            
                    newSubStep.push([...left]);
                    newSubStep.push([...right]);
                }

               
            }
           
        }
    
        if (valid) {
            stepsarr.push(newSubStep);
        }
    }
    
    let stepsarrReverse = [...stepsarr].reverse(); //copy


    let prevstep = [...stepsarr[stepsarr.length-1]];
   // console.log(stepsarr[stepsarr.length-1]);


    for (let step of stepsarrReverse) {

        let num = 0;
        let newSubStep = [];
        for (let substep of step) {
            if (substep.length == prevstep[num].length) {
                newSubStep.push(prevstep[num]);
                num++;
            } else if (substep.length == prevstep[num].length + prevstep[num+1].length) {
                newSubStep.push(merge([...prevstep[num]], [...prevstep[num + 1]]));
                num += 2;
            }
        }

        prevstep = newSubStep;

        stepsarr.push(newSubStep);

    }

    //remove middle elements

    let mid = stepsarr.length/2

    stepsarr.splice(mid-1, 1)
    stepsarr.splice (mid-1, 1);




}

const arrayRandomGenerate = Array.from({ length: len }, () => Math.floor((Math.random() * (max + 1)) + min));
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