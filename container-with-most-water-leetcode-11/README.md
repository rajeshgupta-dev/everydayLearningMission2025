
# 🧊 Container With Most Water (LeetCode - Medium) 11

**LeetCode Problem Link**: [Container With Most Water](https://leetcode.com/problems/container-with-most-water/)

---

## 🧠 Problem Description

You are given an array of non-negative integers called `height`. Each element in the array represents the height of a vertical line drawn on the x-axis. The x-coordinates of these lines are the indices of the array.

Your task is to **find two lines** from the array such that, together with the x-axis, they form a **container** that can hold the **most water**.

> ⚠️ You cannot slant the container. It must be vertical.

---

### 📷 Example 1:

**Input:**
```

height = [1,8,6,2,5,4,8,3,7]

```

**Output:**
```

49

```

**Explanation:**

- The best container is formed between `height[1] = 8` and `height[8] = 7`.
- The distance between them is `8 - 1 = 7`.
- The water it can hold = `min(8, 7) * 7 = 7 * 7 = 49`.

---

### 📷 Example 2:

**Input:**
```

height = [1,1]

```

**Output:**
```

1

````

---

## ✅ Constraints:

- `2 <= height.length <= 10^5`
- `0 <= height[i] <= 10^4`

---

## 💡 Intuition (In Simple Words)

We want to pick two lines from the array that can hold **maximum water** between them.

The amount of water depends on:
1. **The shorter line** (because water can't go above it).
2. **The distance between the two lines** (wider containers can hold more).

So, the **Area = min(height[left], height[right]) * (right - left)**

We want to maximize this area.

---

## 🏁 Approach (Two Pointer Technique)

We use **two pointers**, one at the start and one at the end of the array:

1. Start with `left = 0` and `right = n - 1`.
2. Calculate the area using the two lines at these pointers.
3. Keep track of the  **maximum area** found so far.
4. Move the pointer pointing to the **shorter line**:
   - If `height[left] < height[right]`, move `left` one step to the right.
   - Else, move `right` one step to the left.
5. Repeat until the two pointers meet.

This approach is efficient and runs in linear time.

---

## 🧑‍💻 JavaScript Code

```javascript
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        // Calculate the width between the two lines
        const width = right - left;
        
        // Height is limited by the shorter line
        const area = Math.min(height[left], height[right]) * width;

        // Update the maximum area if current area is larger
        maxArea = Math.max(maxArea, area);

        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}
````

---

## ⏱️ Time and Space Complexity

| Complexity | Value |
| ---------- | ----- |
| Time       | O(n)  |
| Space      | O(1)  |

---

## 📌 Summary

* Use **two pointers** to check all possible containers efficiently.
* Always move the pointer with the  **shorter line**.
* This gives the **maximum area** in just one pass through the array.

---

## 📎 Similar Problems

* Trapping Rain Water
* Largest Rectangle in Histogram
* Maximal Rectangle

---

> ✨ If you found this helpful, feel free to ⭐ the repo or follow me on GitHub!

```
Rajesh Gupta
```


