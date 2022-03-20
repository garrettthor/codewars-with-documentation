// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

// Example:

// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']



function filterLongWords(sentence, n) {
    // Split the string, sentence, into an array
  let sentenceArray = sentence.split(' ');

    // Create an empty array to contain the answer
  let answerArray = [];

    // Loop over senteceArray
  for(let i=0; i<sentenceArray.length; i++){

        // and detect if any of the strings stored in the elements are over n in character length
      if (sentenceArray[i].length > n){

        // If they are longer than n, push them into the answerArray
        answerArray.push(sentenceArray[i]);
      };
  };

    // Return the answer
  return(answerArray);
};

// Test case
// filterLongWords('I do not want to work bartender weekend', 5)