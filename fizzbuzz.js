/* 
Solution 1
*/

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

/* 
Solution 2
*/

for (let i = 0; i < 100; )
  console.log((++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);

/* 
  Solution 3
  */

for (let i = 1; i <= 100; i++) {
  let out = "";
  if (i % 3 === 0) {
    out += "Fizz";
  }
  if (i % 5 === 0) {
    out += "Buzz";
  }
  if (i % 7 === 0) {
    out += "Bazz";
  }

  console.log(out || i);
}
