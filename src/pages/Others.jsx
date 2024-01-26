import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Others.css"
import Footer from '../components/Footer';
import CategoryItem from "../components/CategoryItem"; 

const Others = () => {
  const [others, setOthers] = useState([]);

  useEffect(() => {
    const fetchOthers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/category/others"
        );
        setOthers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching accessories:", error);
      }
    };

    fetchOthers();
  }, []);

  return (
    <div>
        <h2 className="accesories-text">Others</h2>
        <div className="others-container">
            {others.map((product) => (
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

export default Others;