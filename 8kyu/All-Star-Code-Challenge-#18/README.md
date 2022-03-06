# All Star Code Challege #18

5 stars for the non-descript title...

This challenge is asking a fairly common task. It requires you to count the instances of Y in X. I came across this in a recent Amazon code-along interview, and wish I had remembered a couple of the simple, but important lessons.

The challenge asks to return the number of times a particular letter, represented as the argument 'letter', appears in the string 'str'. I started by splitting the str string into an array, breaking apart the individual letters.

A simple for loop iterates over the array and uses some basic conditional logic to detect if each element is an exact match to the character represented by the 'letter' argument. Each time there is a match, the count variable is increased by 1.

It is important to set the count to 0 while declaring it. I found that if you just declare the variable as count without also asigning it as 0, the function will return NaN. No bueno.

It conclusion, it's a simple task, but has a few important syntactical lessons to be learned.
