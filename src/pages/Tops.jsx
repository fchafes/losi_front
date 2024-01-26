import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Tops.css"
import Footer from '../components/Footer';
import CategoryItem from "../components/CategoryItem"; 


const Tops = () => {
  const [tops, setTops] = useState([]);

  useEffect(() => {
    const fetchTops = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/category/tops"
        );
        setTops(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching accessories:", error);
      }
    };

    fetchTops();
  }, []);

  return (
    <div>
        <h2 className="accesories-text">Tops</h2>
        <div className="tops-container">
            {tops.map((product) => (
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

export default Tops;