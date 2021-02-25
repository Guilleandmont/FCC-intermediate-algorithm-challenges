"use strict";

//Input: a string.
//Output: the string decoded by ROT13 (shift every letter 13 letters backwards)

//This function uses character codes to do the shifting. It takes a letter,
//takes the character code of that letter, sums or substracts 13, and returns
//the new character.
//The resulting letter must have a code between 65 and 78.

function shift13(letter) {
    const letterCode = letter.charCodeAt(0);
    return letterCode < 78
        ? String.fromCharCode(letterCode + 13)
        : String.fromCharCode(letterCode - 13);
}

//Turn all letters in the string to uppercase, then use a regex to replace
//the letter with the output of shift13().
function rot13(str) {
    const result = str.toUpperCase();
    return result.replace(/[A-Z]/g, shift13);
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
//THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
