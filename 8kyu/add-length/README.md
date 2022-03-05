# Add Length

This seems like a pretty straight-forward problem. My initial thought process is to split the original string in the argument up into its individual words. The best way to accomplish this is to employ the split method, specifically by adding a space between the quotation marks. Like so: .split(‘ ‘)

This will target the spaces between the words when splitting the string into individual array elements, as opposed to .split(‘’) (no space), which would split the string up by individual characters.

The next task is to loop over the array and find the length of each individual string stored in each element. I used a simple for loop to accomplish this. In each iteration, the loop stores the length of the element into a variable that is only scoped for the loop, and then concatenates a space character and the value of the length variable (wordLength) onto the string element.

The result is an array formatted correctly for the answer, where each element has the number of letters after the word and a space. For example, if ‘javascript’ was one of the words in the original string, it would then appear in the answer array as [‘javascript 10’].
