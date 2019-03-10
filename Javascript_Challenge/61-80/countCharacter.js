// Write a function called "countCharacter".

// Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.

// var output = countCharacter('I am a hacker', 'a');
// console.log(output); // --> 3

function countCharacter(str, char) {
    // your code here
    if (char == '') return 0
    return str.split(char).length - 1
}

var output = countCharacter('I am a hacker', '');
console.log(output); // --> 3