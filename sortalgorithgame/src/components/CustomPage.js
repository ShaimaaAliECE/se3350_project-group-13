import React from "react";
import '../styles/input.css';
import Mergesort_input from "./Mergesort_input";

const input = [];
let i;

function CustomPage() {
    return (
        <form action="/mergeSort-levels-level-custom">
            <label for="len">Length of the list:</label>
            <br></br>
            <input type="text" name="len" autoComplete="off"></input>
            <br></br>
            <label for="min">Minimum value:</label>
            <br></br>
            <input type="text" name="min" autoComplete="off"></input>
            <br></br>
            <label for="max">Maximum value:</label>
            <br></br>
            <input type="text" name="max" autoComplete="off"></input>
            <br></br>
            <input type="submit" />
        </form>
    );
}

export default CustomPage;
