/* 
Array
*/
const movies = ["Avengers", "The Batman", "Antman", "Hulk", "Justice League"];
// 1. Traditional
// for (let i = 0; i < movies.length; i++) {
//   console.log(i, movies[i]);
// }

// 1.1 For of
// for (let item of movies) {
//   console.log(item);
// }

// 1.2 forEach
// movies.forEach((item, idx) => {
//   console.log(idx, item);
// });

// 1.3  Array.entries()
// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

// for (let [idx, value] of movies.entries()) {
//   console.log(idx, value);
// }

/* 
Objects
*/

let person = {
  first_name: "johnny",
  last_name: "johnson",
  phone: "703-3424-1111",
};

// 2.1 for in
// for (let key in person) {
//   console.log(key, person[key]);
// }

// 2.2 Object.entries()
// for (let [key, value] of Object.entries(person)) {
//   console.log(key, value);
// }

/* 
Array of Objects
*/

let arr = [{ id: 1 }, { id: 2 }, { id: 3 }];

// 3.1 for of

// for (var elm of arr) {
//   console.log(elm.id);
// }

// 3.2 map
//const x = arr.map((item) => item.id);
//console.log(x);

// 3.3 traditional for loop
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i].id);
// }

// 3.4 forEach
// arr.forEach((element, index) => {
//   console.log(element);
//   console.log(element.id);
//   console.log(index);
// });

// Bonus Adding values from array of objects
// const sum = arr.map((element) => element.id).reduce((a, b) => a + b, 0);
// console.log(sum);
