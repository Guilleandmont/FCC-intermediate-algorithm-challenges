'use strict';

//Input: a string with letters representing the nitrogenous bases in DNA.
//Output: an array with each base pair inside another array.

//This function takes a letter (a base) and returns the corresponding nitrogenous base.
function pairBases(base) {
    switch(base){
        case "C":
            return "G";
        case "G":
            return "C";
        case "A":
            return "T";
        case "T":
            return "A";
    }
}

//Use split to separate into individual letters, use map to put each input letter inside another array with
    //its corresponding base.
function pairElement(str) {
    return str.split("").map(item => [item, pairBases(item)]);
}
  
console.log(pairElement("TTGAG"));
//output: [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]