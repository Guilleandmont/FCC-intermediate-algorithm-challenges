'use strict';

//Input: an array with two numbers.
//Output: the smallest common multiple of all the numbers between those in the input, inclusive.

//Fills an array with integers between a minimun and maximum.
function fillArray(min,max){
    const result = [];
    for (let i = min; i <= max; i++){
        result.push(i);
    } return result;
}

//Take minimun and maximum of the array, create an array with all numbers in the range, and use a while loop
    //to check every number until the result is found.
function smallestCommons(arr) {
    const maxValue = arr.reduce((a, b) => Math.max(a, b));
    const minValue = arr.reduce((a, b) => Math.min(a, b));
    const rangeOfNums = fillArray(minValue, maxValue) 
    let common = maxValue;
    let acc = 1
    while (!(rangeOfNums.every(item => common % item  === 0))){
        acc++;
        common = maxValue * acc;
    } 
    return common;
}
  
console.log(smallestCommons([1,23]));

//This takes too long. I guess that's just the nature of the problem, but good maths can probably make this
    //much easier for larger inputs.
//Things to improve:
    //How about using sort instead of max and mix?
    //Is making an array with all numbers necessary?