import React, { useEffect, useState } from "react";
import axios from "axios";

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
        <h2>Decks</h2>
        <div className="bottoms-container">
            {bottoms.map((product) => (
                <div key={product.id} className="bottoms-item">
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

export default Bottoms;