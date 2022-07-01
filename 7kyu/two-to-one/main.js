// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {

    // concat s1 + s2
    // make fullStr into an array for sorting
    let fullStr = (s1 + s2).split('');

    // sort big string
    fullStr.sort();

    // remove duplicates
    fullStr = (Array.from(new Set(fullStr)));

    //concat the array back to a string
    // return longest possible string
        
    return (fullStr.join(''));
};

longest("aretheyhere", "yestheyarehere");