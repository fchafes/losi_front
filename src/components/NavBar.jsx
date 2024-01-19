import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Create a separate CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="nav-item logo">
          <img
            src="./losiFlor.png"
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />
        </li>
        <li className="nav-item">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="nav-item">
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

