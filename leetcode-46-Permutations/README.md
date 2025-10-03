
# 🔢 LeetCode 46: Permutations

📌 **Link to Problem:** [LeetCode - Permutations](https://leetcode.com/problems/permutations/)

---

## 🧠 Problem Description

Given an array `nums` of **distinct integers**, return **all possible permutations** of the elements in any order.

---

## 🧪 Examples

### Example 1
```js
Input: nums = [1, 2, 3]
Output: [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1]
]
````

### Example 2

```js
Input: nums = [0, 1]
Output: [[0, 1], [1, 0]]
```

### Example 3

```js
Input: nums = [1]
Output: [[1]]
```

---

## ✅ Constraints

* `1 <= nums.length <= 6`
* `-10 <= nums[i] <= 10`
* All integers of `nums` are **unique**

---

## 🧠 Approach: Backtracking (Simple Explanation)

Backtracking means trying all possible combinations by building a solution step-by-step and going back if it doesn't lead to a valid result.

### Here's how we solve it:

1. We create a function that builds a list (`path`) one number at a time.
2. When the path's length equals the original array length, we add it to the result.
3. We use a `used[]` array to make sure we don’t use the same number twice in one permutation.
4. We use recursion to explore all possible paths (permutations).

---

## 🧾 JavaScript Code

```js
function permute(nums) {
    const result = [];

    function backtrack(path, used) {
        if (path.length === nums.length) {
            result.push([...path]); // Save a copy of the current permutation
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue; // Skip if already used

            // Choose
            path.push(nums[i]);
            used[i] = true;

            // Explore
            backtrack(path, used);

            // Unchoose (Backtrack)
            path.pop();
            used[i] = false;
        }
    }

    backtrack([], Array(nums.length).fill(false));
    return result;
}
```

---

## 🕒 Time and Space Complexity

| Complexity | Explanation                                                                   |
| ---------- | ----------------------------------------------------------------------------- |
| ⏱️ Time    | `O(n * n!)` — There are `n!` permutations and each takes `O(n)` time to build |
| 🧠 Space   | `O(n!)` — For storing all permutations + recursion stack                      |

---

## 📌 Summary

* ✅ This is a classic **backtracking** problem.
* ✅ Helps build understanding for combinations, subsets, and recursion.
* ✅ Frequently asked in coding interviews.

---

Rajesh Gupta
