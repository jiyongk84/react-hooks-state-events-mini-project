import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [filteredTasks, setFilteredTasks] = useState(TASKS);
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(category) {
    setSelectedCategory(category)
    
    if (category === "All") {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter((task) => task.category === category);
      setFilteredTasks(filtered);
    }
  }

  function handleTaskFormSubmit(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    

    if (selectedCategory === "All" || selectedCategory === newTask.category) {
      setFilteredTasks((prevTasks) => [...prevTasks, newTask]);
  }
}
function getFilteredTasks() {
  if (selectedCategory === "All") {
    return tasks;
  } else {
    return tasks.filter((task) => task.category === selectedCategory);
  }

}
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filteredTask={filteredTasks} onCategoryChange={handleCategoryChange}/>
      <NewTaskForm key={tasks.text} categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={getFilteredTasks()} />
    </div>
  );
}

export default App;