// Merge Sort - Top Down Implementation

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  // Merge elements in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Test
const arr = [5, 2, 9, 1, 5, 6];
const sorted = mergeSort(arr);
console.log("Original:", arr);
console.log("Sorted:", sorted);  // output   [ 1, 2, 5, 5, 6, 9 ]
