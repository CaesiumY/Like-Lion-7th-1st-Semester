// Write a function called "computeAverageOfNumbers".

// Given an array of numbers, "computeAverageOfNumbers" returns their average.

// Notes:* If given an empty array, it should return 0.

// var input = [1,2,3,4,5];
// var output = computeAverageOfNumbers(input);
// console.log(output); // --> 3

function computeAverageOfNumbers(nums) {
  // your code here
  var average = 0;
  if (nums.length === 0) {
    return average;
  }
  for (var i = 0; i < nums.length; i++) {
    average += nums[i];
  }
  return average / nums.length;
}

var input = [];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3
