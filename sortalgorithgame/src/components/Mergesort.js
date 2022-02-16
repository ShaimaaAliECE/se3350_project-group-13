import React from 'react';
import '../styles/Mergesort.css';
//array constraints
const min = 1;
const max = 20;
const len = 10;
//randomly generates array

const arrayRandomGenerate = Array.from({ length: len }, () => Math.floor((Math.random() * (max - min + 1)) + min));


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

function mergeSort(array) {

    //split

    //iterate through each step
    for (let step of array) {
        let newSubStep = [] //used to build up the substep
        let valid = false; //checks if the substep is valid (i.e. it's not empty, and something was split)

        //iterate through each substep
        for (let substep of array[array.length - 1]) {
            if (substep.length >= 1) { //if the substep has more than one element (i.e. should be split)
                if (substep.length == 1) { //boundary case where the length is one we don't want to split but we still want to show it
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
            if (substep.length == prevstep[num].length) { //check if the length is the same as the required elements
                newSubStep.push(prevstep[num]); //push that elements only (since it maches)
                num++; //increment index
            } else if (substep.length == prevstep[num].length + prevstep[num + 1].length) { //check if the next two elements add up to the merged element
                newSubStep.push(merge([...prevstep[num]], [...prevstep[num + 1]])); //merge those two elements
                num += 2; //increment index
            }
        }

        prevstep = newSubStep; //update previous step

        array.push(newSubStep); //push new step
    }

    let mid = array.length/2

    array.splice(mid-1, 1)
    array.splice (mid-1, 1);
}


//shows all the mergesort steps
class Mergesort extends React.Component {
    state = {
        step: 1
    };

    stepsarr = [[arrayRandomGenerate]];

    componentDidMount() {
        mergeSort(this.stepsarr);
    }

    onClickNext(){
        if(this.state.step < this.stepsarr.length){
            this.setState({step: this.state.step + 1});
        } 
    }

    // Previous button onClick
    onClickPrev(){
        if(this.state.step > 1){
            this.setState({step: this.state.step - 1});
        }
    }

    render() {
        // console.log(stepsarr)
        console.log(this.state.step);

        return (
            <div className="mergesort-container">
                <div className="button-container">
                    <button className="prevBtn" onClick={this.onClickPrev.bind(this)}>previous step</button>
                    <button className="nextBtn" onClick={this.onClickNext.bind(this)}>next step</button>
                 </div>
                <br></br>
                <Steps numbers={this.stepsarr.slice(0, this.state.step)} />
            </div>
        );
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

export default Mergesort;