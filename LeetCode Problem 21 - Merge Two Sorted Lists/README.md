# 🧩 LeetCode Problem 21 - Merge Two Sorted Lists

## 🚀 Problem Statement

You are given the **heads of two sorted linked lists**, `list1` and `list2`.  
Your task is to **merge the two lists into one sorted linked list**, by **rearranging the existing nodes** (do not create new nodes).

🔁 The final linked list should be made by **splicing together the nodes** of the original two lists.

Return the **head of the merged linked list**.

---

## 📘 Example

### Example 1:

```

Input:  list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

```

### Example 2:

```

Input:  list1 = [], list2 = []
Output: []

```

### Example 3:

```

Input:  list1 = [], list2 = [0]
Output: [0]

```

---

## ✅ Constraints

- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are **sorted in non-decreasing order**.

---

## 🧠 Approach

### 🔧 1. Iterative Solution

We use a **dummy node** to build the merged list step by step.

### 🪜 Steps:

1. Create a dummy node and a pointer `current` pointing to it.
2. Compare the `val` of both `list1` and `list2`.
3. Attach the smaller node to `current.next`, and move that list’s pointer forward.
4. Repeat until one of the lists is empty.
5. Attach the remaining part of the non-empty list to `current.next`.

### 🧾 Code (JavaScript):

```js
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(-1);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Attach the rest of the list (if any)
  current.next = list1 !== null ? list1 : list2;

  return dummy.next;
};
```

---

### 🔁 2. Recursive Solution (Shorter)

This version uses recursion to merge the lists by comparing node values at each step.

### 🧾 Code (JavaScript):

```js
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
```

---

## 📚 Helper Functions for Testing

You can use these to **convert arrays to linked lists** and back for testing:

```js
function arrayToList(arr) {
  let dummy = new ListNode(-1);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

// Example test
let list1 = arrayToList([1, 2, 4]);
let list2 = arrayToList([1, 3, 4]);

let merged = mergeTwoLists(list1, list2);
console.log(listToArray(merged)); // Output: [1, 1, 2, 3, 4, 4]
```

---

## 🧠 Time and Space Complexity

| Approach  | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| Iterative | O(n + m)        | O(1)             |
| Recursive | O(n + m)        | O(n + m)         |

> Where `n` is the length of `list1` and `m` is the length of `list2`.

---

## 📌 Summary

- Merge two sorted **linked lists**, not arrays.
- Reuse nodes (no new list creation).
- Use either an **iterative approach** (dummy node) or **recursive approach**.
- This is LeetCode **Problem #21**.

---

## 🙌 Contributing

If you have a cleaner solution or want to add different languages (Python, C++, Java), feel free to contribute!

---

## 🔗 LeetCode Link

[LeetCode Problem 21 - Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

Rajesh Gupta
