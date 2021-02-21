'use strict';

class Person {
    constructor(firstAndLast) {
        this.getFullName = function () {
            return firstAndLast;
        };

        this.getFirstName = function () {
            return this.getFullName().split(" ")[0];
        };
        this.getLastName = function () {
            return this.getFullName().split(" ")[1];
        };
        this.setFirstName = function (first) {
            const replace = this.getFullName().replace((/\w+/), first);
            this.getFullName = function () {
                return replace;
            }
        };
        this.setLastName = function (last) {
            const replace = this.getFullName().replace((/\w+$/), last);
            this.getFullName = function () {
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