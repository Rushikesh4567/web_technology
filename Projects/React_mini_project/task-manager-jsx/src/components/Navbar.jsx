import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="logo">TaskMaster</NavLink>
      <div className="nav-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Home
        </NavLink>
        <NavLink 
          to="/completed" 
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Completed
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
