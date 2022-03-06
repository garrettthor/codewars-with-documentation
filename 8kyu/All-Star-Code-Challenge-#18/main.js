/*
This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

strCount('Hello', 'o') // => 1
strCount('Hello', 'l') // => 2
strCount('', 'z')      // => 0

Notes:

    The first argument can be an empty string
    The second string argument will always be of length 1

*/

function strCount(str, letter) {
    // Split up the str argument string into individual letters.
    let splitArr = str.split('')

    // Define a letter count variable that lives outside the loop.  We will return this variable later as the final answer.
    let count = 0

    // A simple for loop will iterate over the array of split letters
    for (i=0; i<splitArr.length; i++) {

        // This conditional logic will check each letter to see if it matches the letter argument
        if (splitArr[i] === letter) {

            // For each time the letter is matched, increase the count variable by one
            count+=1
        }
    }

    //return the count variable as the answer
    return count
}

strCount('boogie', 'o')