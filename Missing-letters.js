'use strict';

//Input: a string of lowercase letters in alphabetic order
//Output: shows which letter between the first and last letter of the input is missing. If none is missing,
    //returns undefined

//Build a regex from the first and last letters of the input.
function buildRegex(str){
    return new RegExp(`[${str[0]}-${str[str.length-1]}]+`, `g`);
}

//Match the created regex with letters from a to z. This gives us what the string should look like without 
    //any letters missing. Let's call this our model string
function matchAlphabet(regex){
    return "abcdefghijklmnopqrstuvwxyz".match(regex);
}

//Compare the input with "matchAlphabet". If they are not equal, then iterate through the model string
    //and filter for letters not present in the original array. Then join and return as a string.
function fearNotLetter(str) {
    const regex = buildRegex(str);
    return (str.match(regex)[0] !== matchAlphabet(regex)[0]) 
    ? matchAlphabet(regex)[0]
    .split("")
    .filter(item => !str.includes(item))
    .join() 
    : undefined
}  

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
// undefined

//To do:
    //I think there may be a more straightforward way of doing this. Possibly just using includes and a 
        //simple loop
