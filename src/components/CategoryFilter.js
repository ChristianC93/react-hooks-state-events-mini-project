import React from "react";

function CategoryFilter({categories, selected, onCategoryClick}) {
  const categoryButtons = categories.map((category) => 
  (<button
    className={selected === category ? "selected" : ""}
    onClick={() => onCategoryClick(category)}
    key={category}>
      {category}
  </button>));


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
