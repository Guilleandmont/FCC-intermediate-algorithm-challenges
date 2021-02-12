'use strict';

//Input: an array with objects (collection )and an object (source).
//Output: array with objects with key-value pairs that correspond to those in the second argument (source).

//Function
function whatIsInAName(collection, source) { 
  const keys = Object.keys(source); 
  const values = Object.values(source); 
  const result = collection.filter (item => { 
    for (let i = 0; i < keys.length; i++) { //Take properties from "keys" and check if the object from "collection" (called "item") has said property. If it has the property, it must be equal to the value from the "values" array  
      if (item[keys[i]] !== values[i]) {
        return false;
      }  
    } return true;
  });
  return result;
}

//Test
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })); 

//What I would change: 
//Change the for loop for a prettier solution.
//Don't declare variables inside the function.