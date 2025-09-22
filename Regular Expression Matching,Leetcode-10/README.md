# 🧩 LeetCode Problem 10: Regular Expression Matching

This project provides a JavaScript solution to **[LeetCode Problem 10 – Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)** using **Dynamic Programming**.

---

## 🔍 Problem Description

You are given a string `s` and a pattern `p`. Implement regular expression matching with support for:

- `.` – Matches **any single character**
- `*` – Matches **zero or more** of the **preceding element**

> The match must cover the **entire input string**, not just a part of it.

---

## 📘 Examples

### Example 1:
```js
Input: s = "aa", p = "a"
Output: false
````

Explanation: "a" does not match the entire string "aa".

---

### Example 2:

```js
Input: s = "aa", p = "a*"
Output: true
```

Explanation: '\*' means zero or more of 'a', so it can become "aa".

---

### Example 3:

```js
Input: s = "ab", p = ".*"
Output: true
```

Explanation: ".\*" matches zero or more of any character.

---

## 📌 Constraints

* `1 <= s.length <= 20`
* `1 <= p.length <= 20`
* `s` contains only lowercase English letters.
* `p` contains only lowercase English letters, `.` and `*`.
* Each `*` will always follow a valid character.

---

## 🧠 Approach (Dynamic Programming)

We use a 2D DP table `dp[i][j]`:

* `dp[i][j]` is `true` if `s[0...i-1]` matches `p[0...j-1]`
* Start with `dp[0][0] = true` (empty string matches empty pattern)

### Special Cases

* **`.`** matches any character
* **`*`** can:

  * Match **zero** of the preceding character (ignore both `*` and its preceding character)
  * Match **one or more** if the preceding character matches the current character in `s`

---

## ✅ JavaScript Solution

```javascript
function isMatch(s, p) {
    const m = s.length;
    const n = p.length;

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
    dp[0][0] = true;

    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2];
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }

    return dp[m][n];
}
```

---

## 🧪 Test Cases

```javascript
console.log(isMatch("aa", "a"));           // false
console.log(isMatch("aa", "a*"));          // true
console.log(isMatch("ab", ".*"));          // true
console.log(isMatch("mississippi", "mis*is*p*.")); // false
console.log(isMatch("aab", "c*a*b"));      // true
```

---

## 🕒 Time & Space Complexity

* **Time Complexity**: `O(m * n)`
* **Space Complexity**: `O(m * n)`

Where `m = s.length`, `n = p.length`.

---

## 📄 Summary

This solution uses **bottom-up dynamic programming** to solve LeetCode Problem 10: Regular Expression Matching. It efficiently handles `.` and `*` operators by considering all possible ways they can match characters in the string `s`.

Useful for understanding how backtracking-style problems can be converted into dynamic programming solutions for better performance.

---

## 🔗 LeetCode Link

➡️ [https://leetcode.com/problems/regular-expression-matching/](https://leetcode.com/problems/regular-expression-matching/)

Rajesh Gupta
