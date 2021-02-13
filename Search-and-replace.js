'use strict';

//Input: a string, word to be replaced ("before"), and word to replaced with ("after")
//Output: the string, but with "before" replaced by "after"

//This function makes sure the case of "after" is the same as "before".
function useCorrectCase(before, after){
    return before.match(/^[A-Z]/) ? after.charAt(0).toUpperCase() + after.slice(1) 
        :  after.charAt(0).toLowerCase() + after.slice(1); 
}

// splits the string into an array and checks every word. If the word is the input "before", 
    //it's replaced with "after", after being passed into the function useCorrectCase. Lastly,
    //the array is joined into a string.
function myReplace(str, before, after) {
    return str.split(" ")
                .map(item => (item === before) ? useCorrectCase(before, after) : item)
                .join(" ");
}
  
console.log(myReplace("I think we should look up there", "up", "Down"));
//output: I think we should look down there

//What I would change:
    //Don't like the use of map. Could use splice.