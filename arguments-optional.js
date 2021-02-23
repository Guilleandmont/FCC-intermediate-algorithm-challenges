'use strict';

//Input: a number or two numbers
//Output: if the input is just one number, then a function that expects a number and returns the sum of the 
    // original input and the new one. If the input is two numbers, then the sum of these numbers.
    // if any of the given inputs is not a number, return undefined.

function addTogether(a, b = undefined) {
    if (typeof a === "number") {
        if (b === undefined) {
            return function(c) {
                return (typeof a && typeof c === "number") ? a + c : undefined;
            }
        } else if (typeof b === "number") {
            return a + b;
        }
    } else {
        return undefined;
    }
}; 

  
console.log(addTogether(5))
//returns a function
console.log(addTogether(5)(3))
//returns 5 + 3

//What to improve: 
    //The code seems a bit tangled with that many if statements. 
    //The biggest takeaway of this challenge is that you should use Typescript. 


