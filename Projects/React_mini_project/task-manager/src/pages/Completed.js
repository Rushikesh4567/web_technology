import React from "react";

function Completed({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      <h2>Completed Tasks</h2>
      {completedTasks.map((task) => (
        <p key={task.id}>{task.text}</p>
      ))}
    </div>
  );
}

export default Completed;