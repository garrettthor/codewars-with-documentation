// Array plus Array

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {

    // Use the reduce method to sum all the integers in arr1
    let sum1 = arr1.reduce((acc,c) => acc + c, 0);

    // Use the reduce method to sum all the integers in arr2
    let sum2 = arr2.reduce((acc, c) => acc + c, 0);

    // Return the sum of those sums
    return sum1 + sum2
};
