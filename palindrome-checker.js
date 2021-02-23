'use strict'

//Input: a string
//Output: true if the given string is a palindrome, false otherwise.

//A palindrome is a word that is spelled the same when reversed.
//The biggest difficulty of this challenge is that the test strings come in variable formats.
//To get over this, we standarize the given string to a specific format before comparing with its reversed
    //form. This format is lowercase, eliminating any non alphanumeric character.

//Assigns toCheck to the formatted string, then assigns the reversed string to result. If toCheck and result
    //are the same, return true
function palindrome(str) {
    const toCheck = str.replace(/\W|_/g, "").toLowerCase();
    const result = toCheck.split("").reverse().join("")
    return (toCheck === result) ? true : false;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
//true