import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../redux/customerReducer"; // Import clearUser action
import SearchModal from "./SearchModal";
import "./Navbar.css";
import ModalConfirmLogout from './ModalConfirmLogout';
import LoginSignupModal from "./LoginSignupModal";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = ({ toggleCart }) => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false); // Estado para el menú hamburguesa
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Estado para el menú desplegable de "SHOP"
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch(); // Get dispatch function
  const user = useSelector((state) => state.customer.user); // Get user from Redux state

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const toggleDropdownMenu = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const openSearchModal = () => {
    setSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setSearchModalOpen(false);
  };

  const closeMenus = () => {
    setBurgerMenuOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    closeMenus();
  }, [location.pathname]);

  const handleLinkClick = () => {
    closeMenus();
  };

  const isIntroPage = location.pathname === "/";
  if (isIntroPage) {
    return null;
  }

  const handleLogout = () => {
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
        <div  className="menu-burguer-icon" onClick={toggleBurgerMenu}>
          <img className="menu-burger" src="public/barra-de-menus.png" alt="" />
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div>
          <ul id="list" className="nav-list center-links">
            <li className="nav-item">
              <Link to="/home">HOME</Link>
            </li>
            <li className={`nav-item dropdown ${isDropdownOpen ? "open" : ""}`}>
              <div className="menu-toggle" onClick={toggleDropdownMenu}>
                <span className="nav-span">SHOP</span>
              </div>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li onClick={() => { toggleDropdownMenu(); handleLinkClick(); }}>
                    <Link to="/accessories">ACCESSORIES</Link>
                  </li>
                  <li onClick={() => { toggleDropdownMenu(); handleLinkClick(); }}>
                    <Link to="/tops">TOPS</Link>
                  </li>
                  <li onClick={() => { toggleDropdownMenu(); handleLinkClick(); }}>
                    <Link to="/bottoms">BOTTOMS</Link>
                  </li>
                  <li onClick={() => { toggleDropdownMenu(); handleLinkClick(); }}>
                    <Link to="/decks">DECKS</Link>
                  </li>
                  <li onClick={() => { toggleDropdownMenu(); handleLinkClick(); }}>
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

      <HamburgerMenu isOpen={isBurgerMenuOpen} onClose={() => setBurgerMenuOpen(false)} />

      <ModalConfirmLogout 
        open={showLogoutModal} 
        onClose={() => setShowLogoutModal(false)} 
        onConfirm={handleLogout}
      />
    </>
  );
};

export default Navbar;
