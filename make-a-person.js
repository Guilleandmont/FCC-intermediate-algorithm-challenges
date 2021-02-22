'use strict';

//This challenge is different in that it doesn't ask you to create a function. Instead, this challenge
    //asks you to create an object with certain methods. This is my solution using ES6 class syntax.

//We suppose here that firstAndLast is a string of two words.
class Person {
    constructor(firstAndLast) {
        this.getFullName = function () { //The full name becomes what you used to create the object.
            return firstAndLast;
        };

        this.getFirstName = function () {
            return this.getFullName().split(" ")[0]; //Splits full name and takes first element as first name
        };
        this.getLastName = function () {
            return this.getFullName().split(" ")[1]; //Same as above, but takes the last name
        };
        this.setFirstName = function (first) {
            const replace = this.getFullName().replace((/\w+/), first); 
            this.getFullName = function () { //Takes full name and replaces the first word.
                return replace;
            }
        };
        this.setLastName = function (last) {
            const replace = this.getFullName().replace((/\w+$/), last);
            this.getFullName = function () { //Takes full name and replaces the last word.
                return replace;
            }
        }
        this.setFullName = function(firstAndLast) {
            const replace = this.getFullName().replace((/.+/), firstAndLast);
            this.getFullName = function () {
                return replace;
            }
        }
    }
}


const bob = new Person('Bob Ross');
bob.setFullName("Haskell Curry");
console.log(bob.getFirstName());
//outputs 'Haskell'