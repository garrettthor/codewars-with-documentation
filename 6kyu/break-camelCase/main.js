// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""



function solution(string) {
    let arr = string.split('')

    function isCap(letter){
        if(letter.toUpperCase() === letter){
            return true
        };
    };

    for(i=0; i<arr.length; i++){
        if(isCap(arr[i])){
            arr[i] = ' ' + arr[i]
        };
    };

    return (arr.join(''));
};

solution("camelCasing")