// Exercise 11: Write a function named 'reverseWords' that takes a string of text and returns the string with the order of the words reversed.

// function reverseWords(text) {
//   const words = text.split(" ");
// return words
// }

// console.log(reverseWords('The quick brown fox')) // 'fox brown quick The'

function reverseWords(text) {
  const words = text.split(" "); // To Split into words this is how we do it. Remember!
  words.reverse(); //  Reverse the array of words
  return words.join(" ");
}

// Example usage
console.log(reverseWords("The quick brown fox")); // 'fox brown quick The'
