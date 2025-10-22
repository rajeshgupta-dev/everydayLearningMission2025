# 🧠 LeetCode Problem: 136 Single Number

## 📌 Problem Statement

Given a **non-empty** array of integers `nums`, every element appears **twice** except for **one**. Find that single one.

You must implement a solution with:

- **Linear runtime complexity** (`O(n)`)
- **Only constant extra space** (`O(1)`)

---

## 🧪 Example Inputs & Outputs

### Example 1
```

Input:  [2, 2, 1]
Output: 1

```

### Example 2
```

Input:  [4, 1, 2, 1, 2]
Output: 4

```

### Example 3
```

Input:  [1]
Output: 1

````

---

## 💡 Approach: Bit Manipulation using XOR

To solve this, we use the **bitwise XOR (^)** operator.

### XOR Properties:
- `a ^ a = 0` — A number XORed with itself is 0.
- `a ^ 0 = a` — A number XORed with 0 is the number itself.
- XOR is **commutative and associative**, meaning order doesn't matter.

### How it helps:

If every number appears twice except one, XORing all elements will cancel out the duplicates and leave the single number.

---

## ✅ Code Implementation

```js
function singleNumber(nums) {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i]; // XOR each number with the result
    }

    return res; // The result is the number that appeared once
}
````

---

## 🧠 Line-by-Line Explanation

```js
function singleNumber(nums) {
```

* Define a function `singleNumber` that takes an array of numbers.

```js
    let res = 0;
```

* Start with a result variable `res` initialized to 0.

```js
    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i];
    }
```

* Loop through the array and XOR every element with `res`.
* Duplicate numbers cancel each other, and only the unique number remains.

```js
    return res;
}
```

* Return the single number that appears once.

---

## 🧪 Additional Test Cases

```js
console.log(singleNumber([5, 5, 9]));        // Output: 9
console.log(singleNumber([0, 1, 0]));        // Output: 1
console.log(singleNumber([-1, -1, 0]));      // Output: 0
console.log(singleNumber([100]));            // Output: 100
console.log(singleNumber([7, 3, 5, 3, 5]));  // Output: 7
```

---

## ⏱️ Time and Space Complexity

| Type             | Complexity |
| ---------------- | ---------- |
| Time Complexity  | `O(n)`     |
| Space Complexity | `O(1)`     |

---

## 📘 Summary

* A smart and optimal solution using **bit manipulation**.
* Achieves both **linear time** and **constant space**.
* A perfect example of using **XOR** in real-world problem-solving.

---
Rajesh Gupta