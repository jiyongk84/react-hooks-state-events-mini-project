import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDelete(task) {
    const taskFilter = [...tasks].filter(item => {
      return item.text !== task.text
    })
    setTasks(taskFilter)
  }


  function handleCategoryChange(item) {
    setSelectedCategory(item)
  }
  
  
  function handleTaskFormSubmit(task) {
    setTasks([...tasks, task])
  }


  let filteredTasks = [...tasks].filter(item => {
    return item.category === selectedCategory || selectedCategory === "All" 
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={selectedCategory} categories={CATEGORIES} handleCategoryChange={handleCategoryChange}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} categories={CATEGORIES} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;