import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Accessories.css"

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
      <h2>Accesories</h2>
      <div className="accesories-container">
        {accesories.map((product) => (
          <div key={product.id} className="accesory-item">
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

export default Accessories;
