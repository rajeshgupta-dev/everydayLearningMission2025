# Merge Sort in JavaScript

This project implements the classic **Merge Sort** algorithm in **JavaScript**, using a clean and recursive top-down approach. It’s a practical example of the **divide-and-conquer** strategy applied to sorting.

---

## 🧩 Problem Statement

**Task:**  
Given an array of integers, sort it in ascending order using the **Merge Sort algorithm**.

You must not use built-in sorting functions like `.sort()`. Instead, implement the algorithm manually.

---

## 🔗 Related Problem

- 💻 **LeetCode – [Sort an Array](https://leetcode.com/problems/sort-an-array/)**  
  Difficulty: Medium  
  Implement any `O(n log n)` algorithm like Merge Sort or Quick Sort to sort an array.

---

## 📘 What is Merge Sort?

**Merge Sort** is a **divide-and-conquer** algorithm that:
- Recursively splits the array into halves
- Sorts each half
- Merges the sorted halves

### 📊 Complexity:
| Type              | Value     |
|-------------------|-----------|
| Time (Best/Average/Worst) | O(n log n) |
| Space             | O(n)      |
| Stable            | ✅ Yes    |

---

## 🧠 How Merge Sort Works (Visualized)

```

Input: [5, 2, 9, 1, 5, 6]

Step 1: Divide
\[5, 2, 9]    \[1, 5, 6]
\[5] \[2, 9]   \[1] \[5, 6]
\[5] \[2] \[9]  \[1] \[5] \[6]

Step 2: Merge and Sort
\[2, 5, 9]    \[1, 5, 6]
Final: \[1, 2, 5, 5, 6, 9]

````

---

## 🛠️ Real-World Applications of Merge Sort

### ✅ When to Use Merge Sort:

| Scenario | Use Merge Sort? | Why |
|----------|-----------------|-----|
| Huge files or data streams | ✅✅✅ | Sorts in chunks (external merge sort) |
| Linked lists | ✅ | No need for random access |
| Stable sorting needed | ✅ | Maintains order of equal elements |
| Parallel/multithreaded sorting | ✅ | Easy to run independently on each half |

### 🚫 When Not Ideal:
- Sorting small arrays in memory (QuickSort is faster)
- Very low memory environments (Merge Sort uses extra space)

---

## 🔍 Real-World Use Cases

- **Database engines** (e.g., PostgreSQL external merge sort)
- **Big data pipelines** (sorting files across disks or network nodes)
- **Financial systems** (sorting transactions stably)
- **Sorting linked lists** (better than QuickSort here)

---

## ▶️ How to Run

Make sure Node.js is installed.  
Run the script:

```bash
node mergeSort.js
````

### Output:

```
Original: [5, 2, 9, 1, 5, 6]
Sorted:   [1, 2, 5, 5, 6, 9]
```

---

## 📁 File Structure

```
.
├── mergeSort.js   # Merge Sort implementation
└── README.md      # Project documentation
```

---

## 🧪 Example Code Preview

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Test
const arr = [5, 2, 9, 1, 5, 6];
const sorted = mergeSort(arr);
console.log("Original:", arr);
console.log("Sorted:", sorted);
```

---

## 📚 Learn More

* 🔗 [Merge Sort – Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
* 🔗 [GeeksForGeeks – Merge Sort](https://www.geeksforgeeks.org/merge-sort/)
* 🔗 [LeetCode – Sort an Array](https://leetcode.com/problems/sort-an-array/)
* 🔗 [HackerRank – Merge Sort: Counting Inversions](https://www.hackerrank.com/challenges/merge-sort/problem)

---

## ✅ Summary

| Feature        | Detail                                                           |
| -------------- | ---------------------------------------------------------------- |
| Algorithm      | Merge Sort (Top-Down)                                            |
| Language       | JavaScript (Node.js)                                             |
| Complexity     | O(n log n) Time, O(n) Space                                      |
| Stability      | ✅ Yes                                                            |
| Real Use Cases | Big data, files, databases                                       |
| Practice Link  | [LeetCode Problem](https://leetcode.com/problems/sort-an-array/) |

---

## 🙋‍♂️ Want to Improve It?

* Add support for **descending order**
* Use **custom comparators** for objects
* Add a **merge sort visualizer** for the browser
* Count **inversions** using merge steps

---

## 📜 License

Free to use and modify. Attribution appreciated.

```
