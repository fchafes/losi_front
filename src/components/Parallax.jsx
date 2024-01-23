import React from 'react';
import './Parallax.css'; 
import parallaxImage from '/public/picture3.webp';


const Parallax = () => {
  return (
    <div className="container">
      <div className="parallax" style={{ backgroundImage: `url(${parallaxImage})` }}>
          <div className="left"></div>
        </div>
      </div>
  );
};

export default Parallax;
