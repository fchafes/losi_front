import React from "react";
import "./Header.css"; 
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Header = () => {
    return (
        <div className="header">
            <div className="carousel-wrapper">
                <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
                    <div className="carousel-slide">
                        <img className="carousel-image" src={"letter2.png"} alt="Slide 1" />
                        <div className="carousel-image-overlay">
                            <button className="discover-button">Discover</button>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <img className="carousel-image" src={"P2144034.jpg"} alt="Slide 2" />
                        <div className="carousel-image-overlay">
                            <button className="discover-button">Discover</button>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <img className="carousel-image" src={"/mbn.png"} alt="Slide 3" />
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
