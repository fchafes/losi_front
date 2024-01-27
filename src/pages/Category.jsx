import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";

const Category = () => {
  const [category, setCategory] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    console.log("categories name:", categoryName);
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
      <h2 className="category-text">
        {categoryName &&
          categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      </h2>

      <div className="category-container">
        {category.map((product) => (
          <Link className="category-item" to={`/product/${product.id}`}>
            <div key={product.id}>
              <img src={product.photo} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Category;
