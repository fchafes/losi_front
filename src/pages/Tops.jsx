import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Tops.css"

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
        <h2>Tops</h2>
        <div className="tops-container">
            {tops.map((product) => (
                <div key={product.id} className="tops-item">
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

export default Tops;