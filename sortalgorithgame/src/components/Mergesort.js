import { React, useState } from 'react';
import '../styles/Mergesort.css';
//array constraints
const min = 1;
const max = 20;
const len=10;
//randomly generates array
const arrayRandomGenerate = Array.from({length: len}, () => Math.floor((Math.random() * (max+1))+min));
export default function Mergesort() {
    // Array 
    const [array, setArray] = useState(arrayRandomGenerate);
    // Step to walkthrough
    const [steps, setSteps] = useState(0);
    // Spawn initial array 
    function Array(array) {
        return (
            <div className="array">
                {
                    array.map((element, id) => {
                        return (
                            <div className="elements" key={id}>{element}</div>
                        );
                    })
                }
            </div>
        );
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
        if(steps==1){
        return (
            <div className="visual-container">
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
            </div>
        );}
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
        if(steps==2){
        return (
            <div className="sort-container">
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

                <div className="inner-array">
                    {mergeSortedArrayOne.map((element, key) => {
                        return (
                            <div className="elements" key={key}>{element}</div>
                        )
                    })}
                </div>
            </div>
        )}
    }

    return (
        <div className="mergesort-container">
            <br></br>
            <button className="nxtBtnDiv" onClick={()=>{
                steps == 0 ? setSteps(1): setSteps(2);    
            }}>next step</button>
            <br></br>
            {Array(array)}
            {DisplaySplit(array)}
            {DisplayMergeSort(array)}
        </div>
    );
}