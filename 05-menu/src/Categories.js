import React from "react";
import { categoryData } from "./data";

const Category = ({ categories, filterItems }) => {
    return (
        <div className="btn-container">
            {categories.map((category, index) => (
                <button
                    type="button"
                    key={index}
                    className="filter-btn"
                    onClick={() => filterItems(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Category;
