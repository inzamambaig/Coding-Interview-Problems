// Finding Palindrome using built in javascript functions

function isPalindrome(str) {
  // Regular Expression to search all non-alpha characters
  const re = /[\W_]/g;

  // LowerCase and remove non-alpha characters
  const tempStr = str.toLowerCase().replace(re, "");
  // Reversing the String
  const reverseStr = tempStr.split("").reverse().join("");

  // Check is string is Palindrome

  return tempStr === reverseStr;
}

console.log(isPalindrome("A man, a plan, a canal. Panama"));

// Finding Palindrome using a for loop in javascript
function Palindrome(str) {
  const re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, ""); // Remove

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(Palindrome("A man, a plan, a canal. Panama"));
