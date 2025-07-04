// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack
// , or -1 if needle is not part of haystack.

var strStr = function(haystack, needle) {
    const mLength=haystack.length;
    const nLength=needle.length;

    for(let i=0;i<=mLength-nLength;i++){
        if(haystack.slice(i,i+nLength)===needle){
            return i;
        }
    }
        return -1;
    
};

const res=strStr("dadbutsad","sad");
console.log(res);