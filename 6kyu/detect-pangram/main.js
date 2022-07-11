function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const testArray = string.toLowerCase().split('');
    let lengthArray = [];
    for(let i=0; i<testArray.length; i++){
        for(let j=0; j<alphabet.length; j++){
            if(testArray[i] === alphabet[j]){
                lengthArray.push(alphabet[j]);
            };
        };
    };
    const uniqueChars = [...new Set(lengthArray)];
    const lengthTest = (uniqueChars.filter(entry => entry.trim() != '').length);
    if(lengthTest === 26){
        return true;
    } else {
        return false;
    };
};

// isPangram('5The quick brown fox jumps over the lazy dog.')

// isPangram('This is not a pangram')