/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let result='';
    for(let i in s){
        if(s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90 ){
            result+=String.fromCharCode(s.charCodeAt(i)+32);
        }else{
            result+=s[i];
        }
    }
    return result;
};
console.log(toLowerCase("Hello"));     // "hello"
console.log(toLowerCase("LOVELY"));    // "lovely"
console.log(toLowerCase("JavaScript"));// "javascript"
console.log(toLowerCase("123ABC!"));   // "123abc!"
