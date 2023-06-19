import React from "react";
import Task from "./Task";
// import { CATEGORIES, TASKS } from "../data";


function TaskList({ tasks, handleDelete }) {
 
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, i) => {
        return <Task key={i} task={task} handleDelete={handleDelete}/>
      })
    }
    </div>
  );
}

export default TaskList;
