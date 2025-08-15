---

### 📄 `README.md`

````markdown
# 🔍 Subsequence Checker

A simple JavaScript program that checks whether one string is a **subsequence** of another using a linear-time algorithm.

---

## 📌 Problem Statement

Given two strings `s1` and `s2`, determine whether `s1` is a **subsequence** of `s2`.

> A string `s1` is a subsequence of `s2` if all characters of `s1` appear in `s2` in the same order, but not necessarily consecutively.

---

## ✅ Examples

| s1  | s2    | Output |
| --- | ----- | ------ |
| abc | adbce | YES    |
| ax  | xaa   | NO     |
| ace | abcde | YES    |
| aec | abcde | NO     |

---

## 🧠 Approach

The program uses a **two-pointer technique** to efficiently check whether `s1` is a subsequence of `s2`.

### 🔁 How it works:

- Traverse both strings using two pointers (`i` for `s1`, `j` for `s2`).
- If characters match (`s1[i] === s2[j]`), move pointer `i`.
- Always move pointer `j`.
- If pointer `i` reaches the end of `s1`, it means all characters have matched in order → `s1` is a subsequence.

### ⏱️ Time Complexity:

- **O(n + m)** where `n` is the length of `s1` and `m` is the length of `s2`.

---

## 📁 File Structure

```bash
.
├── is_subsequence_checker.js   # Main code file
└── README.md                   # Documentation
```

---

## 🧪 Test Cases

You can test the program using the sample test cases:

```javascript
checkSubsequence("abc", "adbce"); // YES
checkSubsequence("ax", "xaa"); // NO
checkSubsequence("ace", "abcde"); // YES
checkSubsequence("aec", "abcde"); // NO
```

---

## 🚀 How to Run

### 📦 Prerequisites

- Node.js installed on your machine.

### ▶️ Run the script

1. Save the file as `is_subsequence_checker.js`.
2. Open your terminal.
3. Run the program with Node:

```bash
node is_subsequence_checker.js
```

---

## 🧾 Code Overview

```javascript
function checkSubsequence(s1, s2) {
  if (isSubsequence(s1, s2)) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

function isSubsequence(s1, s2) {
  let i = 0,
    j = 0;
  while (i < s1.length && j < s2.length) {
    if (s1[i] === s2[j]) {
      i++;
    }
    j++;
  }
  return i === s1.length;
}
```

---

## 👨‍🏫 Learning Goals

- Understand what a **subsequence** is.
- Learn how to use the **two-pointer technique**.
- Practice clean coding with functions and descriptive names.
- Improve problem-solving and algorithmic thinking.

---

## 📜 License

This project is open-source and free to use.

---

## 🙌 Contributions

Feel free to fork the repo and submit pull requests with:

- More test cases
- Alternative solutions
- Input support from terminal or file

---

## 💬 Feedback

Got feedback or questions? Feel free to open an issue or reach out!

```
Let me know if you'd like the GitHub repository structure or additional formatting (like badges or images).
```

---
