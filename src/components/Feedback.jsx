import React from "react";
import axios from "axios";
import { useEffect } from "react"; 
import { useLocation } from "react-router-dom";


function Feedback() {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const collectionId = searchParams.get("collection_id");
    const collectionStatus = searchParams.get("collection_status");
    const paymentId = searchParams.get("payment_id");
    const status = searchParams.get("status");
    const externalReference = searchParams.get("external_reference");
    const paymentType = searchParams.get("payment_type");
    const merchantOrderId = searchParams.get("merchant_order_id");
    const preferenceId = searchParams.get("preference_id");
    const siteId = searchParams.get("site_id");
    const processingMode = searchParams.get("processing_mode");
    const merchantAccountId = searchParams.get("merchant_account_id");

    const handleCheckout = async () => {
      try {
        const response = await axios.post("http://localhost:3000/orders", {
          customerId: user.customer.id, // Assuming you have the customer ID in your user object
          payment_method: paymentMethod,
          shipping_address: shippingAddress,
          collection_id: collectionId,
          collection_status: collectionStatus,
          payment_id: paymentId,
          status: status,
          payment_type: paymentId,
          merchant_order_id: merchantOrderId,
          preference_id: preferenceId,
          merchant_account_id: merchantAccountId,
          cartItems: cartItems.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
            selectedSize: item.selectedSize,
          })),
        });
        console.log("Order created successfully:", response.data);
        // handleShowInfo();
        //  handleRemoveAllItems();
        // Handle success (e.g., show a success message, redirect to a thank you page)
      } catch (error) {
        console.error("Error creating order:", error.response.data);
        // Handle error (e.g., show an error message to the user)
      }
    };

    // Call handleCheckout when the component mounts or when location.search changes
    handleCheckout();
  }, [location.search]); // Run the effect whenever location.search changes

  return (
    <div className="hola">
      <h2>hola Feedback</h2>
    </div>
  );
}

export default Feedback;

