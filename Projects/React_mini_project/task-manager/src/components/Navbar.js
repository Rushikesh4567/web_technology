import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Task Manager</h2>
      <div>
        <a href="/">Home</a>
        <a href="/completed">Completed</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}

export default Navbar;