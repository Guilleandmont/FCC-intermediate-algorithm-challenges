'use strict';

//Input: a string with a word
//Output: the string in Pig Latin (if the word starts with a vowel, add "way" to the end. If it starts with
    //consonants move them to the end of the word and add "ay" to the end.)


//This function turns that start with consonants to Pig Latin
function consonants (str) {
    let regex = str.match(/^[^aeiou]+/);
    return str.replace(regex, "") + regex + "ay";
}

//This function checks if the word starts with a vowel. If it does, it adds "way". If it doesn't, 
    //it applies the function "consonants" to the input.
function translatePigLatin(str) {
    return (/^[aeiou]/.test(str)) ? str + "way" : consonants(str);
}
  
console.log(translatePigLatin("rhythm"));
//output: rhythmay