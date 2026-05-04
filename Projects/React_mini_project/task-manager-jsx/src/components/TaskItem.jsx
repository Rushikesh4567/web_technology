import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span className="task-text">{task.text}</span>
      <div className="actions">
        <button 
          className="icon" 
          onClick={() => onToggle(task.id)}
          title={task.completed ? "Mark as Incomplete" : "Mark as Complete"}
        >
          {task.completed ? '🔄' : '✅'}
        </button>
        <button 
          className="icon" 
          onClick={() => onDelete(task.id)}
          title="Delete Task"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
