import axios from "axios";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Feedback() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  console.log(queryParams);
  // Capturar todos los parámetros de la URL
  const paymentData = {};
  for (const [key, value] of queryParams.entries()) {
    paymentData[key] = value;
  }

  useEffect(() => {
    if (Object.keys(paymentData).length > 0) {
      const updateOrder = async () => {
        try {
          const response = await fetch("TU_API_REST/orders/" + orderId, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(paymentData), // Enviar todos los datos en un objeto JSON
          });

          if (response.ok) {
            // Orden actualizada con éxito
          } else {
            // Manejar errores si la actualización falla
          }
        } catch (error) {
          console.error("Error updating order:", error);
        }
      };

      updateOrder();
    }
  }, [paymentData]);

  return <div>{/* Contenido de tu componente */}</div>;
}

export default Feedback;
