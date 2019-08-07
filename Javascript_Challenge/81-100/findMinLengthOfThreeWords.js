// Write a function called "findMinLengthOfThreeWords".

// Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

// var output = findMinLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 1

function findMinLengthOfThreeWords(word1, word2, word3) {
    // your code here
    var min = word1.length;
    if (word2.length < min) min = word2.length;
    else if (word3.length < min) min = word3.length;
    return min;
}
