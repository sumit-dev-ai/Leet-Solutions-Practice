/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let Orig=x;
    let reverse=0;

    while(x>0){
        const temp=x%10;
        reverse=reverse*10+temp;
        x=Math.floor(x/10)
    }
    if(reverse===Orig) return true;
    return false;
    
};
const testCases = [121, -121, 10, 0, 1, 12321, 123321, 12345, 1000021, 1221, 2147447412];

testCases.forEach(num => {
  console.log(`isPalindrome(${num}) -> ${isPalindrome(num)}`);
});