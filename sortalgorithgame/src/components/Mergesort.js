import {React, useState} from 'react';
import '../styles/Mergesort.css';

export default function Mergesort() {
    // Array
    const [array, setArray] = useState([20,3,1,50,4]);
    // Step to walkthrough
    const [steps, setSteps] = useState(0);
    // Spawn array 
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

    function split(array){
        let counter = 0;
        let left = [];
        let right = [];
        let halfIndex = Math.ceil(array.length/2);
        while(counter < array.length){
            if(array.length == 1){
                return array;
            }
            else if(counter<halfIndex){
                left.push(array[counter]);
            } else {
                right.push(array[counter]);
            }
            counter++;
        }
        return {left, right};
    }

    // Split array in half 
    function Merge(array){
        let arrayOne = split(array);
        let arrayOneLeft = arrayOne.left;
        let arrayOneRight = arrayOne.right;
        
        let arrayTwo = split(arrayOneLeft);
        let arrayTwoLeft = arrayTwo.left;
        let arrayTwoRight = arrayTwo.right;

        let arrayThree = split(arrayOneRight);
        let arrayThreeLeft = arrayThree.left;
        let arrayThreeRight = arrayThree.right;

        return (
            <div className="visual-container">
            <div className="split-container">
                <div className="array" id="array-split-one">
                    {
                        /* Display arrayOne */
                        arrayOneLeft.map((element, id)=>{
                            return (
                                <div className="elements" key={id}>{element}</div>
                            );
                        })
                    }
                </div>

                <div className="array" id="array-split-two">
                    {
                        /* Display arrayTwo */
                        arrayOneRight.map((element, id)=>{
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
                        /* Display arrayOne */
                        arrayTwoLeft.map((element, id)=>{
                            return (
                                <div className="elements" key={id}>{element}</div>
                            );
                        })
                    }
                </div>

                <div className="array" id="array-split-two">
                    {
                        /* Display arrayTwo */
                        arrayTwoRight.map((element, id)=>{
                            return (
                                <div className="elements" key={id}>{element}</div>
                            );
                        })
                    }
                </div> 

                <div className="array" id="array-split-three">
                    {
                        /* Display arrayOne */
                        arrayThreeLeft.map((element, id)=>{
                            return (
                                <div className="elements" key={id}>{element}</div>
                            );
                        })
                    }
                </div>

                <div className="array" id="array-split-four">
                    {
                        /* Display arrayTwo */
                        arrayThreeRight.map((element, id)=>{
                            return (
                                <div className="elements" key={id}>{element}</div>
                            );
                        })
                    }
                </div> 
            </div>
            </div>
        );
    }

    /*

        - Non-recursive merge sort 
        - Seperate splitting function so it can return both arrays 
        - Function to display step by step?

    */

    return (
        <div className="mergesort-container">
            {Array(array)}
            {Merge(array)}
        </div>
    );
}