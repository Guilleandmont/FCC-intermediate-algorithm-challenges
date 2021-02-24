"use strict";

//Input: a number.
//Output: that number converted to a roman numeral.

//This regex replaces I, X, and Cs that appear five times with V, L, and D respectively.
function romanRegex(letters, index) {
    const regex = /[I,X,C]{5}/;
    switch (index) {
        case 0:
            return letters.replace(regex, "V");
        case 1:
            return letters.replace(regex, "L");
        case 2:
            return letters.replace(regex, "D");
    }
}

//Takes the number to convert and a numerical position.
//The numbers in the first position are treated in the first case. "I" is repeated as many times
//as the input number. If it appears more than five times it's converted to "V". If the number is
// 4 or 9 it returns IV and IX.
//The same operation is repeated for the digits in the 10s and 100s places, but with their respective
//roman numerals. Finally, the digit in the 1000s position just repeats "M" as many times as the digit.

function numToRoman(num, index) {
    switch (index) {
        case 0:
            switch (num) {
                default:
                    return romanRegex("I".repeat(num), index);
                case 4:
                    return "IV";
                case 9:
                    return "IX";
            }
        case 1:
            switch (num) {
                default:
                    return romanRegex("X".repeat(num), index);
                case 4:
                    return "XL";
                case 9:
                    return "XC";
            }
        case 2:
            switch (num) {
                default:
                    return romanRegex("C".repeat(num), index);
                case 4:
                    return "CD";
                case 9:
                    return "CM";
            }
        case 3:
            return "M".repeat(num);
    }
}

//Turn the number into a string to separate it into digits. Add them into an array and reverse it so we can
//treat them as [first digit, second digit, third digit, fourth digit].
//Finally, use map to apply numToRoman to every digit, while considering their position to return the
//appropiate letter
function convertToRoman(num) {
    const decomposeNum = JSON.stringify(num).split("").reverse();
    return decomposeNum
        .map((item, index) => numToRoman(parseInt(item), index))
        .reverse()
        .join("");
}

console.log(convertToRoman(3999));
//MMMCMXCIX

//I would try to do this in a less "string oriented" way.
