## 📌 Problem Statement

Virat and Rohit don't like each other, though they have many similarities.  
You are given two texts (strings) written by Virat and Rohit.  
Your task is to write a program that **calculates the length of the longest similar characters in the text written by both**.

The longest set of similar characters:

- Must appear in both strings,
- Must appear **in the same order**,
- But **need not be continuous**.

📝 Note: This is a **Longest Common Subsequence** problem, not a substring problem.

---

## 🧠 Explanation

A **subsequence** is a sequence of characters that appears in the same relative order but not necessarily contiguous.

For example, in the strings:

- Virat's: `"AEDFHR"`
- Rohit's: `"ABCDGH"`

The common subsequence is `"ADH"` → it appears in both, in the same order, and the characters don't need to be next to each other.

So, the **length of the longest common subsequence is `3`**.

---

## 💡 Approach

We solve this problem using **Dynamic Programming**:

1. Initialize a 2D DP table of size `(m+1) x (n+1)` where `m` and `n` are the lengths of the two strings.
2. Loop through each character of both strings.
3. If characters match:  
   `dp[i][j] = dp[i-1][j-1] + 1`
4. If they don't match:  
   `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`
5. Return `dp[m][n]` which contains the length of the LCS.

---

## 🧪 Example

### ✅ Input:

```

AEDFHR
ABCDGH

```

### ✅ Output:

```

3

```

### ✅ Explanation:

The longest common subsequence is `"ADH"` → length is `3`.

---

## 📦 Function Usage

```js

function findLongestCommonSubsequenceLength(str1, str2)
```

### ▶️ Example Usage:

```js
console.log(findLongestCommonSubsequenceLength("AEDFHR", "ABCDGH")); // Output: 3
console.log(findLongestCommonSubsequenceLength("AGGTAB", "GXTXAYB")); // Output: 4
console.log(findLongestCommonSubsequenceLength("ABC", "DEF")); // Output: 0
```

---

## 📌 Complete JavaScript Code

```js
function findLongestCommonSubsequenceLength(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}
```

---

## 🧪 Test Cases

| Virat's Text | Rohit's Text | Expected Output | LCS    |
| ------------ | ------------ | --------------- | ------ |
| AEDFHR       | ABCDGH       | 3               | ADH    |
| AGGTAB       | GXTXAYB      | 4               | GTAB   |
| ABCDEF       | FBDAMN       | 2               | BD     |
| ABC          | DEF          | 0               | (None) |
| ""           | ""           | 0               | (None) |
| A            | A            | 1               | A      |

---

## 🛠️ How to Run Locally

1. Create a file `lcs.js`.
2. Paste the full code into it.
3. Run in terminal:

```bash
node lcs.js
```

Or call the function in any JavaScript environment:

```js
findLongestCommonSubsequenceLength("AEDFHR", "ABCDGH"); // Output: 3
```

---

## 🚀 Optional Enhancements

- Return the actual **LCS string**, not just the length
- Visualize the DP table
- Use recursion + memoization (top-down approach)

---

## 👨‍💻 Author

Rajesh Gupta

---
