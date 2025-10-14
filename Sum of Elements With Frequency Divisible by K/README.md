# 📘 Sum of Elements With Frequency Divisible by K

### 📝 Problem Statement

You are given an array of integers `nums` and an integer `k`.

Your task is to return the sum of all the numbers in `nums` **whose total frequency (how many times it appears) is divisible by `k`**.

> ⚠️ Important: If a number meets this condition, include **all its occurrences** in the sum.

If **no** number satisfies the condition, return `0`.

---

### 🔍 Examples

#### Example 1:
```

Input: nums = [1, 2, 2, 3, 3, 3, 3, 4], k = 2

Explanation:

* 1 appears 1 time ❌
* 2 appears 2 times ✅
* 3 appears 4 times ✅
* 4 appears 1 time ❌

We include 2 and 3 fully:
Sum = 2 + 2 + 3 + 3 + 3 + 3 = 16

Output: 16

```

#### Example 2:
```

Input: nums = [1, 2, 3, 4, 5], k = 2

Explanation:
No number appears with a frequency divisible by 2.

Output: 0

```

#### Example 3:
```

Input: nums = [4, 4, 4, 1, 2, 3], k = 3

Explanation:

* 4 appears 3 times ✅

Sum = 4 + 4 + 4 = 12

Output: 12

````

---

### 🚀 Approach (Simple Steps)

We’ll solve this in **two steps**:

1. **Count how many times each number appears** using a frequency map (object).
2. **Loop through the frequency map** and check:
   - If a number’s frequency is divisible by `k`, add all of its occurrences to the final sum.

---

### ✅ Code (JavaScript)

```javascript
var sumDivisibleByK = function(nums, k) {
    let freq = {}; // Step 1: Frequency map
    let sum = 0;

    // Count frequency
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    // Step 2: Add to sum if freq divisible by k
    for (let num in freq) {
        if (freq[num] % k === 0) {
            sum += freq[num] * parseInt(num); // Add all occurrences
        }
    }

    return sum;
};
````

---

### 🧠 Why This Works

* We only care about numbers that appear `k`, `2k`, `3k`... times (multiples of `k`)
* So we check each number's frequency and if it fits, we include it `freq * num` times.

---

### 🧪 Test This

```js
console.log(sumDivisibleByK([1,2,2,3,3,3,3,4], 2)); // 16
console.log(sumDivisibleByK([1,2,3,4,5], 2));       // 0
console.log(sumDivisibleByK([4,4,4,1,2,3], 3));     // 12
```

---

### 🙋‍♂️ Suitable For

* Beginners learning about frequency maps
* Anyone preparing for **easy-level coding interviews**
* Practicing basic **hash maps** and **modulo logic**


