'use strict';


function consonants (str) {
    let regex = str.match(/^[^aeiou]+/);
    return str.replace(regex, "") + regex + "ay";
}

function translatePigLatin(str) {
    return (/^[aeiou]/.test(str)) ? str + "way" : consonants(str);
}
  
console.log(translatePigLatin("rhythm"));
//output: rhythmay