/**
 * Write a function to determine if a number is an integer
 */



// Solution
let isInt = function (num) {
    return parseInt(num) === num;
}

console.log(3, isInt(3));
console.log(3.5, isInt(3.5));
console.log(1.00000, isInt(1.00000));
