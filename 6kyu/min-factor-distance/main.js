// Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater than one.

// Example:

// 13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

// Hence the asnwer will be 2 (=13-11)


function minDistance(n){

    // Find the factors of argument
    let factors = [];
    for(i=0; i<n; i++){
        if(n % i === 0){
            factors.push(i);
        };
    };

    // Find the differences between the possible factors
    let differences = [];

    // If n is prime, add it to the array of factors
    if(factors.length === 1){
        factors.push(n);
    };

    // Loop through find the difference between each possible pairing, pushing the differences that are greater than 0 to the differerences array
    for(i=0;i<factors.length; i++){
        for(j=0;j<factors.length; j++){
            let difference = factors[i] - factors[j];
            if(difference > 0){
                differences.push(difference);
            };
        };
    };

    // Return the lowest number amongst the differences array
    return Math.min(...differences);
};