/**
 * Write a function that takes in an array of function and executes 
 * them one by one in left to right manner.
 */

import { useEffect } from "react";

const funcList = [
    () => { console.log("One") },
    () => { console.log("Two") },
    () => { console.log("Three") },
    () => { console.log("Four") },
    () => { console.log("Five") },
    () => { console.log("Six") },
    () => { console.log("Seven") },
    () => { console.log("Eight") },
    () => { console.log("Nine") },
    () => { console.log("Ten") },
];

const myFunc = (funcList) => {
    funcList.map(fn => {
        fn();
    })
}


const Question19 = () => {

    return (
        <div>
            <h3>Question 19</h3>
            <p>Write a function that takes in an array of function and executes them one by one in left to right manner.</p>
            <button
                onClick={() => myFunc(funcList)}
            >
                Execute an Array of functions.
            </button>
        </div>
    )
}

export default Question19