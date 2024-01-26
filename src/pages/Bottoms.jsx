import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Bottoms.css"
import Footer from '../components/Footer';
import CategoryItem from "../components/CategoryItem"; 

const Bottoms = () => {
  const [bottoms, setBottoms] = useState([]);

  useEffect(() => {
    const fetchBottoms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/category/bottoms"
        );
        setBottoms(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching accessories:", error);
      }
    };

    fetchBottoms();
  }, []);

  return (
    <div>
        <h2 className="accesories-text">Bottoms</h2>
        <div className="bottoms-container">
            {bottoms.map((product) => (
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

export default Bottoms;