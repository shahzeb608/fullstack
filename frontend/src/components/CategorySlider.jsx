import React, { useState } from "react";
import "../styles/Cslider.css"; // Import CSS file
import { FaCamera, FaMobileAlt, FaDesktop, FaGamepad, FaHeadphones, FaClock } from "react-icons/fa";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const categories = [
  { name: "Phones", icon: <FaMobileAlt /> },
  { name: "Computers", icon: <FaDesktop /> },
  { name: "SmartWatch", icon: <FaClock /> },
  { name: "Camera", icon: <FaCamera /> },
  { name: "HeadPhones", icon: <FaHeadphones /> },
  { name: "Gaming", icon: <FaGamepad /> },
];

const CategorySlider = () => {
  const [selectedCategory, setSelectedCategory] = useState("Camera");

  return (
    <div className="category-slider">
      <div className="category-header">
        <span className="category-title">Categories</span>
      </div>
      <h2 className="browse-title">Browse By Category</h2>

      <div className="slider-container">
        <button className="nav-button left">
          <MdArrowBack />
        </button>

        <div className="category-list">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`category-card ${selectedCategory === category.name ? "active" : ""}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <div className="icon">{category.icon}</div>
              <span className="category-name">{category.name}</span>
            </div>
          ))}
        </div>

        <button className="nav-button right">
          <MdArrowForward />
        </button>
      </div>
    </div>
  );
};

export default CategorySlider;
