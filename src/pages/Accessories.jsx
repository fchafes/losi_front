import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Accessories.css"
import Footer from '../components/Footer';
import CategoryItem from "../components/CategoryItem"; 


const Accessories = () => {
  const [accesories, setAccesories] = useState([]);

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/category/accesories"
        );
        setAccesories(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching accessories:", error);
      }
    };

    fetchAccessories();
  }, []);

  return (
    <div>
      <h2 className="accesories-text">Accesories</h2>
      <div className="accesories-container">
        {accesories.map((product) => (
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

export default Accessories;

