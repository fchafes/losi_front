import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css"
import { useParams } from 'react-router-dom';

const Category = () => {
  const [category, setCategory] = useState([]);
  const { categoryName } = useParams(); 

  useEffect(() => {
    console.log("Category Name:", categoryName);
    const fetchCategory = async () => { 
      try {
        const response = await axios.get(
          `http://localhost:3000/category/${categoryName}`
        );
        setCategory(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [categoryName]); // Added categoryName as a dependency

  return (
    <div>
      <h2 className="category-text">{categoryName}</h2>
      <div className="category-container">
        {category.map((product) => (
          <div key={product.id} className="category-item">
            <img src={product.photo} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
