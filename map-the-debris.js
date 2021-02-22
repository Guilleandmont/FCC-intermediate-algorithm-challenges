'use strict';

//Input: an array of of objects with the form {name: 'name', avgAlt: 'number'}
//Output: return an array with the same objects but with the form {name: 'name', orbitalPeriod: 'newNumber'}
  //The orbital period is calculated by Kepler's third law: https://en.wikipedia.org/wiki/Orbital_period#Small_body_orbiting_a_central_body
  //This equation is represented in line 13.

//Assign variables to be used and map the array. Apply a function to each object to add the orbitalPeriod
  //property and assign to it the value in the formula. Then, delete the avgAlt property.
function orbitalPeriod(arr) {
  const  GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(function(item) {
    const result = {...item};
    result.orbitalPeriod = Math.round(2*Math.PI*(Math.sqrt(Math.pow((earthRadius + item.avgAlt), 3)/GM)));
    delete(result.avgAlt);
    return result;
  });
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
// [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]

//To improve:
  //Instead of initializing a new property in each object and deleting avgAlt, how about changing its name?
