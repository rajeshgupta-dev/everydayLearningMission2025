# 🚀 LeetCode Problem 30: Substring with Concatenation of All Words

## 📘 Problem Statement

You are given a string `s` and an array of strings `words`. All the strings in `words` are of the same length.

A **concatenated substring** is a substring in `s` that is a concatenation of **each word in `words` exactly once**, in **any order**, and **without any intervening characters**.

Your task is to **return all starting indices** of such substrings in `s`.

---

## 🔍 Example

### Example 1:

**Input:**
```

s = "barfoothefoobarman"
words = \["foo","bar"]

```

**Output:**
```

\[0, 9]

```

**Explanation:**  
Substrings starting at index `0` ("barfoo") and index `9` ("foobar") are valid permutations of the words.

---

### Example 2:

**Input:**
```

s = "wordgoodgoodgoodbestword"
words = \["word","good","best","word"]

```

**Output:**
```

\[]

```

**Explanation:**  
No substring is a concatenation of all words exactly once.

---

### Example 3:

**Input:**
```

s = "barfoofoobarthefoobarman"
words = \["bar","foo","the"]

```

**Output:**
```

\[6, 9, 12]

````

**Explanation:**  
Valid substrings are:
- "foobarthe" at index 6
- "barthefoo" at index 9
- "thefoobar" at index 12

---

## ✅ Constraints

- `1 <= s.length <= 10^4`
- `1 <= words.length <= 5000`
- `1 <= words[i].length <= 30`
- All strings in `s` and `words` consist of **lowercase English letters**
- All words in the list `words` are of **equal length**

---

## 💡 Approach

We use the **sliding window** technique combined with **hash maps** to efficiently check for valid permutations of words.

### Step-by-step:

1. **Preprocess:**  
   Create a frequency map (`wordMap`) of all the words in the input array.

2. **Sliding Window:**  
   Use a sliding window of size `wordLength * numberOfWords` to iterate through the string `s`.

3. **Multiple Offsets:**  
   Loop through all possible starting points (`0` to `wordLength - 1`) to ensure you check every alignment.

4. **Check Each Window:**  
   For each window:
   - Extract word-by-word substrings.
   - Use a temporary map (`currentMap`) to count frequencies in the current window.
   - Compare it with `wordMap`.

5. **Valid Match:**  
   If maps match, push the start index to the result.

---

## 🧠 Time and Space Complexity

| Complexity      | Value                 |
|----------------|-----------------------|
| Time           | O(N × W)              |
| Space          | O(W)                  |

- `N` = length of string `s`
- `W` = number of words in `words`

---

## 💻 JavaScript Solution

```javascript
function findSubstring(s, words) {
  if (!s || words.length === 0) return [];

  const wordLen = words[0].length;
  const wordCount = words.length;
  const totalLen = wordLen * wordCount;
  const wordMap = new Map();

  // Step 1: Count frequency of each word in 'words'
  for (const word of words) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
  }

  const result = [];

  // Step 2: Try each possible offset within a word length
  for (let i = 0; i < wordLen; i++) {
    let left = i;
    let right = i;
    let currentMap = new Map();
    let count = 0;

    while (right + wordLen <= s.length) {
      const word = s.substring(right, right + wordLen);
      right += wordLen;

      if (wordMap.has(word)) {
        currentMap.set(word, (currentMap.get(word) || 0) + 1);
        count++;

        // If word appears more than expected, move left pointer
        while (currentMap.get(word) > wordMap.get(word)) {
          const leftWord = s.substring(left, left + wordLen);
          currentMap.set(leftWord, currentMap.get(leftWord) - 1);
          left += wordLen;
          count--;
        }

        // If all words matched
        if (count === wordCount) {
          result.push(left);
        }
      } else {
        // Reset if word not in the wordMap
        currentMap.clear();
        count = 0;
        left = right;
      }
    }
  }

  return result;
}
````

---

## 📦 Run This Locally

You can test this in your local environment using Node.js:

```bash
node yourScript.js
```

---

## 🤝 Contributing

Feel free to open issues or pull requests if you have better approaches or optimizations!

---

## ⭐️ If you found this helpful...

Consider giving this repository a star ⭐ and sharing it with your peers!

---

## 📚 Related Topics

* Hash Maps
* Sliding Window
* Two Pointers
* String Manipulation

Rajesh Gupta
