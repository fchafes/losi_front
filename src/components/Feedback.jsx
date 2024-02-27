import React from "react";
import axios from "axios";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import { useLocation } from "react-router-dom";

import React, { useEffect } from "react";
>>>>>>> parent of d209295 (arreglos)
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

  
}

export default Feedback;
