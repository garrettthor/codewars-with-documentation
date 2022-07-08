// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// alphabetPosition("The sunset sets at twelve o' clock.")

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


function alphabetPosition(text) {
    console.log(text);

    let textArr = (text.toLowerCase()).split('');

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let numArr = [];

    for (i = 0; i < textArr.length; i++) {
        for (j = 0; j < alphabet.length; j++) {
            if (textArr[i] === alphabet[j]) {
                numArr.push(j + 1);
            };
        };
    };

    console.log(numArr.join(' '));
    return (numArr.join(' '));
};

alphabetPosition("The narwhal bacons at midnight.")