// Write a function called "findShortestWordAmongMixedElements".

// Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

// Notes:
// * If there are ties, it should return the first element to appear in the given array.
// * Expect the given array to have values other than strings.
// * If the given array is empty, it should return an empty string.
// * If the given array contains no strings, it should return an empty string.

// var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
// console.log(output); // --> 'two'

function findShortestWordAmongMixedElements(arr) {
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

  var min = array_string[0];

  for (var j = 0; j < array_string.length; j++) {
    if (array_string[j] < min.length) {
      min = array_string[j];
    }
  }
  return min;
}

var output = findShortestWordAmongMixedElements([4, "two", 2, "three"]);
console.log(output); // --> 'two'
