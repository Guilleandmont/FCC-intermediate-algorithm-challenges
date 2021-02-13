'use strict';

//Input: a string
//Output: the string in spinal case, lowercase separated by dashes (like-this)

//use split to separate words and put them in an array. They should be delimited with a regex to fill
    // all the possible cases 
    //(spaces, dashes, uppercase letters, etc.)
    //The problem with split is that it erases the delimiter. We dont want this if
    //the delimiter is an uppercase letter. That's why we use a look-ahead instead.
//Use map to turn all the strings in the array to lowercase.
//Use join to join the words, with dashes as delimiters.

function spinalCase(str) {
    return str.split(/[\s\W_]|(?=[A-Z])/).map(item => item.toLowerCase()).join("-");
}
  
console.log(spinalCase('AllThe-small Things')); 
//output: all-the-small-things