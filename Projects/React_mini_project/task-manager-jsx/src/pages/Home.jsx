import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = ({ tasks, onAddTask, onToggle, onDelete }) => {
  return (
    <div className="app-container">
      <h1>My Tasks</h1>
      <TaskForm onAddTask={onAddTask} />
      <div className="card">
        <h2>Active Tasks</h2>
        <TaskList 
          tasks={tasks} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      </div>
    </div>
  );
};

export default Home;
