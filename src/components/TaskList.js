import React, { useState } from "react";
import Task from "./Task";
import { TASKS } from "../data";



function TaskList() {
  const [tasks, setTasks] = useState(TASKS)
  function handleDelete(task) {
    setTasks(tasks => tasks.filter(t => t !== task));
  
  }
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => (
        <Task key={task.text} category={task.category} text={task.text} onDelete={()=>handleDelete(task)} />
      ))}
    </div>
  );
}

export default TaskList;
