import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../redux/customerReducer"; // Import clearUser action
import SearchModal from "./SearchModal";
import "./Navbar.css";
import LoginSignupModal from "./LoginSignupModal";

const Navbar = ({ toggleCart }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch(); // Get dispatch function
  const user = useSelector((state) => state.customer.user); // Get user from Redux state


  const handleLogin = () => {
    openModal();
  };

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
    // Close the menu when the location changes
    closeMenu();
  }, [location.pathname]);

  const handleLinkClick = () => {
    // Close the menu when a link inside the menu is clicked
    closeMenu();
  };

  const isIntroPage = location.pathname === "/";
  if (isIntroPage) {
    return null;
  }

  // Function to handle logout
  const handleLogout = () => {
    // Dispatch action to clear user data from Redux state
    dispatch(clearUser());
  };

  return (
    <nav className="navbar">
      <img
        onClick={openSearchModal}
        src="/public/search-icon.png"
        alt=""
        className="nav-search-icon"
      />
      <div>
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
              <li onClick={handleLinkClick}>
                <Link to="/accessories">ACCESSORIES</Link>
              </li>
              <li onClick={handleLinkClick}>
                <Link to="/tops">TOPS</Link>
              </li>
              <li onClick={handleLinkClick}>
                <Link to="/bottoms">BOTTOMS</Link>
              </li>
              <li onClick={handleLinkClick}>
                <Link to="/decks">DECKS</Link>
              </li>
              <li onClick={handleLinkClick}>
                <Link to="/others">OTHERS</Link>
              </li>
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
      </div>
      <div className="nav-icons">
      {user && user.customer ? ( // Conditionally render based on user authentication status
        <div className="user-info">
          <p>Welcome, {user.customer.firstname}!</p>
          <span className="logout-text" onClick={handleLogout}>
            Logout
          </span>
        </div>
      ) : (
        <Link to="/login">
          <img src="/public/user-icon.jpeg" alt="" className="nav-cart-icon" />
        </Link>
      )}
      <Link to="#" onClick={toggleCart}>
        <img
          src="/public/empty-cart-icon.png"
          alt=""
          className="nav-cart-icon"
        />
      </Link>
      </div>
      {isSearchModalOpen && <SearchModal onClose={closeSearchModal} />}
    </nav>
    
  );
};

export default Navbar;

