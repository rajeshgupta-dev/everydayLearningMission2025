# 📘 JavaScript Concepts Made Easy

A beginner-friendly guide to important JavaScript topics. Each concept is explained in simple language with real examples so you can understand and remember it easily.

---

## 📌 1. Lexical Environment

A **Lexical Environment** is where variables and functions live when the code is running. It is created every time a function is invoked.

**It includes:**
- Local variables inside the function
- A reference to the parent (outer) scope

### Example:

```js
function outer() {
  let a = 10;

  function inner() {
    console.log(a); // inner() has access to outer's variable
  }

  inner();
}

outer();
````

✔️ `inner()` remembers `a` because of the lexical environment.

---

## 📌 2. call(), apply(), bind()

These are methods to manually set the `this` value for a function.

---

### 🔹 call()

Calls a function and sets `this` to the provided object. Arguments are passed one by one.

```js
function greet(age) {
  console.log(this.name + " is " + age + " years old");
}

const person = { name: "John" };
greet.call(person, 25); // John is 25 years old
```

---

### 🔹 apply()

Same as `call()`, but arguments are passed as an array.

```js
greet.apply(person, [30]); // John is 30 years old
```

---

### 🔹 bind()

Returns a new function with `this` permanently set.

```js
const newGreet = greet.bind(person);
newGreet(40); // John is 40 years old
```

---

## 📌 3. Closure

A **closure** is when a function "remembers" the variables from its outer scope, even after that outer function has finished running.

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

---

## 📌 4. Hoisting

In JavaScript, variable and function declarations are "hoisted" to the top of their scope before code runs.

```js
console.log(a); // undefined
var a = 5;
```

✔️ `var a` is hoisted, but its value is not.

---

## 📌 5. this Keyword

`this` refers to the object that is calling the function.

```js
const person = {
  name: "Alice",
  sayHello: function () {
    console.log("Hi, I'm " + this.name);
  },
};

person.sayHello(); // Hi, I'm Alice
```

---

## 📌 6. Event Loop (Simplified)

JavaScript uses an **event loop** to handle asynchronous tasks like `setTimeout`, `Promises`, etc.

### Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("After 2 seconds");
}, 2000);

console.log("End");
```

**Output:**

```
Start
End
After 2 seconds
```

---

## 📌 7. Currying

Currying is a way of breaking a function with multiple arguments into smaller functions that take one argument at a time.

```js
function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(2)(3)); // 5
```

---

## 📌 8. Pure Function

A function is "pure" if:

* It returns the same output for the same input
* It has no side effects (does not change anything outside itself)

```js
function square(x) {
  return x * x;
}
```

---

## 📌 9. First-Class Functions

In JavaScript, functions can be treated like values: assigned to variables, passed to other functions, and returned from functions.

```js
function greet() {
  return "Hello";
}

function caller(fn) {
  console.log(fn());
}

caller(greet); // Hello
```

---

## 📌 10. Arrow Functions

Arrow functions are a shorter way to write functions and they do **not** have their own `this`.

```js
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5
```

---

## ✅ Summary Table

| Concept             | Description                                  |
| ------------------- | -------------------------------------------- |
| Lexical Environment | Scope where variables/functions live         |
| call()              | Calls a function with custom `this`          |
| apply()             | Same as call, but arguments in array         |
| bind()              | Returns new function with bound `this`       |
| Closure             | Remembers outer variables                    |
| Hoisting            | Moves declarations to top                    |
| this                | Refers to calling object                     |
| Event Loop          | Handles async tasks in JS                    |
| Currying            | Function that takes one arg at a time        |
| Pure Function       | Same input gives same output, no side effect |
| First-Class Func    | Functions treated like variables             |

---

### Rajesh Gupta
