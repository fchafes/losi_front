import React from "react";
import "./Categoryitem.css"; 

const CategoryItem = ({ imageSrc, categoryLink, categoryName, description }) => {
    return (
      <div className="category-item">
        <a className="featured-categories" href={categoryLink}>
          <img src={imageSrc} alt={categoryName} />
        </a>
        <div className="additional-text">{description}</div>
      </div>
    );
};
    
    export default CategoryItem;
