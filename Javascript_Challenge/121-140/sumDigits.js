// Write a function called "sumDigits".

// Given a number, "sumDigits" returns the sum of all its digits.

// var output = sumDigits(1148);
// console.log(output); // --> 14

// If the number is negative, the first digit should count as negative.

// var output = sumDigits(-316);
// console.log(output); // --> 4

// Notes:
// * In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
// * Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

function sumDigits(num) {
  // your code here
  var string_num = num.toString();
  var sum = 0;
  if (num < 0) {
    for (var i = 2; i < string_num.length; i++) {
      sum += Number(string_num[i]);
    }
    return sum - string_num[1];
  } else {
    for (var j = 0; j < string_num.length; j++) {
      sum += Number(string_num[j]);
    }
  }
  return sum;
}

var output = sumDigits(-11);
console.log(output); // --> 14
