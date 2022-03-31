// Work out what number day of the year it is.

// toDayOfYear([1, 1, 2000]) => 1

// The argument passed into the function is an array with the format [M, D, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

// Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

//     The year can be evenly divided by 4;
//     If the year can be evenly divided by 100, it is NOT a leap year, unless;
//     The year is also evenly divisible by 400. Then it is a leap year.


function toDayOfYear(arr) {
    console.log(arr)

    // Let's make variables for the day, month, and year indices for easier management later.
    // There is an inconsistancy in the problem prompt:  the date is stated to be formatted (M,D,YYYY), but is in fact read as (D,M,YYYY) when examples are given (and in the test cases on codewars.com)
    let month = arr[1];
    let day = arr[0];
    let year = arr[2];

    // Initialize a variable to represent if the given date is in a leap year (true) or not (false).
    let isLeapYear = false;

    // Conditional logic to determine if the year is a leap year:
    // If the year can be evenly divided by 100, it is NOT a leap year
    if (year % 100 === 0 && year % 400 !== 0) {
        isLeapYear = false;
        console.log('not leap year, failed 100 year')

    // UNLESS the year is also evenly divisible by 400.
    } else if (year % 100 === 0 && year % 400 === 0){
        isLeapYear = true;
        console.log('is leap year, passed 2')

    // And if the year is evenly divisible by 4, but not 100, it is a leap year
    } else if (year % 4 === 0 && year % 100 !== 0){
        isLeapYear = true;
        console.log('is leap year, passed 3')
    };

    // Define two arrays which include the number of days in each month
    let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];

    // The second array has the leap year (29) number of days for Feb (leapDays[1])
    let leapDays = [31,29,31,30,31,30,31,31,30,31,30,31];

    // If the year is a normal (non-leap year), do the following:
    if (isLeapYear === false){

            // Create a new array that contains only the months, and their day counts up to the previous month of the argument date.
            let newArr = monthDays.slice(0,month-1)
                // console.log(newArr)

            // Sum up all the days of the months prior to the current month
            let sumMonthDays = newArr.reduce((acc, c) => acc + c, 0);
                // console.log(`${sumMonthDays} days have occured in previous months`)

            // Add the number of days into the current month to the summed total.
            let dayTotal = sumMonthDays + day;
                console.log(`${dayTotal} days total.`)

            // Return that variable which represents the total number of days up to the date in the argument (inclusive).
            return dayTotal

    // Unless it IS a leap year, then do the following:
    } else {

            // Create a new array based on the array including the extended February.
            let newArr = leapDays.slice(0,month-1)
                // console.log(newArr)

            // Sum up all the days of the months prior to the current month
            let sumMonthDays = newArr.reduce((acc, c) => acc + c, 0);
                // console.log(`${sumMonthDays} days have occured in previous months`)

            // Add the number of days into the current month to the summed total.
            let dayTotal = sumMonthDays + day;
                console.log(`${dayTotal} days total.`)

            // Return that variable which represents the total number of days up to the date in the argument (inclusive).
            return dayTotal
        }

};

// toDayOfYear([3,1,2000]);
// toDayOfYear([4,1,1999])
// toDayOfYear([25, 12, 2017]);
// toDayOfYear([5, 11, 1604]);
toDayOfYear([31, 12, 2000]);