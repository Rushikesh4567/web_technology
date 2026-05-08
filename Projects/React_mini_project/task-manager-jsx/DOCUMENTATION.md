# Task Manager JSX - Project Documentation

This document provides a comprehensive overview of the Task Manager project, including its structure, core concepts, workflow, and instructions for running it locally.

---

## 📂 Project Folder Structure

The project follows a standard Vite + React structure:

```text
task-manager-jsx/
├── public/              # Static assets (favicons, etc.)
├── src/                 # Main source code
│   ├── assets/          # Images and style assets
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx   # Navigation bar component
│   │   ├── TaskForm.jsx # Input form for new tasks
│   │   ├── TaskItem.jsx # Individual task display
│   │   └── TaskList.jsx # Wrapper for mapping multiple tasks
│   ├── pages/           # Page-level components (Routes)
│   │   ├── About.jsx    # About page content
│   │   ├── Completed.jsx# Filtered view for completed tasks
│   │   └── Home.jsx     # Main dashboard
│   ├── App.jsx          # Main App component (State & Routing)
│   ├── main.jsx         # Entry point for React
│   ├── index.css        # Global styles & design system
│   └── App.css          # Component-specific styles
├── index.html           # Main HTML shell
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

---

## 💡 Core Concepts Used

This project implements several fundamental React and Web Development concepts:

### 1. Functional Components & JSX
The entire application is built using **Functional Components**, utilizing **JSX (JavaScript XML)** to define the UI structure within JavaScript.

### 2. React Hooks
- **`useState`**: Used for local state management (e.g., the list of tasks, input field values).
- **`useEffect`**: Used to handle side effects, specifically for synchronizing the task list with the browser's `localStorage` so data persists after a page refresh.

### 3. Lifting State Up
The "Single Source of Truth" for tasks is maintained in `App.jsx`. Functions like `addTask`, `deleteTask`, and `toggleTask` are passed down as **Props** to child components, allowing them to update the global list.

### 4. React Router (v7)
Used for **Client-Side Routing**. It allows the app to navigate between "Home", "Completed", and "About" pages without reloading the browser.

### 5. LocalStorage Persistence
To ensure tasks aren't lost, the app reads from and writes to `localStorage`. This demonstrates how to handle data persistence in a client-side only application.

### 6. Conditional Rendering
Used to filter tasks based on their status (e.g., showing only finished tasks on the "Completed" page) and to toggle CSS classes (like `line-through` for completed items).

---

## 🔄 Workflow Execution

1.  **Initialization**: When the app loads, `App.jsx` checks `localStorage` for any existing tasks and populates the `tasks` state.
2.  **Adding a Task**:
    - User types into `TaskForm`.
    - On submit, `onAddTask` is triggered in `App.jsx`.
    - A new task object is created with a unique `id` (using `Date.now()`) and added to the state.
3.  **State Sync**: Every time the `tasks` state changes, a `useEffect` hook automatically updates the `localStorage` string.
4.  **Navigation**: The `Navbar` uses React Router's `Link` to switch between views.
5.  **Updating/Deleting**: Clicking "Complete" or "Delete" triggers functions passed from `App.jsx`, which update the state and re-render the UI.

---

## 🚀 How to Run the Project

Follow these steps to get the project running on your local machine:

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- npm (comes with Node.js)

### Steps

1.  **Open Terminal**: Navigate to the project root directory:
    ```powershell
    cd d:\23UAM004\Sem_6\web_technology\Projects\React_mini_project\task-manager-jsx
    ```

2.  **Install Dependencies**:
    ```powershell
    npm install
    ```

3.  **Run Development Server**:
    ```powershell
    npm run dev
    ```

4.  **View the App**:
    Once the command runs, it will provide a local URL (usually `http://localhost:5173`). Open this in your browser to see the Task Manager in action!

---

## 🎨 Design Aesthetics
The project uses a modern **Glassmorphism** design approach with:
- Dynamic gradients.
- Subtle hover effects and transitions.
- Responsive layout for mobile and desktop.
- Responsive and accessible UI components.
