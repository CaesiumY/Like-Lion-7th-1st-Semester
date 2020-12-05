// Write a function called "findSmallestNumberAmongMixedElements".

// Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

// Notes:
// * If the given array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.

// var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
// console.log(output); // --> 4

function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if (arr.length < 1) {
    return 0;
  }

  var array_string = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      array_string.push(arr[i]);
    }
  }

  if (array_string.length < 1) {
    return 0;
  }

  var min = array_string[0];

  for (var j = 0; j < array_string.length; j++) {
    if (array_string[j] < min) {
      min = array_string[j];
    }
  }
  return min;
}

var output = findSmallestNumberAmongMixedElements([4, "lincoln", 9, "octopus"]);
console.log(output); // --> 4
