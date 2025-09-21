# 🧩 Leetcode 60: Permutation Sequence

This project solves the **Permutation Sequence** problem from Leetcode using JavaScript with a simple and clear **mathematical approach**.

---

## 📄 Problem Statement

The set `[1, 2, 3, ..., n]` contains a total of `n!` (n factorial) unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for `n = 3`:

```

"123"
"132"
"213"
"231"
"312"
"321"

````

Given `n` and `k`, return the **k-th** permutation sequence (1-indexed) as a string.

---

## ✍️ Examples

### Example 1
**Input:**  
`n = 3`, `k = 3`  
**Output:**  
`"213"`

### Example 2
**Input:**  
`n = 4`, `k = 9`  
**Output:**  
`"2314"`

### Example 3
**Input:**  
`n = 3`, `k = 1`  
**Output:**  
`"123"`

---

## ✅ Constraints

- `1 <= n <= 9`
- `1 <= k <= n!` (factorial of n)

---

## 💡 Approach (Using Math, Not Brute Force)

Instead of generating all possible permutations (which is slow for large `n`), we use **math to directly find the k-th permutation**.

### 🔢 Step-by-step Explanation

1. All permutations are ordered.
2. Each number has `(n - 1)!` permutations starting with it.
3. So we can **calculate** the position of each digit one by one.
4. We maintain a list of available numbers, and at each step:
   - Find the correct index using `k / (n-1)!`
   - Add that number to the result
   - Remove it from the list
   - Update `k` to the remainder

---

## 📦 Code: `getPermutation.js`

```javascript
function getPermutation(n, k) {
    let numbers = [];
    let factorial = 1;

    // Step 1: Create an array of numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        numbers.push(i.toString());
        factorial *= i;
    }

    // Step 2: Convert k to 0-based index
    k--;

    let result = "";

    // Step 3: Build the result one digit at a time
    for (let i = 0; i < n; i++) {
        factorial = factorial / (n - i);              // Reduce factorial
        let index = Math.floor(k / factorial);        // Find index in numbers array
        result += numbers[index];                     // Add to result
        numbers.splice(index, 1);                     // Remove used number
        k = k % factorial;                            // Update k
    }

    return result;
}
````

---

## 🧪 Example Usage

```javascript
console.log(getPermutation(3, 3)); // Output: "213"
console.log(getPermutation(4, 9)); // Output: "2314"
console.log(getPermutation(3, 1)); // Output: "123"
```

---

## ⏱️ Time & Space Complexity

* **Time Complexity:** `O(n²)`
  Due to the use of `splice()` inside a loop.

* **Space Complexity:** `O(n)`
  For the `numbers` array and the result string.

---

## 🚀 Why This Is Efficient

* No need to generate all permutations (which is factorial time).
* Efficient for all values of `n` from 1 to 9 (as required by the problem).

---

## 🧠 Tip for Interviews

If you're asked to return the `k-th` permutation in sorted order **without generating all permutations**, this is the go-to method. Knowing how to use factorial math for indexing is key!

---

Rajesh Gupta




