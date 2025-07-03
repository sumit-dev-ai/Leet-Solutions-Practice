var reverseString = function (s) {

    let leftP = 0;
    let rightP = s.length - 1;
    while (leftP < rightP) {
        [s[leftP], s[rightP]] = [s[rightP], s[leftP]]
        leftP++;
        rightP--;

    }
    return s;
};
console.log(reverseString(["h","e","l","l","o"]));