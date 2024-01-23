import React, { useState, useEffect } from "react";
import "./Categories.css";
import CategoryItem from "./CategoryItem";
import axios from "axios";

const Categories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your backend API
    const fetchProducts = async () => {
      try {
        console.log("This is the fetch for the products");
        const response = await axios.get("http://localhost:3000/products/featured");
        console.log("Products fetched successfully:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, []);

  return (
    <div className="featured-categories">
      <h2 className="featured-title">FEATURED PRODUCTS</h2>
      <div className="category-container">
        {products.map((product) => (
          <CategoryItem
            key={product.id}
            imageSrc={product.photo}
            categoryLink={`/product/${product.id}`}
            description={`${product.name}\n$${product.price}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;