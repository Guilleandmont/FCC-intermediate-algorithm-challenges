'use strict';

//Input: a number.
//Output: the sum of all odd numbers in the Fibonacci sequence less than or equal to the input.

//This function returns the number in the Fibonacci sequence with the given index.
function getFibs(num) {
    if (num <= 1) {
        return 1;
    } else {
        return (getFibs(num-1) + getFibs(num-2));
    }
}

//This function pushes the odd numbers in the Fibonacci sequence in an array while their value is less 
    //less than the input. Then it returns the sum of all the numbers in the array with reduce.
function sumFibs(lim){
    const result = [];
    let i = 0;
    while (getFibs(i) <= lim) {
        if (getFibs(i) % 2 !== 0) {
            result.push(getFibs(i));
        }
        i++;
    }
    return result.reduce((acc, item) => acc + item);
}
  
console.log(sumFibs(75024));
//output: 60960

//What to improve:
    //Too many loops. Recursion doesn't help´.