// Write a function called "getLongestElement".

// Given an array, "getLongestElement" returns the longest string in the given array.

// Notes:
// * If there are ties, it returns the first element to appear.
// * If the array is empty, it should return an empty string.

// var output = getLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 'three'

function getLongestElement(arr) {
  // your code here
  if (arr.length < 1) {
    return "";
  }
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > max.length) {
      max = arr[i];
    }
  }
  return max;
}

var output = getLongestElement(["one"]);
console.log(output); // --> 'three'
