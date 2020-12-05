// Write a function called "getLongestWordOfMixedElements".

// Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

// Notes:
// * If the array is empty, it should return an empty string ("").
// * If the array contains no strings; it should return an empty string.

// var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
// console.log(output); // --> 'word'

function getLongestWordOfMixedElements(arr) {
  // your code here
  if (arr.length < 1) {
    return "";
  }

  var array_string = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      array_string.push(arr[i]);
    }
  }

  if (array_string.length < 1) {
    return "";
  }

  var max = array_string[0];

  for (var j = 0; j < array_string.length; j++) {
    if (array_string[j].length > max.length) {
      max = array_string[j];
    }
  }
  return max;
}

var output = getLongestWordOfMixedElements([3, "word", 5, "up", 3, 1]);
console.log(output); // --> 'word'
