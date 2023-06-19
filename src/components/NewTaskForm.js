import React, { useState } from "react";


function NewTaskForm( {categories, onTaskFormSubmit} ) {
  const formOutline = {
    category: "Code",
    text: "",
  }


  const [form , setForm] = useState(formOutline)
  
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit(form)
    setForm(formOutline)
  }

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input onChange={(e) => handleChange(e)} type="text" value={form.text} name="text" />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => handleChange(e)}>
          {/* render <option> elements for each category here */}
          {
            categories.map((category, i) => {
            if(category !== "All"){
              return <option key={i}>{category}</option>
            }
          })
        }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

