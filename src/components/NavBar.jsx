import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchModal from "./SearchModal"; // Importa tu componente de modal
import "./Navbar.css";

const Navbar = () => {
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

  return (
    <nav className="navbar">
      <ul className="nav-list center-links">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className={`nav-item dropdown ${isMenuOpen ? "open" : ""}`}>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span>Menu</span>
          </div>
          {isMenuOpen && (
            <ul className="dropdown-menu">
              <li><Link to="#">Accessories</Link></li>
              <li><Link to="#">Tops</Link></li>
              <li><Link to="#">Bottoms</Link></li>
              <li><Link to="#">Decks</Link></li>
              <li><Link to="#">Wheels</Link></li>
              <li><Link to="#">Others</Link></li>
               <hr />
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Contact</Link></li>
              <li><Link to="#">Shipping</Link></li>
            </ul>
          )}
        </li>
        <li className="nav-item logo">
          <img
            src="./losiFlor.png"
            alt="logo"
            style={{ width: "100px", height: "auto" }}
          />
        </li>
        <li className="nav-item">
          <Link to="#">Cart</Link>
        </li>
        <li className="nav-item">
          <Link to="#" onClick={openSearchModal}>Search</Link>
        </li>
      </ul>
      {isSearchModalOpen && (
        <SearchModal onClose={closeSearchModal} />
      )}
    </nav>
  );
};

export default Navbar;
