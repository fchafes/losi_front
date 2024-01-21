import React from "react";
import "./Header.css"; 
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Asegúrate de importar los estilos

import foto2 from "/public/picture5.jpg";
import foto3 from "/public/picture2.jpg";
import foto4 from "/public/picture.webp";

const Header = () => {
    return (
        <div className="header">
                <div className="carousel-wrapper">
          <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
        <div>
          <img  className="carousel-image" src={foto2} alt="Slide 1" />
        </div>
        <div>
          <img className="carousel-image" src={foto3} alt="Slide 2" />
        </div>
        <div>
          <img className="carousel-image" src={foto4} alt="Slide 3" />
        </div>
      </Carousel>
      <div className="carousel-image-overlay"></div>
      </div>
      </div>
        );
};


export default Header;