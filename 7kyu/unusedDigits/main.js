// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"

// Note: the digits in the resulting string should be sorted.
//

function unusedDigits(array) {
    console.log(array)
    let smooshedString = ""

    for (let i=0; i<array.length; i++) {
        console.log(array[i].toString())
        smooshedString += array[i].toString()
        console.log(smooshedString)
    }

    console.log(smooshedString)

    let answerString = ""

    for (let i=0; i<10; i++){
        if (smooshedString.includes(`${i}`) !== true) {
            console.log(i)
            console.log(`no ${i}'s`)
            answerString += `${i}`
        }
    }
    
    console.log(answerString)
    return(answerString)
    
}

unusedDigits([12, 34, 56, 78]);