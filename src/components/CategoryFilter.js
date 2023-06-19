import React from "react";

function CategoryFilter( {categories, selectedCategory, handleCategoryChange}) {
 

let filteredCategories = categories.map((category, i) => {
  return <button key={i} className={selectedCategory === category ? "selected" : ""} onClick={() => handleCategoryChange(category)}>{category}</button>
  })
  
return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {
        filteredCategories 
      }
    </div>
  );
}

export default CategoryFilter;

