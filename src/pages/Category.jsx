import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css"
import CategoryItem from "../components/CategoryItem";
import Footer from '../components/Footer';
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
  }, [categoryName]); 

  return (
    <div>
      <h2 className="category-text">{categoryName}</h2>
      <div className="category-container">
        {category.map((product) => (
          <CategoryItem
          key={product.id}
          imageSrc={product.photo}
          categoryLink={`/product/${product.id}`}
          description={`${product.name}\n$${product.price}`}
        />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Category;
