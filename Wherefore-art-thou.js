'use strict';

function whatIsInAName(collection, source) { 
  const keys = Object.keys(source);
  const values = Object.values(source);
  const result = collection.filter (item => { 
    for (let i = 0; i < keys.length; i++) {
      if (item[keys[i]] !== values[i]) {
        return false;
      }  
    } return true;
  });
  return result;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })); 
