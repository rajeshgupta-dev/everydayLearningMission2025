# 🧠 Count 1's in Binary Representation

This JavaScript program calculates how many `1`s appear in the binary representation of each number from `0` to `n`.

It’s designed to be simple and beginner-friendly, with readable logic and helpful comments in the code.

---

## 📌 Problem Statement

Given a number `n`, print the number of `1`s in the binary representation of every number from `0` to `n`, all on one line separated by spaces.

### 🔁 You can test this for multiple values of `n`.

---

## 📥 Input Format

- A single integer `n`.

You can call the function multiple times with different values of `n`.

---

## 📤 Output Format

- Print the number of `1`s in the binary representation for every number from `0` to `n`, space-separated.

---

## ✅ Example

### Function Calls:
```js
countBitsInBinary(2);
countBitsInBinary(5);
````

### Output:

```
0 1 1
0 1 1 2 1 2
```

### Explanation:

#### For `n = 2`:

* 0 → `0`   → 0 ones
* 1 → `1`   → 1 one
* 2 → `10`  → 1 one
  ➡️ Output: `0 1 1`

#### For `n = 5`:

* 0 → `0`    → 0
* 1 → `1`    → 1
* 2 → `10`   → 1
* 3 → `11`   → 2
* 4 → `100`  → 1
* 5 → `101`  → 2
  ➡️ Output: `0 1 1 2 1 2`

---

## 🧠 How It Works (Logic)

1. Start from 0 and go up to `n`.
2. Convert each number to its binary form using `.toString(2)`.
3. Count how many `'1'`s are in that binary string using `.split("1").length - 1`.
4. Store the counts in an array.
5. Print the array as a space-separated string.

---

## 🚀 How to Run the Program

### 1️⃣ Save the Code in a File (e.g. `countBits.js`)

```javascript
function countBitsInBinary(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
        let binary = i.toString(2);
        let onesCount = binary.split("1").length - 1;
        result.push(onesCount);
    }
    console.log(result.join(" "));
}

// Example calls
countBitsInBinary(2);   // Output: 0 1 1
countBitsInBinary(5);   // Output: 0 1 1 2 1 2
countBitsInBinary(8);   // Output: 0 1 1 2 1 2 2 3 1
```

### 2️⃣ Run with Node.js:

```bash
node countBits.js
```

---

## 🧪 More Test Cases

| Input `n` | Output                  |
| --------: | ----------------------- |
|         0 | `0`                     |
|         3 | `0 1 1 2`               |
|         4 | `0 1 1 2 1`             |
|         6 | `0 1 1 2 1 2 2`         |
|        10 | `0 1 1 2 1 2 2 3 1 2 2` |

---

## 💡 Bonus: Faster Version (Optional)

If you're working with large values of `n`, you can use bitwise operations for faster counting instead of converting to binary strings.

Example:

```javascript
function countOnes(n) {
    let count = 0;
    while (n > 0) {
        n = n & (n - 1); // Remove the lowest set bit
        count++;
    }
    return count;
}
```

---

## 👨‍💻 Author

Made with ❤️ by [Rajesh Gupta](https://github.com/rajeshgu)

---
