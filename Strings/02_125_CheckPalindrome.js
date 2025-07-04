 
var isPalindrome = function(str) {
        //[^a-z0-9] = match anything not in a-z or 0-9
        // g = global flag (replace all matches, not just first one)

    str=str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left=0;
    let right=str.length-1;
    while(left<right){
        if(str[left]!==str[right]){
            return false;
        }
        left++;
        right--;
        
    }
    return true;  
    
};
const a=isPalindrome("Madam");
const b=isPalindrome("Madam1"); 
console.log(   a)
console.log(   b)