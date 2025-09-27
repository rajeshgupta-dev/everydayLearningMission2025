# LeetCode Problem 65: Valid Number

## Problem Description

**Link:** [LeetCode Problem 65: Valid Number](https://leetcode.com/problems/valid-number/)

Given a string `s`, return whether `s` is a valid number.

### Valid Numbers Examples:

- `"2"`
- `"0089"`
- `"-0.1"`
- `"+3.14"`
- `"4."`
- `"-.9"`
- `"2e10"`
- `"-90E3"`
- `"3e+7"`
- `"+6e-1"`
- `"53.5e93"`
- `"-123.456e789"`

### Invalid Numbers Examples:

- `"abc"`
- `"1a"`
- `"1e"`
- `"e3"`
- `"99e2.5"`
- `"--6"`
- `"-+3"`
- `"95a54e53"`
- `"."`

---

## Problem Constraints

- `1 <= s.length <= 20`
- `s` consists only of English letters (both uppercase and lowercase), digits (0-9), plus `'+'`, minus `'-'`, or dot `'.'`.

---

## Problem Explanation

A valid number can be:

- An integer number, optionally preceded by a `'+'` or `'-'` sign.
- A decimal number, which can be in one of the following forms:
  - Digits followed by a dot (`.`), e.g., `"4."`
  - Digits followed by a dot and digits, e.g., `"3.14"`
  - A dot followed by digits, e.g., `".9"`
- An integer or decimal number followed by an optional exponent part.
- The exponent part is indicated by `'e'` or `'E'`, followed by an optional sign (`'+'` or `'-'`) and one or more digits.

---

## Approach

The problem can be efficiently solved using **regular expressions** by creating a pattern that matches all valid numbers as described above.

### Key points for the regex pattern:

- Optional sign at the start: `[+-]?`
- Numbers before or after a decimal point:
  - Digits followed by a dot and optional digits: `\d+\.\d*`
  - A dot followed by digits: `\.\d+`
  - Digits only: `\d+`
- Optional exponent part with `'e'` or `'E'`, optional sign, and digits: `([eE][+-]?\d+)?`
- Anchors `^` and `$` to match the whole string

---

## Code Solution (JavaScript)

```js
function isNumber(s) {
    s = s.trim();

    const regex = /^[+-]?((\d+\.\d*)|(\.\d+)|(\d+))([eE][+-]?\d+)?$/;
    return regex.test(s);
}

// Example Test Cases
console.log(isNumber("2"));           // true
console.log(isNumber("0089"));        // true
console.log(isNumber("-0.1"));        // true
console.log(isNumber("+3.14"));       // true
console.log(isNumber("4."));          // true
console.log(isNumber("-.9"));         // true
console.log(isNumber("2e10"));        // true
console.log(isNumber("-90E3"));       // true
console.log(isNumber("3e+7"));        // true
console.log(isNumber("+6e-1"));       // true
console.log(isNumber("53.5e93"));     // true
console.log(isNumber("-123.456e789")); // true

console.log(isNumber("abc"));         // false
console.log(isNumber("1a"));          // false
console.log(isNumber("1e"));          // false
console.log(isNumber("e3"));          // false
console.log(isNumber("99e2.5"));      // false
console.log(isNumber("--6"));         // false
console.log(isNumber("-+3"));         // false
console.log(isNumber("95a54e53"));    // false
console.log(isNumber("."));           // false
````

---

## Explanation of the Regex Pattern

* `^[+-]?`
  Matches an optional plus or minus sign at the beginning.

* `(\d+\.\d*|\.\d+|\d+)`
  Matches one of:

  * One or more digits followed by a dot and zero or more digits (`\d+\.\d*`)
  * A dot followed by one or more digits (`\.\d+`)
  * One or more digits only (`\d+`)

* `([eE][+-]?\d+)?`
  Matches an optional exponent part:

  * `'e'` or `'E'`
  * Optional sign `+` or `-`
  * One or more digits

* `$`
  End of the string to ensure the entire string matches the pattern.

---

## Summary

This solution uses a concise regex to validate the input string according to the problem constraints, efficiently determining whether the string represents a valid number or not.

---

Feel free to test and extend this solution as needed!

```
Rajsh Gupta
