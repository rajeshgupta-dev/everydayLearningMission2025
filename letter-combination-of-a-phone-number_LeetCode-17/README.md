# LeetCode 17: Letter Combinations of a Phone Number

## 📝 Problem Description

Given a string containing digits from `2` to `9`, return **all possible letter combinations** that the number could represent. The mapping of digits to letters is just like the telephone buttons.

### 🔢 Digit to Letter Mapping:

```

2 → "abc"
3 → "def"
4 → "ghi"
5 → "jkl"
6 → "mno"
7 → "pqrs"
8 → "tuv"
9 → "wxyz"

```

📌 **Note**: Digit `1` does not map to any letters.

---

## 📥 Input

- A string `digits` containing digits from `2` to `9`.

## 📤 Output

- An array of all possible letter combinations that the input digits could represent.

---

## 💡 Examples

### Example 1:
```

Input: digits = "23"
Output: \["ad","ae","af","bd","be","bf","cd","ce","cf"]

```

### Example 2:
```

Input: digits = ""
Output: \[]

```

### Example 3:
```

Input: digits = "2"
Output: \["a","b","c"]

```

---

## ✅ Constraints

- `0 <= digits.length <= 4`
- `digits[i]` is a digit from `'2'` to `'9'`.

---

## 🔍 Approach

We use **backtracking (DFS)** to solve this problem.

### Why Backtracking?

Backtracking is helpful when we need to **explore all combinations**. At each step, we choose a letter from the current digit and move to the next digit, building a path. When the path is complete (same length as input digits), we save it.

---

## 🧠 Step-by-step Explanation

Let's say the input is `"23"`:

1. The digit `2` maps to `"abc"`
2. The digit `3` maps to `"def"`

We need to **combine each letter of '2'** with **each letter of '3'**:

- From 'a' → ['ad', 'ae', 'af']
- From 'b' → ['bd', 'be', 'bf']
- From 'c' → ['cd', 'ce', 'cf']

So the output becomes:
```

\["ad","ae","af","bd","be","bf","cd","ce","cf"]

````

---

## 🧑‍💻 JavaScript Code

```javascript
function letterCombinations(digits) {
    if (!digits.length) return [];

    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result = [];

    function backtrack(index, path) {
        // Base case: if path is complete, push to result
        if (path.length === digits.length) {
            result.push(path);
            return;
        }

        // Get the current digit's possible letters
        const letters = phoneMap[digits[index]];
        for (let letter of letters) {
            backtrack(index + 1, path + letter); // Move to next digit
        }
    }

    backtrack(0, '');
    return result;
}
````

---

## ⏱️ Time and Space Complexity

| Complexity | Value                                                    |
| ---------- | -------------------------------------------------------- |
| ⌛ Time     | `O(4^n)` – Because each digit can map to up to 4 letters |
| 🧠 Space   | `O(n)` – Due to recursion stack and result storage       |

---

## 🧪 Test It Yourself

```javascript
console.log(letterCombinations("23"));
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

console.log(letterCombinations(""));
// Output: []

console.log(letterCombinations("9"));
// Output: ["w","x","y","z"]
```

---

## 🙌 Summary

* Use **backtracking** to explore all letter combinations.
* Build the result **character-by-character** using recursion.
* The approach is efficient for the constraint (max 4 digits).

---

## 📚 Related Topics

* Backtracking
* Depth-First Search (DFS)
* Recursion
* Combinations

---

## 🔗 LeetCode Link

[LeetCode Problem 17 – Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

Rajesh Gupta

