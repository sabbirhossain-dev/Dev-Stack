# Dev Stack Builder 

## Description

DevStack is a responsive web application designed to help developers explore and build their ideal development stack. It provides a simple way to discover different technologies across various categories, compare their features, and select the tools that best fit a project. Each technology includes useful information such as its category, experience level, description, and rating.
Users can select technologies and see their personalized stack in one place. This project was built to practice modern frontend development concepts such as component-based architecture, state management, conditional rendering, reusable components, and responsive UI design.



## Technologies Used

- #### React -- UI development
- #### TypeScript --  Type safety
- #### Vite -- Development and build tool
- #### **Tailwind CSS** -- Styling
- #### DaisyUI -- UI components
- #### React-Toastify -- Toast notifications



## Features

#### Explore Technologies
- Browse and explore different frontend technologies through a clean and user-friendly interface.
#### Build Your Stack
- Select your favorite technologies and create your own personalized tech stack.
#### Toast Notifications
- Get instant feedback when adding a technology, trying to add a duplicate, removing an item, or clearing the entire stack.
#### Loading State
- Display a loading indicator while technology data is being loaded.
#### Responsive Design
- Fully responsive user interface that works smoothly across mobile, tablet, and desktop devices.
#### Gradient Brand Theme
- A consistent orange → pink → violet gradient is used across the brand name, hero section, and primary buttons for a modern visual style.



## React Questions and Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript.
React uses JSX because it makes the UI code easier to read and understand.

### 2. What is the difference between props and state?
Props are used to send data from a parent component to a child component. State is used to store data inside a component that can change.

### 3. What does the useState hook do, and where did you use it in this project?
useState is a React hook that lets us create and update data in a component. In my project, I used useState for technology data, selected items, count, and loading state.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect is used to run some code when a component loads or when some data changes.
I used useEffect to fetch the technology data from the JSON file when my application starts.

### 5. Why does every item in a .map() list need a unique key prop?
React needs a unique key to identify each item in a list. It helps React understand which item was changed, added, or removed.

### 6. What is conditional rendering?
Conditional rendering means displaying different UI elements based on a specific condition.
For example, in my project, I show an empty message when no technologies are selected. If technologies are selected, I display the selected technologies instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent component can pass data to a child component using **props**.
A child component can send data back to the parent by calling a **callback function** that the parent passes to the child through props.










<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

``` -->
