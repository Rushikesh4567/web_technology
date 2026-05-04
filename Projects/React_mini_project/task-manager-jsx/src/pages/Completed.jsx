import React from 'react';
import TaskList from '../components/TaskList';

const Completed = ({ tasks, onToggle, onDelete }) => {
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="app-container">
      <h1>Completed Tasks</h1>
      <div className="card">
        <TaskList 
          tasks={completedTasks} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      </div>
    </div>
  );
};

export default Completed;
