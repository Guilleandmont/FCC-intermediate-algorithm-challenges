'use strict';

//Input: string with special HTML characters.
//Output: same string but with special characters turned into HTML entities.

// Create an object with the cases we need to consider.
const HTMLElements = {
    '&': "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "\'": "&apos;",
}

//Create a regex for the characters to match.
const regex = /[&<>"']/g

//Take the string and replace the regex match with the corresponding value from the object.
function convertHTML(str) {
    return str.replace(regex, (match) => HTMLElements[match])
}
  
console.log(convertHTML("Dolce & Gabana"));
//expected output: Dolce &amp; Gabana.