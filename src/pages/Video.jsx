import React from "react";
import "./Video.css";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="center-container">
      <div className="logo">
        <img
          src="./losiFlor.png"
          alt="logo"
          style={{ width: "120px", height: "auto" }}
        />
      </div>
      <div className="video-container" >
      <iframe
      className="fullscreen-video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VmTwY5r_ShQ"
            frameborder="0"
            allowfullscreen
        ></iframe>
        </div>
        <div className="button-container">
        <Link to="/home" className="overlay-link">
          <h1>ENTER</h1>
        </Link>
      </div>
    </div>
  );
};

export default Video;
