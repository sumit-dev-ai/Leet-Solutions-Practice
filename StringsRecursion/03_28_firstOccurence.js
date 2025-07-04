function findOccurence(index,haystack, needle) {
    if(index>(haystack.length-needle.length)){
        return -1;
    }

    if(haystack.slice(index,index+needle.length)===needle)
    {
        return index;
    }
    
    return findOccurence(index+1,haystack,needle);
};

const res=findOccurence(0,"dadbutsad","sad");
const res1=findOccurence(0,"Hello","el");
console.log(res);
console.log(res1);