# Maximum Rectangle Area from Sticks


## Problem Statement

You are given an array of positive integers where each integer represents the length of a stick. You can use two sticks of the same length to form one side of a rectangle. The goal is to find the **maximum area of a rectangle** you can create using these sticks. If it's not possible to form a rectangle, return `0`.

---

### Input

1. The first line contains an integer `T` — the number of test cases.
2. For each test case:
   - The first line contains an integer `N` — the number of sticks.
   - The second line contains `N` space-separated integers — the lengths of the sticks.

---

### Output

For each test case, print the maximum area of a rectangle that can be formed. If no rectangle can be formed, print `0`.

---

### Examples

#### Example 1:

**Input:**

```

1
5
2 3 4 2 4

```

**Output:**

```

8

```

**Explanation:**  
- Sticks of length 2 can form one side.  
- Sticks of length 4 can form the other side.  
- Maximum rectangle area = 2 × 4 = 8.

---

#### Example 2:

**Input:**

```

2
4
1 2 3 4
3
5 5 5

```

**Output:**

```

0
0

````

**Explanation:**  
- In the first test case, no two sticks have the same length, so no rectangle can be formed.  
- In the second test case, we have only three sticks of length 5, so we cannot form two sides of equal length for a rectangle.

---

## Approach

1. **Count frequency of each stick length**  
   We use an object to count how many sticks we have of each length.

2. **Find all possible rectangle sides**  
   Each rectangle side requires **two sticks of the same length**. So we divide the count of each stick by 2 to get the number of sides available.

3. **Sort sides in descending order**  
   Sorting ensures we can pick the two largest sides to get the maximum area.

4. **Calculate the maximum area**  
   If we have at least two sides, the largest rectangle area is the product of the two largest side lengths. Otherwise, the area is 0.

---

## Code

```javascript
function runProgram(input) {
  let lines = input.trim().split("\n");
  let tc = Number(lines[0]);
  let ind = 1;

  for (let i = 0; i < tc; i++) {
    let n = Number(lines[ind++]);
    let arr = lines[ind++].split(" ").map(Number);

    // Step 1: count frequency of each stick length
    let obj = {};
    for (let j = 0; j < n; j++) {
      obj[arr[j]] = (obj[arr[j]] || 0) + 1;
    }

    // Step 2: collect all possible sides
    let pairs = [];
    for (let key in obj) {
      let count = Math.floor(obj[key] / 2);
      for (let k = 0; k < count; k++) {
        pairs.push(Number(key));
      }
    }

    // Step 3: sort pairs descending
    pairs.sort((a, b) => b - a);

    // Step 4: calculate max area
    if (pairs.length >= 2) {
      let area = pairs[0] * pairs[1];
      console.log(area);
    } else {
      console.log(0);
    }
  }
}
````

---

## Complexity

* **Time Complexity:** O(N log N) — counting sticks takes O(N), sorting the sides takes O(N log N).
* **Space Complexity:** O(N) — for storing frequency counts and possible sides.

---

This README explains the problem, the input/output format, and the approach clearly so anyone visiting your repository can understand it immediately.

```
Rajesh Gupta