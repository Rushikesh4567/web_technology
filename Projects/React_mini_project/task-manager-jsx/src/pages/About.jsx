import React from 'react';

const About = () => {
  return (
    <div className="app-container">
      <h1>About TaskMaster</h1>
      <div className="card">
        <p>
          TaskMaster is a simple yet powerful task management application built with React and Vite.
          It helps you keep track of your daily tasks and stay organized.
        </p>
        <p><strong>Features:</strong></p>
        <ul>
          <li>Add and delete tasks</li>
          <li>Toggle task completion status</li>
          <li>Persistent storage using LocalStorage</li>
          <li>Clean and modern UI</li>
          <li>Built with React JSX</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
