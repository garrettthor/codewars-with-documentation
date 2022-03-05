// 3/5/22

/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]

Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/


function addLength(str) {

    // First order of business is to split the separate words in the string into individual elements in an array.  The space in between the ''s targets splitting the string up marked by spaces.  Without the space, it would target individual letters, not words.
    let wordArr = str.split(' ')

    // In this instance, I used a simple for loop to iterate over the length of the array.
    for (i=0; i<wordArr.length; i++) {
        
        // For each element/word in the array, we store it's length in the variable wordLength
        let wordLength = wordArr[i].length
        // and then concatonate it to the string in the elemement[i] along with a space to separate the word from the number of letters.
        wordArr[i] += ' ' + wordLength
    }
    
    // The array is now formatted correctly with a space and the number of letters following each word in its element string.
    return wordArr
}

addLength('this is the way')






// This was my original solution to this problem from ~ a year ago

// I used the .forEach method here.  I think I was just learning it and applying it as much as possible.  I don't really know which would be more efficient/correct at this point.

// function addLength(str) {
//     let splitArray = str.split(' ')
//     let answerArray = []
//     splitArray.forEach(el => {
//         let strLength = el.length
//         let strAndLength = el + ' ' + strLength
//         answerArray.push(strAndLength)
//     })
//     return answerArray
// }