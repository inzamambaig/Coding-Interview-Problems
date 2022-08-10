/* 
Write a function that returns the number of vowels used in a string.

Vowels are the characters a, e, i, o, and u

Examples

vowels('Hi There!'); --> 3
vowels('Why do you ask?'); --> 4
vowels('Why?'); --> 0
*/

/* 
Solution 1
*/
function vowels(str) {
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (["a", "e", "i", "o", "u"].includes(char)) {
      count += 1;
    }
  }

  return count;
}

/* 
Solution 2
*/

function vowels(str) {
  const regex = /[aeiou]/gi;

  const matches = str.match(regex);

  return matches ? matches.length : 0;
}

/* 
  Solution 3
  */
function vowels(str) {
  let sum = 0;

  const tempArr = str.split("");

  tempArr.forEach((char) => {
    if (["a", "e", "i", "o", "u"].includes(char.toLowerCase())) {
      sum += 1;
    }
  });
  return sum;
}

console.log(vowels("Hi There!"));
console.log(vowels("Why do you ask?"));
console.log(vowels("Why?"));
