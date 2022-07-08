// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//     Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
    console.log(walk);
    const walkLength = walk.length
    console.log(walkLength)
    if (walkLength !== 10){
        console.log(`You didn't walk for 10 minutes...`)
        return false;
    }

    let x = 0;
    let y = 0;

    for(i=0; i<walkLength; i++){
        if(walk[i] === 'n' ){
            y += 1;
        }
        if(walk[i] === 's'){
            y -= 1;
        }
        if(walk[i] === 'e'){
            x += 1;
        }
        if(walk[i] === 'w'){
            x -= 1;
        }
    }

    if(y > 0){
        console.log(`You have walked ${y} blocks North`)
    } else if(y < 0){
        console.log(`You have walked ${Math.abs(y)} blocks South`)
    }
    
    if(x > 0){
        console.log(`You have walked ${x} blocks East`)
    } else if(x < 0){
        console.log(`You have walked ${Math.abs(x)} blocks West`)
    }

    if(x === 0 && y === 0){
        console.log(`You have returned home, congratulations!`);
        return true;
    } else {
        console.log(`Your grid position is (${x}, ${y}).  You missed the appointment.`);
        return false;
    }
    
};

isValidWalk(['n','n'])

isValidWalk(['n','n','n','n','n','n','n','n','e','s'])

isValidWalk(['n','n','s','s','s','e','e','e','e','s'])

isValidWalk(['n','s','n','s','n','s','n','s','n','s'])