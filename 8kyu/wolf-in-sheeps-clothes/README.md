# A wolf in sheep's clothing

This is an 8kyu kata found @ https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

The directions are to identify if a wolf (a string called "wolf" in an array containing either "wolf" or "sheep") is present at the front of the line, and return a certain message if so.

If the wolf is not at the front of the line, then the directions are to alert the sheep preceeding the wolf that a wolf is indeed behind it about to snack on them.

Right off the bat, we see a little trickery going on, as the "front" of the line is actually the back. Initially, I started writing a solution where the length of the array would come into play and and then figure out the element number. It's much easier to use the reverse method right away and "correct" the order in which the array is displayed.

Now, if the wolf is at position 0 of the array, we can use conditiona logic to detect that and display the appropriate message.

If the wolf is not at position 0, I used a for loop to iterate a condiditional statement over the array to detect which element it was stored in and store that element number in the variable wolfPos.

I then declared a new variable sheepInDanger, and stored the value of wolfPos in that. It may be redundant, but it makes clear which is which. There is no need to subtract 1 from the position of the wolf to signify that the position of the sheep is 1 ahead of the wolf, as the array starts at the 0th position, and the resulting returned message is referring to a queue that starts at the 1st position. For example: if the wolf is in element number 3 in the array, it is actually 4th in line in the queue. Therefor, when the final string message is returned, we do want to alert that the 3rd sheep in the queue is in danger, so we can leave that number alone from the wolf's element position [3].

I know it's outside of the scope of this problem, but I wonder what it would take to detect multiple wolves in the queue, as this only works for one wolf at a time.
