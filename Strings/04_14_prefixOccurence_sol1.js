//Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

//vertical scan method
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0];
};
//test cases
let strSet1=["flower","flow","flight"];
let strSet2=["dog","racecar","car"];

//calling functions
console.log(longestCommonPrefix(strSet1));
let b=longestCommonPrefix(strSet2);
console.log(b);