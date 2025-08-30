# 📘 React.js Basic Interview Questions & Answers

This README contains clear and detailed explanations of common React interview questions. It’s designed for beginners and junior developers who want to prepare for frontend job interviews using React.

---

### 1. **What is React?**

**Answer:**  
React is an **open-source JavaScript library** used to build **user interfaces**, especially for **single-page applications (SPAs)**. It was created by **Facebook** to make UI development easier and more efficient.

**Key Features:**
- **Component-Based**: UIs are built using small, reusable pieces called components.
- **Declarative**: You describe what the UI should look like, and React handles the updates.
- **Virtual DOM**: React uses a fast, in-memory version of the DOM to improve performance.

**Why it's used:**
- Easier to manage complex UI
- Better performance
- Supports mobile app development via React Native

---

### 2. **What is JSX?**

**Answer:**  
JSX (JavaScript XML) is a syntax extension that allows you to write **HTML-like code inside JavaScript**. It's used to describe what the UI should look like in React.

**Example:**
```jsx
const greeting = <h1>Hello, React!</h1>;
````

**Why it's useful:**

* Makes your code more readable and expressive
* React uses it to create elements behind the scenes
* Helps avoid `document.createElement()` calls

---

### 3. **What is the Virtual DOM?**

**Answer:**
The **Virtual DOM** is a lightweight, in-memory representation of the real DOM. It allows React to update only the parts of the page that actually changed, instead of updating the whole UI.

**How it works:**

1. When a component’s state or props change, React updates the Virtual DOM.
2. It then compares the new Virtual DOM with the previous one using a process called **"diffing"**.
3. Only the changed parts are updated in the **real DOM**, making updates faster and more efficient.

---

### 4. **What are Components in React?**

**Answer:**
Components are the **core building blocks** of any React application. Each component represents a part of the UI and can be reused throughout your app.

**Types of Components:**

* **Functional Components** (modern, recommended)
* **Class Components** (older, less common now)

**Example – Functional Component:**

```jsx
function Greeting() {
  return <h1>Hello, World!</h1>;
}
```

**Benefits:**

* Reusability
* Cleaner and modular code
* Easier testing and maintenance

---

### 5. **What are Props in React?**

**Answer:**
Props (short for “properties”) are used to **pass data from parent to child components**.

**Key Points:**

* Props are **read-only**
* Help make components **dynamic** and **reusable**

**Example:**

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Usage
<Welcome name="Alice" />
```

---

### 6. **What is State in React?**

**Answer:**
State is a special built-in object used to store **data that can change over time** within a component. It’s what makes a component dynamic and interactive.

**Example using useState Hook:**

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

**Why it matters:**

* Triggers re-render when data changes
* Allows interactivity (e.g., click counters, form inputs)

---

### 7. **Props vs State**

| Feature       | Props                         | State                           |
| ------------- | ----------------------------- | ------------------------------- |
| Definition    | Data passed to a component    | Data managed inside a component |
| Mutability    | Immutable (cannot change)     | Mutable (can be changed)        |
| Ownership     | Passed by parent              | Owned and updated internally    |
| Usage Example | `<Component title="Hello" />` | `useState()` or `this.state`    |

---

### 8. **What are Hooks in React?**

**Answer:**
Hooks are special functions that let you **use state and other React features** inside functional components.

**Why Hooks?**

* Replace class component features (like lifecycle methods)
* Cleaner and more readable code

**Common Hooks:**

* `useState()` – adds state to functional components
* `useEffect()` – handles side effects (e.g., fetching data)
* `useContext()` – uses data from context

---

### 9. **What is useEffect?**

**Answer:**
`useEffect` is a Hook used to **perform side effects** in functional components. It runs after rendering.

**Use Cases:**

* Data fetching
* Subscriptions
* Manual DOM updates

**Example:**

```jsx
useEffect(() => {
  console.log('Component mounted');
}, []);
```

**Explanation:**

* Runs once after the first render when the dependency array `[]` is empty
* Runs again when any value inside the array changes

---

### 10. **What is Conditional Rendering?**

**Answer:**
Conditional rendering is when components render **different UI based on a condition** (like login status).

**Example using ternary operator:**

```jsx
{isLoggedIn ? <Logout /> : <Login />}
```

**Other methods:**

* `if` statements
* Logical `&&` (short-circuiting)

---

### 11. **What are Keys in React?**

**Answer:**
Keys are unique identifiers given to list elements to help React **track changes, updates, or deletions** efficiently.

**Why it's important:**

* Improves performance
* Prevents bugs when rendering lists

**Example:**

```jsx
items.map(item => <li key={item.id}>{item.name}</li>);
```

> Avoid using index as a key unless items won’t change.

---

### 12. **What is Lifting State Up?**

**Answer:**
Lifting state up means moving the shared state to the **nearest common ancestor component** when multiple child components need access to the same data.

**Why?**

* Ensures all components get the latest state
* Avoids redundant or out-of-sync states

**Example Flow:**

```
Parent Component
  ├── Child A (updates the state)
  └── Child B (reads the state)
```

---

### 13. **Functional vs Class Components**

| Feature          | Functional Component   | Class Component                           |
| ---------------- | ---------------------- | ----------------------------------------- |
| Syntax           | `function Component()` | `class Component extends React.Component` |
| State            | With `useState()` Hook | With `this.state`                         |
| Lifecycle        | `useEffect()`          | `componentDidMount()`, etc.               |
| Preferred Today? | ✅ Yes                  | ❌ No (unless using old codebases)         |

---

### 14. **What is React Router?**

**Answer:**
React Router is a **routing library** that enables navigation between different components or pages in a React application without reloading the browser.

**Core Features:**

* Define multiple routes
* Navigate between them using `<Link>`
* Works with single-page apps (SPA)

**Example:**

```jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

<Router>
  <Routes>
    <Route path="/about" element={<About />} />
  </Routes>
</Router>
```

---

### 15. **What is the Context API?**

**Answer:**
The Context API is a feature that lets you **share global data** (like user info or theme settings) across components **without passing props manually** at every level.

**Why use it?**

* Avoid "prop drilling" (passing props through many layers)
* Easy to manage global state

**Example:**

```jsx
const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Page />
    </ThemeContext.Provider>
  );
}
```

---

## ✅ Final Tips for Interviews

* Understand React concepts **clearly**, not just syntax.
* Practice building **small apps** using components, state, and props.
* Focus on modern React using **Hooks** and **Functional Components**.
* Learn to manage state across components efficiently (lifting state, context).
* Review lifecycle methods conceptually, even if you mostly use hooks.

---

### Rajesh Gupta
