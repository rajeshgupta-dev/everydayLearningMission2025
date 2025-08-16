#  Find the second largest number in an array (without sorting)

A clean and efficient JavaScript function to find the **second largest distinct number** in an array using the **Single-Pass Linear Scan** approach.

---

##  LeetCode Reference

This problem is similar to [LeetCode Problem 179: “Largest Number”](https://leetcode.com/problems/largest-number/), although the original is about arranging numbers to form the largest number.  
A more direct analog is [LeetCode Problem 414: “Third Maximum Number”](https://leetcode.com/problems/third-maximum-number/) — but here, we're focused on the second maximum instead of the third.

---

##  Algorithm Used 

**Single-Pass with Two Vars**  
This algorithm scans the array once, maintaining two variables:

- `max`: tracks the highest number found so far  
- `secondMax`: tracks the second-highest distinct number found so far

---

##  Time & Space Complexity

| Metric                      | Value        |
|----------------------------|--------------|
| ⏱ **Time Complexity (TC)**   | `O(n)` – Single traversal |
|  **Space Complexity (SC)**  | `O(1)` – Constant space usage |

---

##  Problem Description

Given an array of integers, return the **second largest distinct** number.  
Return `null` if:
- The array has fewer than two elements  
- There is no second distinct maximum (e.g., all elements are equal)

---


##  Function Implementation

```javascript
function findSecondLargest(arr) {
  if (arr.length < 2) {
    return null; // Not enough elements
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }

  return (secondMax === -Infinity) ? null : secondMax;
}
````

---

## Parameters

* **`arr`** *(Array of Numbers)*: The input array of integers.

---

## Returns

* The **second largest distinct** number in the array.
* Returns `null` if conditions for finding such a number aren’t met.

---

## Examples

```javascript
findSecondLargest([10, 20, 30, 40, 50]); // → 40
findSecondLargest([5, 5, 3, 1]);         // → 3
findSecondLargest([7, 7, 7]);            // → null
findSecondLargest([42]);                 // → null
findSecondLargest([-1, -5, -3, -1]);     // → -3
```

---

## Edge Case Handling

* Empty array → returns `null`
* One-element array → returns `null`
* No second distinct maximum (all elements same) → returns `null`
* Works correctly with negative numbers

---

## Related Topics

* Linear Array Traversal
* Efficient In-Place Tracking
* Greedy Comparison Techniques

---
