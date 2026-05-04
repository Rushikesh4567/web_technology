import React, { useState } from "react";

function TaskForm({ tasks, setTasks }) {
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default TaskForm;