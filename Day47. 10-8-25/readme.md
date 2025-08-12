# 🧮 Subset Sum – "Sum Exists or Not"

This project solves the **Subset Sum Problem**, where we determine if there is a **subset of numbers** from a given array that adds up to a specific **target sum**. The solution is implemented in **JavaScript** using **Recursion + Memoization (Dynamic Programming - Top Down)**.

---

## 🧾 Problem Statement

> Given an array of **positive integers** and a **target sum**, return `true` if there exists a subset of the array such that the **sum of its elements equals the target**, otherwise return `false`.

### 🧠 Understanding the Problem:

You are given:

* An array `arr` of `n` elements
* A `target` integer

You must check:
**Is there any subset of `arr` whose sum is equal to `target`?**

---

## 📌 Example

### 🧪 Example 1:

```js
Input:
arr = [3, 34, 4, 12, 5, 2]
target = 9

Output:
true

Explanation:
The subset [3, 4, 2] adds up to 9.
```

### 🧪 Example 2:

```js
Input:
arr = [1, 2, 5]
target = 4

Output:
false

Explanation:
No subset exists that adds up to 4.
```

---

## 🧠 Approach

### ✔ Concept Used: **Dynamic Programming (Memoization)**

We solve the problem using **recursion** and optimize it using **memoization** to avoid redundant calculations.

At each step:

* We **decide** whether to **include** or **exclude** the current element from the subset.
* We repeat this decision recursively for the remaining elements and remaining target.
* If we reach a point where the target becomes `0`, we return `true` (subset found).
* If we reach the end of the array or the target becomes negative, we return `false`.

### 🔁 Why Memoization?

Without memoization, the recursive solution re-computes many subproblems, leading to exponential time.
With memoization, we **store and reuse** results of subproblems to improve performance.

---

## 🧑‍💻 Code (subSetSum.js)

```javascript
function isSubsetSum(arr, target) {
    const memo = {};

    function dp(index, currentSum) {
        if (currentSum === 0) return true;
        if (index >= arr.length || currentSum < 0) return false;

        const key = `${index}-${currentSum}`;
        if (key in memo) return memo[key];

        const include = dp(index + 1, currentSum - arr[index]);
        const exclude = dp(index + 1, currentSum);

        memo[key] = include || exclude;
        return memo[key];
    }

    return dp(0, target);
}

// ✅ Multiple test cases
const testCases = [
    { arr: [3, 34, 4, 12, 5, 2], target: 9 },
    { arr: [1, 2, 3, 7], target: 6 },
    { arr: [1, 2, 5], target: 4 },
    { arr: [2, 3, 7, 8, 10], target: 11 },
    { arr: [1, 2, 3], target: 7 }
];

testCases.forEach((test, index) => {
    const result = isSubsetSum(test.arr, test.target);
    console.log(`Test Case ${index + 1}: Target = ${test.target}`);
    console.log(`Array = [${test.arr.join(', ')}]`);
    console.log(`Result: ${result ? "✅ Yes" : "❌ No"}\n`);
});
```

---

## ⏱ Time & Space Complexity

| Complexity         | Value          |
| ------------------ | -------------- |
| Time               | O(n \* target) |
| Space (memo)       | O(n \* target) |
| Space (call stack) | O(n)           |

> `n` is the number of elements in the array, and `target` is the given target sum.

---

## 🚀 How to Run This Code

### 1. ✅ Prerequisites:

Make sure you have **Node.js** installed. You can check by running:

```bash
node -v
```

If not installed, download it from [https://nodejs.org](https://nodejs.org)

---

### 2. 🏃‍♂️ Run the code:

Save the file as `subsetSum.js`, then open your terminal in that folder and run:

```bash
node subsetSum.js
```

---

## 📁 File Structure

```
folder/
│
├── subSetSum.js    # Main code file
└── README.md       # Problem explanation and usage
```

---

## 📚 Key Takeaways

* Dynamic Programming helps reduce time complexity by avoiding repeated work.
* Subset problems are a good example of "Include/Exclude" recursion patterns.
* Memoization in JavaScript can be done using plain objects with string keys.

---

## 📌 To-Do

* [ ] Add bottom-up (tabulation) DP version
* [ ] Add CLI input support
* [ ] Add web-based version (using input fields)

---

## 🧠 Related Concepts

* Subset Sum Problem
* 0/1 Knapsack
* Recursion with Memoization
* Dynamic Programming
* Backtracking (for variation with subset listing)

---

## 🔗 Further Practice

* [LeetCode: Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
* [GeeksforGeeks: Subset Sum Problem](https://www.geeksforgeeks.org/subset-sum-problem-dp-25/)

---

## 📄 License

This project is released under the **MIT License**. Feel free to use, share, or improve it.

---
##  Rajesh Gupta
