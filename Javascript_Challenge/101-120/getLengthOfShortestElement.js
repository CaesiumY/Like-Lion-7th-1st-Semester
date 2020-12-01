// Write a function called "getLengthOfShortestElement".

// Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

// Notes:
// * It should return 0 if the array is empty.

// var output = getLengthOfShortestElement(['one', 'two', 'three']);
// console.log(output); // --> 3

function getLengthOfShortestElement(arr) {
  // your code here
  if (arr.length < 1) {
    return 0;
  }
  var min = arr[0].length;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length < min) {
      min = arr[i].length;
    }
  }
  return min;
}
