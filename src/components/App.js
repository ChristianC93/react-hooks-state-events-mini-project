import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function deleteTask(e) {
    const updatedTasks = [...tasks].filter((task) => task.text !== e.target.value);
    setTasks(updatedTasks);
  }

  function addTask(newTask) {
    const newTasksArray = [...tasks, newTask];
    setTasks(newTasksArray);
  }

  const tasksToDisplay = tasks.filter((task) => category === "All" || task.category === category);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={category} onCategoryClick={setCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask} />
      <TaskList tasks={tasksToDisplay} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
