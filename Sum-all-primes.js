'use strict';

//Input: a number
//Output: the sum of all the prime numbers lesser than the input.

//Make a function to check if a number is prime. The input must be greater than 1
function checkIfPrime(num) {
    for (let i = 2; i < num; i++){
        if (num % i === 0){
            return false;
        } 
    } return true;
}

//Sum all the prime numbers lesser than lim. 
    //The function uses a while loop to put all prime numbers in an array. Then, using reduce, all the 
    //numbers are summed.
    
function sumPrimes(lim){
    const result = []
    let i = 2;
    while (i <= lim){
        if (checkIfPrime(i)){
            result.push(i);
        }
        i++;
    } return result.reduce((acc, item) => acc + item);
}

console.log(sumPrimes(977))
//output: 73156

//What to improve: 
    //too many loops. 
    //The function to check if a number is prime returns true for 1. 1 should not be considered as prime
        //for this challenge.
