'use strict';

//Input: one or more arrays with numbers
//Output: one array with the numbers of the inputs in order, without duplicates

//Take all the arguments and put them into an array (args). Use reduce to concatenate all elements in this
    //array, and then use filter to check for duplicates.
function uniteUnique(...args) {
    const plainArr = args.reduce((acc, item) => acc.concat(item));
    return plainArr.filter((item, index) => plainArr.indexOf(item) === index);
}
  
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
//returns: [1, 2, 3, 5, 4, 6, 7, 8]