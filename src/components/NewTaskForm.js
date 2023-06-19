import React, { useState } from "react";


function NewTaskForm( {categories, onTaskFormSubmit} ) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories.length > 0 ? categories[0] : "");

 
  function handleTaskTextChange(event) {
    setText(event.target.value);
  }
 
  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();

    const newTask = {
      text: text,
      category: category,
    };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory(categories.length > 0 ? categories[0] : "");
    
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" value={text} onChange={handleTaskTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {categories.length > 0 && 
          categories
          .filter((category) => category !== 'All')
          .map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

