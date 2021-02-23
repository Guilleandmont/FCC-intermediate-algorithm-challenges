'use strict';

//Input: a multidimensional array.
//Output: the flattened array.
//Note: we can't use Array.prototype.flat() here.


//The spread operator expands an array, then those contents are concatenated to an empty array.
//The function checks if any item in result is an array. If there is, it calls the steamrolllArray function
    //again. This is repeated until there are no arrays inside result.
function steamrollArray(arr) {
    const result = [].concat(...arr);
    return (result.some(item => Array.isArray(item)) ? steamrollArray(result) : result)
}
  
console.log(steamrollArray([1, [2], [3, [[4]]]]));
//returns [1, 2, 3, 4].