import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Decks.css"

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
        <h2>Decks</h2>
        <div className="decks-container">
            {decks.map((product) => (
                <div key={product.id} className="decks-item">
                    <img className= "img-fluid" src={product.photo} alt={product.name} />
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

export default Decks;
