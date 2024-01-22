import { useState } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Featured from "./pages/Featured";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/admin/products" element={<ShowProducts />} />
      </Routes>
    </>
  );
}

export default App;
