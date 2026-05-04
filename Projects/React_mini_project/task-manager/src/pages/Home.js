import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home({ tasks, setTasks }) {
  return (
    <div className="container">
      <h2>All Tasks</h2>
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default Home;