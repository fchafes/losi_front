import React, { useEffect, useState } from "react";
import axios from "axios";

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
        <h2>Decks</h2>
        <div className="others-container">
            {others.map((product) => (
                <div key={product.id} className="others-item">
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

export default Others;