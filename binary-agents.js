'use strict';

//Input: a string made of eight digit binary numbers.
//Output: the string translated into English.

//Converts the passed binary number (must be passed as a string) into a base ten number.
function toBinary(str) {
    const baseTenNums = str.split("").map((item, index, array) => item === "1" ? Math.pow(2, (array.length-1-index)) : 0);
    return baseTenNums.reduce((acc, item) => acc + item);
}

//Turns a binary number into a base ten number, which is used as UTF-16 code to return a string.
function toLetters(str) {
    return String.fromCharCode(toBinary(str));
}

//separate binary numbers passed by spaces into an array. Then apply toLetters() to each item in the array.
    //finally, join the letters and return a string.
function binaryAgent(str) {
    return str.split(" ").map(item => toLetters(item)).join("");
}
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
//I love FreeCodeCamp!