// Exercise 8: Write a function named 'longestWord' that takes a string of text and returns the longest word in the string.

function longestWord(text) {
  const words = text.split(" ");

  return words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
}
console.log(longestWord("The precident gave me a handshake"));

// function longestWord(text) {
//   const words = text.split(" "); // Step 3: Split into words

//   return words.reduce((longest, current) => {
//     return current.length > longest.length ? current : longest; // Step 6: Compare lengths
//   }, "");
// }

// console.log(longestWord("The precident gave me a handshake")); // Output: 'jumps'
