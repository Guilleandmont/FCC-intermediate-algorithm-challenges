'use strict';

//Input: a collection and a predicate.
//Output: true if the predicate is truthy for every item in the collection. For JS, truthy means that a value
    //is true when coerced into a boolean. The oposite is falsy.

//To check if a value is truthy or falsy, we rely on the NOT operator (!).
//When used with a non-boolean value, ! returns false when that value can be converted to true, i.e. it's 
    //truthy. If we use !!, then we get true if the value is truthy.

//Armed with this knowledge, we can make a function that checks the property pre of every item in the 
    //collection and return true if they are all truthy:
function truthCheck(collection, pre) {
    return collection.every(item => !!item[pre]);
}
  
console.log(truthCheck([{"single": ""}, {"single": "double"}], "single"));
//since "" is falsy, then the function returns false.
//A value is considered truthy if it's not falsy. For a complete list of falsy values, see 
    //https://developer.mozilla.org/en-US/docs/Glossary/Falsy