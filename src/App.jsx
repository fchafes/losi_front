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
import ScrollToTop from "./components/ScrollToTop";
import Checkout from "./pages/Checkout";
import Signup from "./pages/SignUp";
import SearchModal from "./components/SearchModal";


function App() {
  
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      <Cart cartOpen={cartOpen} toggleCart={toggleCart} />
      <NavBar toggleCart={toggleCart} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Video />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails toggleCart={toggleCart}/>} />
        <Route path="/:categoryName" element={<Category />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/checkOut" element={<Checkout />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/search" element={<SearchModal />} />

      </Routes>
    </>
  );
}

export default App;
