//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

 

var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false;
    }
    const count={}
    for(let char of s){
        count[char]=(count[char]||0)+1;
    }
    for (let char of t) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }
    return true;
};






// Approach 
// 1. Think: What needs to match? To be anagrams:
        // Same length 
        // Same characters           Think: How can I count characters?
        // Same number of each character if     (s.length !== t.length) return false;

//2.  Think: How can I count characters?
// created a count object {}
// 3. Think: How do I check t against this count?
//4.4. Finally: All matched? return true
