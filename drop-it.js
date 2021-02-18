'use strict';

//Input: an array of numbers and a function that returns true or false.
//Output: the array, starting from the first element that returns true to the passed function.

function dropElements(arr, func) {
    const firstTrueIndex = arr.findIndex(func)
    return firstTrueIndex !== -1 ? arr.slice(firstTrueIndex) : []
}
  
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
//[3, 9, 2]