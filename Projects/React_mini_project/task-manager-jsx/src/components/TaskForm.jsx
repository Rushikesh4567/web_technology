import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    onAddTask(text);
    setText('');
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h3>Add New Task</h3>
      <div className="input-group">
        <input 
          type="text" 
          placeholder="What needs to be done?" 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="primary">Add Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
