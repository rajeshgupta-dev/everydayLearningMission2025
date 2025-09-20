# 🔀 Zigzag Conversion

> **LeetCode Problem #6** – Medium  
> **Language**: JavaScript  
> **Topics**: Strings, Simulation  

---

## 🧩 Problem Statement

Given a string `s` and an integer `numRows`, write the characters of `s` in a zigzag pattern on a given number of rows like this:

For example, with `s = "PAYPALISHIRING"` and `numRows = 3`, the zigzag pattern is:

```

P   A   H   N
A P L S I I G
Y   I   R

````

Reading line by line, the output is:  
**`"PAHNAPLSIIGYIR"`**

---

## 🎯 Objective

Implement a function `convert(s, numRows)` that takes the string `s` and converts it to the zigzag pattern, then returns the concatenated string read line-by-line.

---

## ⚙️ Constraints

- `1 <= s.length <= 1000`
- `s` contains English letters (upper and lower case), commas `,` and periods `.`
- `1 <= numRows <= 1000`

---

## 💡 Approach & Explanation

The zigzag pattern can be simulated by:

1. Creating an array `rows` where each element holds the characters for one row.
2. Using two variables:
   - `currentRow` to track which row the next character belongs to.
   - `goingDown` boolean to know whether to move down the rows or up.
3. Iterating through the input string character by character:
   - Append the current character to the string for `rows[currentRow]`.
   - If you reach the top (`currentRow === 0`) or the bottom (`currentRow === numRows - 1`), reverse the direction.
   - Move `currentRow` up or down accordingly.
4. Finally, join all the strings in `rows` to get the final converted string.

---

## 🧠 JavaScript Solution

```javascript
function convert(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    const rows = new Array(Math.min(numRows, s.length)).fill('');
    let currentRow = 0;
    let goingDown = false;

    for (let char of s) {
        rows[currentRow] += char;

        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }

    return rows.join('');
}
````

---

## 🧪 Example Usage

```javascript
console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"
console.log(convert("A", 1));              // Output: "A"
```

---

## 📊 Complexity Analysis

| Metric           | Value |
| ---------------- | ----- |
| Time Complexity  | O(n)  |
| Space Complexity | O(n)  |

* `n` is the length of the input string.
* Each character is processed once.
* Additional space is used to store the rows.

---

## ✍️ Author

* Rajesh Gupta
* LeetCode: \[https://www.linkedin.com/in/rajesh-gupta175/]

---
