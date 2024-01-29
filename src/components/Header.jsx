import React from "react";
import "./Header.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="carousel-image">
        <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
          <div className="carousel-slide">
            <video
              className="carousel-image"
              autoPlay
              loop
              muted
              style={{ width: "100%" }}
            >
              <source src={"prueba.mp4"} type="video/mp4" />
            </video>
            <Link to={"/aboutUs"}>
              <div className="carousel-image-overlay">
                <button className="discover-button">About Us</button>
              </div>{" "}
            </Link>
          </div>

          <div className="carousel-slide">
            <img
              className="carousel-image"
              src={"P2144034.jpg"}
              alt="Slide 2"
            />
            <div className="carousel-image-overlay">
              <button className="discover-button">About Us</button>
            </div>
          </div>
          <div className="carousel-slide">
            <img
              className="carousel-image"
              src={"/4remeras.jpg"}
              alt="Slide 3"
            />
            <div className="carousel-image-overlay">
              <button className="discover-button">About Us</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Header;
