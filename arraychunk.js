// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/* 
Solution 1

1. Create empty array to hold subArrays
2. For each element in the array(passed as first argument)
    2.1 Retrieve the last element in new array
    2.2 If last element does not exist, or if its length is equal to required size
        2.3 Push a new sub array into empty array with the current element
    2.4 Else add the current element into the last sub array 
*/
function chunk(array, size) {
  let newArray = [];

  for (let element of array) {
    const lastElement = newArray[newArray.length - 1];
    if (!lastElement || lastElement.length === size) {
      newArray.push([element]);
    } else {
      lastElement.push(element);
    }
  }

  return newArray;
}

/* 
Solution 2
1. Create empty array
2. Create index variable and assign 0
3. While index is less than array.length(passed as an argument)
   3.1 Push a slice as index and index+size from array(passed as an arg) into  empty array
   3.2 Add size to index

*/
function chunk(array, size) {
  let newArray = [];
  let index = 0;

  while (index < array.length) {
    newArray.push(array.slice(index, index + size));
    index += size;
  }

  return newArray;
}
