/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const count={};
    for(let char of magazine){
       count[char] =(count[char]||0)+1;
    }
    for(let char of ransomNote){
        if(!count[char]){
            return false;
        }
        count[char]--;
    }
    return true;

};

console.log(canConstruct("a", "b"));                // false
console.log(canConstruct("aa", "ab"));              // false
console.log(canConstruct("aa", "aab"));             // true
console.log(canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")); // true
console.log(canConstruct("", "anything"));          // true (empty ransom note)
console.log(canConstruct("something", ""));         // false (nothing to build with)
console.log(canConstruct("aabbcc", "abcabc"));      // true
console.log(canConstruct("aabbcc", "aabbc"));       // false (missing 1 'c')
