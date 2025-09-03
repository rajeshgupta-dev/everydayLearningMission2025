# 🚀 LeetCode Problem: Remove Element (JavaScript)

This repository contains a JavaScript solution to the popular LeetCode problem **"Remove Element"** (Problem #27). The problem is solved with a clean and efficient **in-place algorithm**, and this repo is designed to help others learn how it works.

---

## 📚 Problem Description

Given an integer array `nums` and an integer `val`, remove **all occurrences** of `val` in-place and return the number of elements left that are **not equal** to `val`.

The relative order of the elements may be changed. You must do this with **O(1) extra memory**.

---

### ✏️ Function Signature

```javascript
function removeElement(nums: number[], val: number): number;
````

---

## ✅ Constraints

* `0 <= nums.length <= 100`
* `0 <= nums[i] <= 50`
* `0 <= val <= 100`
* You **must** perform the operation **in-place** with **O(1)** extra space.

---

## 📥 Example 1

**Input:**

```javascript
nums = [3,2,2,3];
val = 3;
```

**Output:**

```javascript
k = 2
nums = [2,2,_,_] // The underscore (_) can be any value.
```

**Explanation:** The function should return `k = 2`, and the first two elements of `nums` should be `2`.

---

## 📥 Example 2

**Input:**

```javascript
nums = [0,1,2,2,3,0,4,2];
val = 2;
```

**Output:**

```javascript
k = 5
nums = [0,1,4,0,3,_,_,_] // Order of elements may vary.
```

**Explanation:** Your function should return `k = 5`, and the first five elements of `nums` should be `0, 1, 4, 0, 3` in any order.

---

## 🧠 Solution Approach

We use the **two-pointer** technique:

* Initialize a pointer `k = 0`.
* Loop through each element in the array:

  * If the current element is **not equal** to `val`, copy it to `nums[k]` and increment `k`.
* At the end of the loop, `k` represents the number of elements **not equal** to `val`.

This approach ensures we do the operation **in-place** and with **O(1) extra space**.

---

## 💻 JavaScript Code

```javascript 
function removeElement(nums, val) {
    let k = 0; // Number of elements not equal to val

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Overwrite the element at index k
            k++;
        }
    }

    return k;
}
```

---

## 🧪 Example Usage

```javascript
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

let k = removeElement(nums, val);

console.log("k =", k); // Output: 5
console.log("Modified nums:", nums.slice(0, k)); 
// Output: Array of elements not equal to val (order may vary), e.g. [0, 1, 3, 0, 4]
```

---

## 📦 How to Run

1. Copy the code into a JavaScript file, e.g., `removeElement.js`.
2. Run the file using Node.js:

```bash
node removeElement.js
```

---

## 🧠 What You Learn

* In-place array manipulation.
* Two-pointer technique.
* Memory-efficient coding.
* Understanding LeetCode's custom test behavior.

---

## ⭐️ Star This Repo

If you found this helpful, feel free to give it a ⭐️ on GitHub to support more educational content like this.

---

## 🔗 Related LeetCode Problems

* [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
* [Move Zeroes](https://leetcode.com/problems/move-zeroes/)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

```


