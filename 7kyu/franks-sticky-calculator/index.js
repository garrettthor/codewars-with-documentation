//  Frank's Sticky Calculator
// Description

// Frank just bought a new calculator. But, this is no normal calculator. This is a 'Sticky Calculator.

// Whenever you add add, subtract, multiply or divide two numbers the two numbers first stick together:

// For instance:

// 50 + 12 becomes 5012

// and then the operation is carried out as usual:

// (5012) + 12 = 5024

// Task

// It is your job to create a function which takes 3 parameters:

// stickyCalc(operation, val1, val2)

// which works just like Frank's sticky calculator
// Some Examples

// stickyCalc('+', 50, 12)     // Output: (5012 + 12) = 5024
// stickyCalc('-', 7, 5)       // Output: (75 - 5) = 70
// stickyCalc('*', 13, 20)     // Output: (1320 * 20 ) = 26400
// stickyCalc('/', 10, 10)     // Output: (1010 / 10) = 101

// Note

//     The calculator only works for positive integers only.
//     The calculator rounds any non-integer before operating.
//     The calculator rounds any output to nearest integer.

// For example:

// stickyCalc('/', 12.1, 6.8), 18);   

// 12.1 and 6.8 are rounded to 12 and 7 respectively & they 'stick together' to make 127.

// Although 127 / 7 = 18.1428 ; 18 is outputted instead.

function stickyCalc (operation, val1, val2){

    // Round the number for val1
    let value1 = Math.round(val1)

    // Round the number for val2
    let value2 = Math.round(val2)


    // Turn the rounded value for val1 into a string in order to concatinate it with val2
    let string1 = value1.toString();
    // Turn the rounded value for val2 into a string too.
    let string2 = value2.toString();

    // Concatinate those two strings.
    let stickyNum = Number((string1 + string2));

    // Logic determines which operand to use given the string stored in the argument operation
    if (operation === '+'){
        return(stickyNum + value2);
    } else if (operation === '-'){
        return stickyNum - value2
    } else if (operation === '*'){
        return(stickyNum * value2)
    } else if (operation ==='/'){
        // Round the value of a quotient, as it may be a float
        return(Math.round(stickyNum / value2))
    }

}

//test case
// stickyCalc ('/', 50.4999, 12.999);cd ..