import React from "react";
import "./Categories.css";

const categories = [
  "Arts and Humanities",
  "Business",
  "Computer Science",
  "Data Science",
  "Information Technology",
  "Health",
  "Math and Logic",
  "Personal Development",
  "Physical Science and Engineering",
  "Social Sciences",
];

const Categories = () => {
  return (
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            {category}
          </div>
        ))}
      </div>
  );
};

export default Categories;