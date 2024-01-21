import React from "react";
import "./Categories.css"; 
import CategoryItem from "./CategoryItem";

const Categories = () => {
    return (
        <div className="featured-categories">
        <h2 className="featured-title">FEATURED PRODUCTS</h2>
        <div className="category-container">
          <CategoryItem
            imageSrc="public/skateboard.webp"
            categoryLink="#"
            description="Losi x Vans [8.5']
            $3000"
          />
          <CategoryItem
            imageSrc="public/short.webp"
            categoryLink="#"
            description="102 Short [Grey]
            $2520"
          />
          <CategoryItem
            imageSrc="public/top.webp"
            categoryLink="#"
            description="Hoddie Alo [Brown]
            $2300"
          />
          <CategoryItem
            imageSrc="public/accesories.webp"
            categoryLink="#"
            description="Hat Beanie [Brown]
            $1200"
          />
        </div>
      </div>
        );
};


export default Categories;