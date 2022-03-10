import React from "react";
import '../styles/Mergesort.css';
import Mergesort_input from "./Mergesort_input";

const input = [];
let i;

function getInputs() {
    let inputs = document.querySelectorAll("input");
    for (i of inputs){
        input[i] = inputs;
    }
    //Mergesort_input();
}

function CustomPage() {    
    return (
      <div className = 'center'>
          <div><label className = 'levelLabels'>Minimum Value:  </label><input type = 'text' id = 'min' className = ''></input></div>
          <div><label className = 'levelLabels'>Maximum Value:  </label><input type = 'text' id = 'max' className = ''></input></div>
          <div><label className = 'levelLabels'>Number of elements:  </label><input type = 'text' id = 'num' className = ''></input></div>
          <br></br>
          <button className="submitBtn" id="checkbtn" onClick={getInputs()}>Begin!</button>
      </div>
    );
  }
  
  export default CustomPage;
  