/* 
Solution 1
*/

function anagrams(stringA, stringB) {
  const stringa = removeSpecialChars(stringA).toLowerCase();
  const stringb = removeSpecialChars(stringB).toLowerCase();

  const anagramA = createHistogram(stringa);
  const anagramB = createHistogram(stringb);

  if (Object.keys(anagramA).length !== Object.keys(anagramB).length) {
    return false;
  }

  for (let char in anagramA) {
    if (anagramA[char] !== anagramB[char]) {
      return false;
    }
  }

  return true;
}

function createHistogram(str) {
  let chars = {};
  for (let char of str) {
    // if (char in chars) {
    //   chars[char] += 1;
    // } else {
    //   chars[char] = 1;
    // }

    chars[char] = chars[char] + 1 || 1;
  }

  return chars;
}

function removeSpecialChars(str) {
  return str.replace(/[^\w]/g, "");
}

/* 
  Solution 2
  */

function anagrams(stringA, stringB) {
  return removeSpecialChars(stringA) === removeSpecialChars(stringB);
}

function removeSpecialChars(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
