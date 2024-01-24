import { useState } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Featured from "./pages/Featured";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Accessories from "./pages/Accesories";

function App() {
  
  return (
    <>
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/accesories" element={<Accessories />} />
      </Routes>
    </>
  );
}

export default App;
