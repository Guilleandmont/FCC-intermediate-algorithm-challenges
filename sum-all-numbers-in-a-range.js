"use strict";

//Input: an array with two numbers. The numbers aren't necessarily in order.
//Output: the sum of all numbers in the suplied range, inclusive.

function sumAll(arr) {
    let result = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        result += i;
    }
    return result;
}

console.log(sumAll([1, 4]));
// outputs 10, because 1 + 2 + 3 + 4 = 10

//For future me: try to do this without the for loop!
