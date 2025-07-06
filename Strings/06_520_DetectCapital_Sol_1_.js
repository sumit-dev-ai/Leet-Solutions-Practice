// We define the usage of capitals in a word to be right when one of the following cases holds:
// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word.length === 0) return false;

    if (word === word.toUpperCase()) return true;         // ALL uppercase
    if (word === word.toLowerCase()) return true;         // all lowercase
    if (
        word[0] === word[0].toUpperCase() &&
        word.slice(1) === word.slice(1).toLowerCase()
    ) return true;                                        // Only first capital

    return false;
};
console.log(detectCapitalUse("USA"))
console.log(detectCapitalUse("leetcode"))
console.log(detectCapitalUse("Google"))
console.log(detectCapitalUse("GooGle"))