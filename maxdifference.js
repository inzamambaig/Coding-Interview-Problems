/**
 * Write a function to determine the largest difference
 * between any two numbers in an array of numbers
 */

let numbers = [12, 2, 6, 5, 9, 10, 33];

let difference = (function (arr) {
  const sortedArr = Array.from(new Set(numbers)).sort((a, b) => b - a);

  return sortedArr[0] - sortedArr[sortedArr.length - 1];
})(numbers);

console.log(difference);
