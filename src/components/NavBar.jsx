import React, { useState, useEffect } from "react";
import { Link, useLocation  } from "react-router-dom";
import SearchModal from "./SearchModal";
import "./Navbar.css";

const Navbar = ({ toggleCart }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const openSearchModal = () => {
    setSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setSearchModalOpen(false);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };


  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      if (isMenuOpen && !e.target.closest(".navbar")) {
        closeMenu();
      }
    };

    document.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [isMenuOpen]);

  const isIntroPage = location.pathname === "/"; 
  if (isIntroPage) {
    return null;
  }

     return (
    <nav className="navbar">
      <Link to="#"><img src="/public/search-icon.png" alt="" className="nav-search-icon"/></Link>
      <ul className="nav-list center-links">
        <li className="nav-item">
          <Link to="/home">HOME</Link>
        </li>
        <li className={`nav-item dropdown ${isMenuOpen ? "open" : ""}`}>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="nav-span">SHOP</span>
          </div>
          {isMenuOpen && (
            <ul className="dropdown-menu">
              <li onClick={closeMenu}><Link to="/accessories">ACCESSORIES</Link></li>
              <li onClick={closeMenu}><Link to="/tops">TOPS</Link></li>
              <li onClick={closeMenu}><Link to="/bottoms">BOTTOMS</Link></li>
              <li onClick={closeMenu}><Link to="/decks">DECKS</Link></li>
              <li onClick={closeMenu}><Link to="/others">OTHERS</Link></li>
            </ul>
          )}
        </li>
        <li className="nav-item logo">
        <Link to="/">
          <img
            src="/public/losiFlor.png"
            alt="logo"
            style={{ width: "100px", height: "auto" }}
          />
        </Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutUs">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">CONTACT</Link>
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
