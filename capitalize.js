/* 
Solution 1
*/

function capitalize(str) {
  return str
    .split(" ")
    .map((element) => element.charAt(0).toUpperCase() + element.slice(1))
    .join(" ");
}

/* 
Solution 2
*/

function capitalize(str) {
  const words = [];
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
}

/* 
Solution 3
*/

function capitalize(str) {
  let words = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      words += str[i].toUpperCase();
    } else {
      words += str[i];
    }
  }

  return words;
}

console.log(capitalize("look, it is working"));
