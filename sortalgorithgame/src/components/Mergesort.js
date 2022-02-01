import {React, useState} from 'react';
import '../styles/Mergesort.css';

export default function Mergesort() {
    // Array
    // let arr = [1, 2, 3, 4, 5];
    const [array, setArray] = useState([20,3,1,50,4]);
    // Step to walkthrough
    const [steps, setSteps] = useState(0);
    // Spawn array 
    function Array(array) {
        return (
            <div className="array">
                {
                    array.map(element => {
                        return (
                            <div className="elements">{element}</div>
                        );
                    })
                }
            </div>
        );
    }

    // Split array in half 
    function splitArray(array){
        let counter = 0;
        let arrayOne = [];
        let arrayTwo = [];
        let halfIndex = Math.ceil(array.length/2);
        while(counter < array.length){
            if(counter<halfIndex){
                arrayOne.push(array[counter]);
            } else {
                arrayTwo.push(array[counter]);
            }
            counter++;
        }

        return (
            <div className="split-container">
                <div className="array" id="array-split-one">
                    {
                        /* Display arrayOne */
                        arrayOne.map(element=>{
                            return (
                                <div className="elements">{element}</div>
                            );
                        })
                    }
                </div>

                <div className="array" id="array-split-two">
                    {
                        /* Display arrayTwo */
                        arrayTwo.map(element=>{
                            return (
                                <div className="elements">{element}</div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    return (
        <div className="mergesort-container">
            {Array(array)}
            {splitArray(array)}
        </div>
    );
}