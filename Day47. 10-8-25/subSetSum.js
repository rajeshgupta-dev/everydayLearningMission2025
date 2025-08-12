function isSubsetSum(arr, target) {
  const memo = {};

  function dp(index, currentSum) {
    // Base case: subset found
    if (currentSum === 0) return true;

    // Base case: no elements left or sum becomes negative
    if (index >= arr.length || currentSum < 0) return false;

    // Memoization key
    const key = `${index}-${currentSum}`;
    if (key in memo) return memo[key];

    // Option 1: Include current element
    const include = dp(index + 1, currentSum - arr[index]);

    // Option 2: Exclude current element
    const exclude = dp(index + 1, currentSum);

    // Store and return result
    memo[key] = include || exclude;
    return memo[key];
  }

  return dp(0, target);
}


// examples  
const arr = [3, 34, 4, 12, 5, 2];
const target = 9;

if (isSubsetSum(arr, target)) {
    console.log("✅ Yes");
} else {
    console.log("❌ No");
}

