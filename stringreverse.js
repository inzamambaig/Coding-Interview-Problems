// /*
// Method 1
// */

// function reverseString(str) {
//   const strArr = str.split("");
//   strArr.reverse();
//   return strArr.join("");
// }

// console.log(reverseString("Hello World"));

// /*
// Method 2
// */

// function reverseString(str) {
//   let reversedStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }
//   return reversedStr;
// }

// /*
// Method 3
// */

// function reverseString(str) {
//   let reversedStr = "";
//   for (let character of str) {
//     reversedStr = character + reversedStr;
//   }

//   return reversedStr;
// }

/* 
Method 4
*/

function reverseString(str) {
  return str
    .split("")
    .reduce((reversedStr, currentChar) => currentChar + reversedStr, "");
}

console.log(reverseString("INZAMAM"));
