import { useState } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./App.css";
import Video from "./pages/Video";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage"
import AboutUs from "./pages/AboutUs"
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Category from "./pages/Category";


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
        <Route path="/:categoryName" element={<Category />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        {/* <Route path="/decks" element={<Decks />} />
        <Route path="/bottoms" element={<Bottoms />} />
        <Route path="/tops" element={<Tops />} />
        <Route path="/others" element={<Others />} /> */}
      </Routes>
    </>
  );
}

export default App;
