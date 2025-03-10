import React from "react";

const CategorySidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div id="sidebar">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`category-item ${selectedCategory === category ? "active" : ""}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategorySidebar;