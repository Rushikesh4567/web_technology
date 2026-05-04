import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Completed from './pages/Completed';
import About from './pages/About';
import './index.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    // Initialize state from localStorage
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Sync state with localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              tasks={tasks} 
              onAddTask={addTask} 
              onToggle={toggleTask} 
              onDelete={deleteTask} 
            />
          } 
        />
        <Route 
          path="/completed" 
          element={
            <Completed 
              tasks={tasks} 
              onToggle={toggleTask} 
              onDelete={deleteTask} 
            />
          } 
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
