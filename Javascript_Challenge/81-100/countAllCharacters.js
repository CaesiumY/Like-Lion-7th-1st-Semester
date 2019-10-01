// Write a function called "countAllCharacters".

// Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

// Notes:
// * If given an empty string, countAllCharacters should return an empty object.

// var output = countAllCharacters('banana');
// console.log(output); // --> {b: 1, a: 3, n: 2}

function countAllCharacters(str) {
    // your code here
    if (str.length == 0) {
        return {};
    }
    var cnt = {};
    for (var i = 0; i < str.length; i++) {
        cnt[str[i]] = 0;
    }
    for (var i = 0; i < str.length; i++) {
        if (cnt[str[i]] >= 0) {
            cnt[str[i]] += 1;
        }
    }
    return cnt;
}

var output = countAllCharacters("banana");
console.log(output); // --> {b: 1, a: 3, n: 2}
