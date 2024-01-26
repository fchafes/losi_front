import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Decks.css"
import Footer from '../components/Footer';
import CategoryItem from "../components/CategoryItem"; 

const Decks = () => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const fetchDecks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/category/decks"
        );
        setDecks(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching accessories:", error);
      }
    };

    fetchDecks();
  }, []);

  return (
    <div>
        <h2 className="accesories-text">Decks</h2>
        <div className="decks-container">
        {decks.map((product) => (
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

export default Decks;
