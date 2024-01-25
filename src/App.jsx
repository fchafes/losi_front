import { useState } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./App.css";
import Video from "./pages/Video";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Accessories from "./pages/Accessories";
import NavBar from "./components/NavBar";
import Decks from "./pages/Decks";
import Tops from "./pages/Tops";
import Bottoms from "./pages/Bottoms";
import Others from "./pages/Others";


function App() {
  
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      <Cart cartOpen={cartOpen} toggleCart={toggleCart} />
      <NavBar toggleCart={toggleCart} />
      <Routes>
        <Route path="/" element={<Video />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails toggleCart={toggleCart}/>} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/decks" element={<Decks />} />
        <Route path="/bottoms" element={<Bottoms />} />
        <Route path="/tops" element={<Tops />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </>
  );
}

export default App;
