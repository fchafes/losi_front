import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="center-container">
      <div className="logo">
        <img
          src="./losiFlor.png"
          alt="logo"
          style={{ width: "200px", height: "auto" }}
        />
      </div>
      <iframe
        style={{ width: '100%', height: '700px' }}
        src="https://www.youtube.com/embed/VmTwY5r_ShQ"
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link to = "/featured">
      <h1> Enter </h1></Link>
      
    </div>
  );
};

export default Home;
