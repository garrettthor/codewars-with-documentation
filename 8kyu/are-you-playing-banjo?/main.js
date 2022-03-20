/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
*/


function areYouPlayingBanjo(name) {

    //  If the first character (the 0th element position of an array made by splitting the string stored in the argument name), represented by a single letter string, is R or r
    if (name.split('')[0] === 'R' || name.split('')[0] === 'r') {

        // return name + " plays banjo" 
        return(`${name} plays banjo`)
    } else {

        // return name + " does not play banjo"
        return(`${name} does not play banjo`)
    }
}


// Tests
areYouPlayingBanjo('Roger')
areYouPlayingBanjo('Garrett')