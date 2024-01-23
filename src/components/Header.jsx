import React from "react";
import "./Header.css"; 
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import foto2 from "/public/pic12.jpg";
import foto3 from "/public/pic1.jpg";
import foto4 from "/public/pic4.jpg";

const Header = () => {
    return (
        <div className="header">
            <div className="carousel-wrapper">
                <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
                    <div className="carousel-slide">
                        <img className="carousel-image" src={"/Bananaslide.JPG"} alt="Slide 1" />
                        <div className="carousel-image-overlay">
                            <button className="discover-button">Discover</button>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <img className="carousel-image" src={"/Camisa.JPG"} alt="Slide 2" />
                        <div className="carousel-image-overlay">
                            <button className="discover-button">Discover</button>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <img className="carousel-image" src={"/ollie.JPG"} alt="Slide 3" />
                        <div className="carousel-image-overlay">
                            <button className="discover-button">Discover</button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Header;
