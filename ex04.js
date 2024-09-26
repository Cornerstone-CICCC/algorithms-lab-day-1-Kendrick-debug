// Exercise 4: Write a function named 'countOccurrences' that takes an array of strings and returns an object with the count of each string in the array.

function countOccurrences(arr) {
  // Do a for loop with the arr.
  // Return the counts of the array item/length or countOccurance
  // The return type should look like an obect
  // The object should look like {key : count}
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]] = counts[arr[i]] ? counts[arr[i]] + 1 : 1;
  }
  return counts;
}

console.log(countOccurrences(["apple", "banana", "apple"])); // { apple: 2, banana: 1 }
