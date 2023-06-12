import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {


  const [newTasks, setNewTasks] = useState("")
  const [filteredTasks, setFilteredTasks] = useState(TASKS);

  const handleCategoryChange = (category) => {
    if (category === 'All') {
      setFilteredTasks(TASKS);
    } else {
      const filtered = TASKS.filter((task) => task.category === category);
      setFilteredTasks(filtered);
    }
  }
  
  const handleTaskFormSubmit = () => {
    setFilteredTasks([...TASKS, newTasks]);
  };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} tasks={TASKS} onCategoryChange={handleCategoryChange}/>
      <NewTaskForm categories={CATEGORIES} tasks={TASKS} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList filteredTasks={filteredTasks} setNewTasks={setNewTasks}/>
    </div>
  );
}

export default App;
