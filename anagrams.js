/* 
Solution 1
*/

function anagrams(stringA, stringB) {
  const stringa = removeSpecialChars(stringA).toLowerCase();
  const stringb = removeSpecialChars(stringB).toLowerCase();

  const anagramA = createHistogram(stringa);
  anagramA;
  const anagramB = createHistogram(stringb);
  anagramB;

  console.log(Object.keys(anagramA).length !== Object.keys(anagramB).length);
  if (Object.keys(anagramA).length !== Object.keys(anagramB).length) {
    return false;
  }

  for (let char in anagramA) {
    console.log(anagramA[char]);
    console.log(anagramB[char]);
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

console.log(anagrams("aaz", "zza"));

/* 
  Solution 2
*/

function anagrams(stringA, stringB) {
  return removeSpecialChars(stringA) === removeSpecialChars(stringB);
}

function removeSpecialChars(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}


/*
  Solution 3
*/

/**
 * Write a function to determine if one String is 
 * a case-insensitive anagram of another String
 */


console.log(isAnagram('hello', 'jello'));
console.log(isAnagram('hello', 'loelh'));


// Solution
const isAnagram = function (str1, str2) {
  const string1 = str1.split("").sort().join("").toLowerCase();
  const string2 = str2.split("").sort().join("").toLowerCase();

  return string1 === string2;

}
