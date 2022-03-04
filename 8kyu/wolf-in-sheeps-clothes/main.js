/*
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1

If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.
Examples

Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"
*/

// Re-completed 3/4/22 with psuedo code and documentation

function wolfDetector(arr) {

    // Seeing as "you" are at the front of the queue, which is technically the end of the array, let's reverse it.
    const flippedArr = arr.reverse()

    // Create conditional logic to detect if the wolf is at the very front of the queue, and display required message if so.
    if (flippedArr[0] === 'wolf') {
        return 'Pls go away and stop eating my sheep'

    // If the wolf IS NOT at the front of the queue, detect where the wolf is, and alert the sheep in front of it.
    } else {

        // Define the wolf's position in the array.
        let wolfPos

        // Loop over the queue, and if the wolf is found, assign that element number to the variable wolfPos
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === 'wolf') {
                wolfPos = i
            }
        }

        // Define a variable for the position of the sheep directly ahead of the wolf.  Since we will be dropping that into a message using the actual number in queue (not the array element number), we do not need to subtract 1 from the wolf position, as it is already 1 under the real world position.
        let sheepInDanger = wolfPos
        return `Oi! Sheep number ${sheepInDanger}! You are about to be eaten by a wolf!`
    }
}

wolfDetector(["sheep", "sheep", "sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "wolf"])