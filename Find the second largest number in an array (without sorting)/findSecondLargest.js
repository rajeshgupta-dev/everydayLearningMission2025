/**
 * Find the second largest unique number in an array.
 * @param {number[]} arr - Array of numbers.
 * @returns {number|null} - Second largest number, or null if it doesn't exist.
 */


function findSecondLargest(arr) {
  // Edge case: Need at least 2 elements to have a second largest
  if (arr.length < 2) {
    return null;
  }

  let max = -Infinity;       // To hold the largest number
  let secondMax = -Infinity; // To hold the second largest number

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    // Update both max and secondMax
    if (num > max) {
      secondMax = max; // demote current max to secondMax
      max = num;       // update max
    }
    // Update secondMax if num is between max and secondMax
    else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }

  // If secondMax was never updated, return null
  return (secondMax === -Infinity) ? null : secondMax;
}

console.log(findSecondLargest([10, 5, 20, 8]));      // ➞ 10
console.log(findSecondLargest([3, 3, 3]));           // ➞ null (no second unique number)
console.log(findSecondLargest([10, 20]));            // ➞ 10
console.log(findSecondLargest([20]));                // ➞ null
console.log(findSecondLargest([-10, -5, -1, -1]));   // ➞ -5
