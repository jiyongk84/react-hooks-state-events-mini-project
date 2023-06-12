import React, { useState } from "react";

function CategoryFilter( {categories, onCategoryChange}) {
  const [selectedCategory, setSelectedCategory] = useState('All');

function handleCategoryChange(category) {
    setSelectedCategory(category);
    onCategoryChange(category);
  }
return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => (
        <button key={category} 
        className={selectedCategory === category ? "selected" : ""}
        onClick={() => handleCategoryChange(category)}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;

