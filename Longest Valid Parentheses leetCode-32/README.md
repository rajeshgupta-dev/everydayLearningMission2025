# 🧩 Longest Valid Parentheses

This repository contains the solution to the **LeetCode Hard Problem: [32. Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)**, written in JavaScript.

---

## 📌 Problem Statement

Given a string containing just the characters `'('` and `')'`, your task is to find the **length of the longest valid (well-formed) parentheses substring**.

A valid parentheses substring means that all opening brackets `'('` are properly closed with closing brackets `')'`, and they are in the correct order.

---

## 🧠 Examples

### Example 1:
```

Input: s = "(()"
Output: 2
Explanation: The longest valid substring is "()"

```

### Example 2:
```

Input: s = ")()())"
Output: 4
Explanation: The longest valid substring is "()()"

```

### Example 3:
```

Input: s = ""
Output: 0

````

---

## 🔒 Constraints

- `0 <= s.length <= 30,000`
- `s[i]` is either `'('` or `')'`

---

## 🛠️ Approach - Using Stack

We use a **stack** to help us track unmatched parentheses positions. Here's a very simple explanation:

### ✅ Idea:
- Valid parentheses must be **matched** and in **correct order**.
- Use a **stack** to keep track of the **indexes** of the characters.
- Push index of `'('` to the stack.
- For every `')'`, pop the last `'('` from the stack.
  - If stack becomes empty after popping, push the current index. (This marks a new potential start).
  - If the stack is **not** empty, calculate the **length of the current valid substring** by subtracting the current index from the index on top of the stack.
- Keep track of the **maximum length** found.

### 📦 Why start stack with -1?
We add `-1` as the first value in the stack to handle edge cases where the first character is `'('` and the valid substring starts from index `0`.

---

## 📄 JavaScript Code

```javascript
function longestValidParentheses(s) {
    let maxLen = 0;
    let stack = [-1]; // Start with -1 to handle edge cases

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop(); // Pop last open bracket index
            if (stack.length === 0) {
                stack.push(i); // Start a new base
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLen;
}
````

---

## 🧪 Test Cases

```javascript
console.log(longestValidParentheses("(()"));       // Output: 2
console.log(longestValidParentheses(")()())"));    // Output: 4
console.log(longestValidParentheses(""));          // Output: 0
console.log(longestValidParentheses("()(()"));     // Output: 2
console.log(longestValidParentheses("()(())"));    // Output: 6
```

---

## 🏁 Conclusion

This problem is a classic example of using **stacks** to solve matching and balancing problems. The stack helps us track unmatched brackets, and allows us to calculate the length of valid substrings efficiently.

If you're new to stacks or parentheses problems, this is a great way to learn how stack-based thinking can help in parsing structured text.

---

## 📚 Related Topics

* Stack
* Dynamic Programming (Alternative approaches)
* String Parsing

---

## 📎 LeetCode Link

[🔗 LeetCode Problem #32 - Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)

---

## 📁 File Structure

```
📁 longest-valid-parentheses
├── README.md
└── solution.js
```

---

Feel free to ⭐ star the repo if you find it helpful!

```
Rajesh Kumar
```
