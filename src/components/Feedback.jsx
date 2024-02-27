import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Feedback() {
  const location = useLocation();
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`YOUR_API_URL_HERE`); // Replace YOUR_API_URL_HERE with your actual API URL
        setOrderData(response.data);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Feedback Page</h1>
      {orderData ? (
        <div>
          <h2>Order ID: {orderData.id}</h2>
          <h3>Total Amount: {orderData.total_amount}</h3>
          <ul>
            {orderData.items.map((item, index) => (
              <li key={index}>
                {item.title} - Quantity: {item.quantity} - Unit Price: {item.unit_price}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Feedback;
