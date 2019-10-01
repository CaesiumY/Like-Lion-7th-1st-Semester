// Write a function called "findMaxLengthOfThreeWords".

// Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

// var output = findMaxLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 3

function findMaxLengthOfThreeWords(word1, word2, word3) {
    // your code here
    var max = word1.length;
    if (word2.length > max) max = word2.length;
    if (word3.length > max) max = word3.length;
    return max;
}
