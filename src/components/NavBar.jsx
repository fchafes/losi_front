import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../redux/customerReducer"; // Import clearUser action
import SearchModal from "./SearchModal";
import "./Navbar.css";
import ModalConfirmLogout from './ModalConfirmLogout';
import { slide as Menu } from 'react-burger-menu';
import LoginSignupModal from "./LoginSignupModal";

const Navbar = ({ toggleCart }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch(); // Get dispatch function
  const user = useSelector((state) => state.customer.user); // Get user from Redux state
  const menuRef = useRef(null);

  const handleLogin = () => {
    openModal();
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdownMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const openSearchModal = () => {
    setSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setSearchModalOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    navigate("/login");
    setShowLogoutModal(false);
  };

  const handleLogoutModalOpen = () => {
    setShowLogoutModal(true);
  }

  return (
    <>
    <nav className="navbar">
    {user && user.customer ? (
        <div id="list" className="user-info">
          <p>Welcome, {user.customer.firstname}!</p>
          <button className="logout-text" onClick={handleLogoutModalOpen}>
            Logout
          </button>
        </div>
      ) : (
        <div className="navbar-login-container">
        <Link to="/login">
          <img src="/public/user-icon.jpeg" alt="" className="nav-cart-icon" />
          <p>Login</p>
        </Link>
        </div>
      )}
        <div className="menu-burguer-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <img className="menu" src="/public/barra-de-menus.png" alt="" />
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div>
      <ul  className="nav-list center-links">
        <li id="list"className="nav-item">
          <Link to="/home">HOME</Link>
        </li>
        <li  id="list" className={`nav-item dropdown ${isMenuOpen ? "open" : ""}`}>
          <div className="menu-toggle" onClick={toggleDropdownMenu}>
            <span className="nav-span">SHOP</span>
          </div>
          {isMenuOpen && (
            <ul className="dropdown-menu" ref={menuRef}>
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
        <li id="list" className="nav-item logo">
          <Link to="/">
            <img
              src="/public/losiFlor.png"
              alt="logo"
              style={{ width: "100px", height: "auto" }}
            />
          </Link>
        </li>
        <li id="list" className="nav-item">
          <Link to="/aboutUs">ABOUT</Link>
        </li>
        <li  className="nav-item">
          <Link id="list" to="/contact">CONTACT</Link>
        </li>
      </ul>
      </div>
      <div className="nav-icons">
      <img
        onClick={openSearchModal}
        src="/public/search-icon.png"
        alt=""
        className="nav-search-icon"
      />
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
    <Menu left isOpen={isMenuOpen} onClose={closeMenu} overlayClassName="custom-overlay">
      <Link to="/home" onClick={handleLinkClick}>HOME</Link>
      <Link to="/accessories" onClick={handleLinkClick}>ACCESSORIES</Link>
      <Link to="/tops" onClick={handleLinkClick}>TOPS</Link>
      <Link to="/bottoms" onClick={handleLinkClick}>BOTTOMS</Link>
      <Link to="/decks" onClick={handleLinkClick}>DECKS</Link>
      <Link to="/others" onClick={handleLinkClick}>OTHERS</Link>
      <Link to="/aboutUs" onClick={handleLinkClick}>ABOUT</Link>
      <Link to="/contact" onClick={handleLinkClick}>CONTACT</Link>
    </Menu>
    <ModalConfirmLogout 
        open={showLogoutModal} 
        onClose={() => setShowLogoutModal(false)} 
        onConfirm={handleLogout}
      />
    </>
  );
};

export default Navbar;
