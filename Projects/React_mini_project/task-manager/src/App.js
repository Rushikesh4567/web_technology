import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import About from "./pages/About";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
        <Route path="/completed" element={<Completed tasks={tasks} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;