import React from "react";
import '../styles/Home.css';

export default function MergeSort() {

    return (
        <div id="mergeSort">
            Test
        </div>
    )


}

// Merges two subarrays of arr[]
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, left, middle, right) {
    var n1 = middle - left + 1;
    var n2 = right - middle;

    // Create temp arrays
    var Left = new Array(n1);
    var Right = new Array(n2);

    // Copy data to temp arrays Left[] and Right[]
    for (var i = 0; i < n1; i++)
        Left[i] = arr[left + i];
    for (var j = 0; j < n2; j++)
        Right[j] = arr[middle + 1 + j];

    // Initial index of first subarray
    var i = 0;
    // Initial index of second subarray
    var j = 0;
    // Initial index of merged subarray
    var k = left;

    // Merge the temp arrays back into arr[l..r]
    while (i < n1 && j < n2) {
        if (Left[i] <= Right[j]) {
            arr[k] = Left[i];
            i++;
        }
        else {
            arr[k] = Right[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of Left[], if there are any
    while (i < n1) {
        arr[k] = Left[i];
        i++;
        k++;
    }

    // Copy the remaining elements of Right[], if there are any
    while (j < n2) {
        arr[k] = Right[j];
        j++;
        k++;
    }
}

var step = 1;
//mergeSort function to sort array
function mergeSort(arr, left, right) {

    if (left >= right) {
        return; //returns recursively
    }
    var middle = left + parseInt((right - left) / 2);

    console.log("Step: " + step);
    for (var a = left; a <= middle; a++) {
        console.log(arr[a]);
    }
    step++;
    mergeSort(arr, left, middle);
    console.log("Step: " + step);
    for (var b = middle + 1; b <= right; b++) {
        console.log(arr[b]);
    }
    step++;
    mergeSort(arr, middle + 1, right);
    
    merge(arr, left, middle, right);
    console.log("Step: " + step);
    for (var c = left; c <= right; c++) {
        console.log(arr[c]);
    }
    step++;
}

//create array with random numbers in range
function createArr(size) {
    var arr = [];
    for (var i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 20) + 1);
    }
    return arr;
}

var arr = createArr(10);
var arr_size = 10;

console.log("Array: " + arr);

mergeSort(arr, 0, arr_size - 1);
console.log("Sorted: " + arr);






