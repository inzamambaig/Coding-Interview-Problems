/* 
Solution 1.1
White Spaces, punctuations and special characters are not included
*/

function palindrome(str) {
  const removedSpecialChar = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedStr = removedSpecialChar.split("").reverse().join("");
  return removedSpecialChar === reversedStr;
}

/* 
Solution 1.2
White Spaces, punctuations and special characters are included
*/

function palindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return reversedStr === str;
}
console.log(palindrome("abba"));

/* 
Solution 2.1
White Spaces, punctuations and special characters are included
*/

function palindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
// }

// console.log(palindrome("abba"));

/* 
Solution 2.2
White Spaces, punctuations and special characters are not included
*/

function palindrome(str) {
  const re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, ""); // Remove

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// console.log(palindrome("A man, a plan, a canal. Panama"));

/* 
Solution 3.1
*/

function palindrome(str) {
  return str.split("").every((char, idx) => char === str[str.length - 1 - idx]);
}

console.log(palindrome("abba"));
