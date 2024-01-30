import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchModal from "./SearchModal";
import "./Navbar.css";

const Navbar = ({ toggleCart }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const openSearchModal = () => {
    setSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setSearchModalOpen(false);
  };

  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      if (isMenuOpen && !e.target.closest(".navbar")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [isMenuOpen]);

     return (
    <nav className="navbar">
      <Link to="#"><img src="/public/search-icon.png" alt="" className="nav-search-icon"/></Link>
      <ul className="nav-list center-links">
        <li className="nav-item">
          <Link to="/">HOME</Link>
        </li>
        <li className={`nav-item dropdown ${isMenuOpen ? "open" : ""}`}>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="nav-span">SHOP</span>
          </div>
          {isMenuOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/accessories">ACCESSORIES</Link></li>
              <li><Link to="/tops">TOPS</Link></li>
              <li><Link to="/bottoms">BOTTOMS</Link></li>
              <li><Link to="/decks">DECKS</Link></li>
              <li><Link to="/others">OTHERS</Link></li>
            </ul>
          )}
        </li>
        <li className="nav-item logo">
          <img
            src="/public/losiFlor.png"
            alt="logo"
            style={{ width: "100px", height: "auto" }}
          />
        </li>
        <li className="nav-item">
          <Link to="#" onClick={toggleCart}>ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link to="#">CONTACT</Link>
        </li>
      </ul>
      <Link to="#" onClick={toggleCart}><img src="/public/empty-cart-icon.png" alt="" className="nav-cart-icon"/></Link>
      {isSearchModalOpen && (
        <SearchModal onClose={closeSearchModal} />
      )}
    </nav>
     );
};

export default Navbar;
