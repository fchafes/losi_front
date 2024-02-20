import React from "react";
import { slide as Menu } from 'react-burger-menu';

import { Link } from "react-router-dom";

const HamburgerMenu = ({ isOpen, onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <Menu left isOpen={isOpen} onClose={onClose}>
      <Link to="/home" onClick={handleLinkClick}>HOME</Link>
      <Link to="/accessories" onClick={handleLinkClick}>ACCESSORIES</Link>
      <Link to="/tops" onClick={handleLinkClick}>TOPS</Link>
      <Link to="/bottoms" onClick={handleLinkClick}>BOTTOMS</Link>
      <Link to="/decks" onClick={handleLinkClick}>DECKS</Link>
      <Link to="/others" onClick={handleLinkClick}>OTHERS</Link>
      <Link to="/aboutUs" onClick={handleLinkClick}>ABOUT</Link>
      <Link to="/contact" onClick={handleLinkClick}>CONTACT</Link>
    </Menu>
  );
};

export default HamburgerMenu;
