import React, { useState } from "react";
import Task from "./Task";
import { TASKS } from "../data";



function TaskList({filteredTasks}) {
  const [tasks, setTasks] = useState(TASKS)

  function handleDelete(task) {
    setTasks((prevTasks) => prevTasks.filter((t) => t !== task));
    
  }
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => (
        <Task key={task.text} text={task.text} category={task.category} onDelete={()=>handleDelete(task)} />
      ))}
    </div>
  );
      }

export default TaskList;
