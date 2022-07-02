//Printed Errors

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.
// Examples:

// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
    const badLetters = ['n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let inputArray = s.split('')
    let numeratorLetters = [];

    for(let i=0;  i<inputArray.length; i++){
        for(let j=0; j<badLetters.length; j++){
            if(inputArray[i] === badLetters[j]){
                numeratorLetters.push(inputArray[i]);
            };
        };
    };

    let numerator = numeratorLetters.length;
    let denominator = inputArray.length;

    return (`${numerator}/${denominator}`);
};

// printerError('aaabbbbhaijjjm');

printerError('aaaxbbbbyyhwawiwjjjwwm')

printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')


//The below was the top listed solution.  Did not know you could use great than operator with letters... 🤔

// function printerError(s) {
//     // your code
//     var count = 0;
//     for(var i = 0; i < s.length; i++) {
//       if (s[i] > "m") {
//         count++;
//       }
//     }
//     return count+"/"+s.length;
// }