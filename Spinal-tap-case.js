'use strict';

function spinalCase(str) {
    return str.split(/[\s\W_]|(?=[A-Z])/).map(item => item.toLowerCase()).join("-");
}
  
console.log(spinalCase('AllThe-small Things'));