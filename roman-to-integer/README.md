## 🏛️ Roman to Integer

> **Difficulty**: Easy
> **Topic**: Strings, Hash Maps
> **Platform**: LeetCode (#13)
> **Language**: JavaScript

---

### 📜 Problem Statement

Roman numerals are represented by seven different symbols:

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

For example:

* `II` = 2 (1 + 1)
* `XII` = 12 (10 + 1 + 1)
* `XXVII` = 27 (10 + 10 + 5 + 1 + 1)

However, some Roman numerals use a subtractive notation:

* `IV` = 4 (5 - 1)
* `IX` = 9 (10 - 1)
* `XL` = 40 (50 - 10)
* `XC` = 90 (100 - 10)
* `CD` = 400 (500 - 100)
* `CM` = 900 (1000 - 100)

Given a Roman numeral string, convert it to an integer.

---

### ✅ Constraints

* `1 <= s.length <= 15`
* `s` contains only the characters: `'I'`, `'V'`, `'X'`, `'L'`, `'C'`, `'D'`, `'M'`
* It is guaranteed that `s` is a valid Roman numeral in the range `[1, 3999]`

---

### 🔍 Examples

#### Example 1:

```js
Input: "III"
Output: 3
Explanation: III = 1 + 1 + 1 = 3
```

#### Example 2:

```js
Input: "LVIII"
Output: 58
Explanation: L = 50, V = 5, III = 3 → 50 + 5 + 3 = 58
```

#### Example 3:

```js
Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90, IV = 4 → 1000 + 900 + 90 + 4 = 1994
```

---

## 💡 Approach

We use a **greedy approach** by scanning each character of the string and comparing its value with the next character's value.

### Key Idea:

* If the current character has a **smaller value** than the next character → it's a **subtractive case**, so subtract it.
* Else → it's a **normal case**, so just add it.

### 🔁 Step-by-step Algorithm:

1. Create a map of Roman characters to their integer values.
2. Initialize a variable `total` to 0.
3. Loop through the input string:

   * If the current character is smaller than the next, subtract the current from the next and add the result to total.
   * Skip the next character (since it was already used).
   * Otherwise, just add the current character's value to total.
4. Return the final `total`.

---

## 🧠 Code Explanation

```javascript
function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];

        // If the next value is greater, subtract current from next
        if (next > current) {
            total += (next - current);
            i++; // Skip next since it was used
        } else {
            total += current;
        }
    }

    return total;
}
```

---

### 🧪 Test the Code

```javascript
console.log(romanToInt("III"));      // 3
console.log(romanToInt("LVIII"));    // 58
console.log(romanToInt("MCMXCIV"));  // 1994
```

---

## 🧮 Time & Space Complexity

| Metric           | Value |
| ---------------- | ----- |
| Time Complexity  | O(n)  |
| Space Complexity | O(1)  |

* We scan the string once, so time is **linear** with respect to input length.
* We use a fixed-size map (constant space).

---

## ✅ Summary

* Roman numerals can use subtractive notation (e.g., IV, IX).
* By comparing each symbol with the next, we can detect and handle these cases.
* Simple loop with a map provides an efficient and clean solution.

---

## 🧑‍💻 Author
* Rajesh Gupta
* LinkedIn:  https://www.linkedin.com/in/rajesh-gupta175/

