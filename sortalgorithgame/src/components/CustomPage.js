import React from "react";
import '../styles/Mergesort.css';
import Mergesort_input from "./Mergesort_input";

const input = [];
let i;

function CustomPage() {
    function getInputs() {
        let inputs = document.querySelectorAll("input");
        for (i of inputs){
            input[i] = inputs;
        }
        //Mergesort_input();
    }

    return (
      <div>
          <br></br>
          <div><label className = 'levelLabels'>Minimum Value:  </label><input type = 'text' id = 'min' className = ''></input></div>
          <div><label className = 'levelLabels'>Maximum Value:  </label><input type = 'text' id = 'max' className = ''></input></div>
          <div><label className = 'levelLabels'>Number of elements:  </label><input type = 'text' id = 'max' className = ''></input></div>
          <button className="submitBtn" id="checkbtn" onClick={getInputs()}>Begin!</button>
      </div>
    );
  }
  
  export default CustomPage;
  