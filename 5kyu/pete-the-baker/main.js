// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

function cakes(recipe, available) {

    // Unpack the argument objects into sorted arrays
    // I was hitting some bugs without sorting the arrays - they need to be in the same order for quantity comparison down the road.
    const recipeEntries = Object.entries(recipe).sort()
    const availableEntries = Object.entries(available).sort()
    
    // Take just the ingredient names, not quantities, out from the arrays to just make an ingredient list (recipe and available)
    let recipeIngredients = []
    for(i=0; i<recipeEntries.length; i++){
        recipeIngredients.push(recipeEntries[i][0])
    }
    let availableIngredients = []
    for(i=0; i<availableEntries.length; i++){
        availableIngredients.push(availableEntries[i][0])
    }

    // Use a nested for loop and a counter called weGotIt to check off the required ingredients
    let weGotIt = 0;
    for(i=0; i<availableIngredients.length; i++){
        for(j=0; j<recipeIngredients.length; j++){
            if(availableIngredients[i] === recipeIngredients[j]){
                weGotIt += 1
            }
        }
    }

    // If we have the required ingredients, display a message saying so and move on.  If we are missing an ingredient, regardless of quantity, return 0 and quit.
    if(weGotIt === recipeIngredients.length){
        console.log('We have all the ingredients.  Checking quantities...')
    } else {
        console.log('We are missing available ingredients.  Go the store!')
        return 0
    }

    // Create a new array of just the needed ingredients AND quantities from our availableEntries array
    let comparisonArr = []
    for(i=0; i<availableEntries.length; i++){
        for(j=0; j<recipeIngredients.length; j++){
            if(availableEntries[i][0] === recipeIngredients[j]){
                comparisonArr.push(availableEntries[i])
            }
        }
    }
    
    // Create a new array to store possible number of complete cakes for each given ingredient based on the amount.
    let possibleCakes = []
    for(i=0; i<recipeEntries.length; i++){
        let recipeAmount = recipeEntries[i][1]
        let availAmount = comparisonArr[i][1]
        let quotient
        // console.log(`We need ${recipeAmount} QTY ${recipeEntries[i][0]} per cake`)
        // console.log(`We have ${availAmount} QTY ${comparisonArr[i][0]}`)
        // This amount is rounded down to reflect the fact that we cannot include incomplete cakes in the answer.
        quotient = Math.floor(availAmount / recipeAmount)
        // console.log(`We can make ${quotient} cake(s).`)
        possibleCakes.push(quotient)
    }

    // The answer will be the lowest number of possible cakes from the array created above.
    let answer = Math.min(...possibleCakes)
    console.log(`With the available ingredients, we can make ${answer} cakes!`)

    return answer
};

// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});

// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

cakes({ cream: 200, flour: 300, sugar: 150, milk: 100, oil: 100 },{ sugar: 1700, flour: 20000, milk: 20000, oil: 30000, cream: 5000 })