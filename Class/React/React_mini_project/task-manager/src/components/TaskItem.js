import React from "react";

function TaskItem({ task, tasks, setTasks }) {

  const toggleComplete = () => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const deleteTask = () => {
    const filteredTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(filteredTasks);
  };

  return (
    <div className="task">
      <span className={task.completed ? "completed" : ""}>
        {task.text}
      </span>

      <div>
        <button onClick={toggleComplete}>✔</button>
        <button onClick={deleteTask}>❌</button>
      </div>
    </div>
  );
}

export default TaskItem;