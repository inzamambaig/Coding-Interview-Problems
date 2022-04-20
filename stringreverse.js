/* 
Method 1
*/

function reverseString(str) {
  const strArr = str.split("");
  strArr.reverse();
  return strArr.join("");
}

console.log(reverseString("Hello World"));

/* 
Method 2
*/

function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseString("INZAMAM"));
