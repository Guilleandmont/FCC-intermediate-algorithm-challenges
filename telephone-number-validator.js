"use strict";

//Input: a US telephone number as string  .
//Output: true if the string is a valid US telephone number, false otherwise.

//Checks if the first number is 1 (which can only happen if the number includes a country code.).
//Either way, the string is formatted by eliminating spaces and dashes (but not parentheses)
//and a regex is used to check if the format is correct (ten numbers in a row, or three
// numbers inside parentheses followed by exactly seven numbers.).

function telephoneCheck(str) {
    const toCheck = str.replace(/[\s-]/g, "");
    return /^1*\d{10}$|^1*\(\d{3}\)\d{7}$/.test(toCheck);
}

console.log(telephoneCheck("555 555 5555"));
//false

// Some valid formats
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
