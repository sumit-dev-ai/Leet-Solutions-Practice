// We define the usage of capitals in a word to be right when one of the following cases holds:
// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

function detectCapitalUse(word) {
    if (word.length === 0) return false;

    const isUpper = (ch) => ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90;
    const isLower = (ch) => ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122;

    let firstUpper = isUpper(word[0]);
    let allUpper = true;
    let allLower = true;

    for (let i = 0; i < word.length; i++) {
        if (!isUpper(word[i])) allUpper = false;
        if (!isLower(word[i])) allLower = false;
    }

    if (allUpper || allLower) return true;

    // Rule: First capital, rest lowercase
    if (firstUpper) {
        for (let i = 1; i < word.length; i++) {
            if (!isLower(word[i])) return false;
        }
        return true;
    }

    return false;
}

//Test Cases
console.log(detectCapitalUse("USA"))
console.log(detectCapitalUse("leetcode"))
console.log(detectCapitalUse("Google"))
console.log(detectCapitalUse("GooGle"))