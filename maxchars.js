/* 
Solution 1
*/

function maxChars(str) {
  const chars = {};

  for (let char of str) {
    if (char in chars) {
      chars[char] += 1;
    } else {
      chars[char] = 1;
    }
  }

  return countKeyValue(chars);
}

function countKeyValue(obj) {
  let maxCharValue = 0;
  let maxChar = "";
  for (let char in obj) {
    if (obj[char] > maxCharValue) {
      maxCharValue = obj[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxChars("apple 1231111"));
