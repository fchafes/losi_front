import React from "react";
import "./ScrollingText.css"; 

const ScrollingText = () => {
    return (
        <div className="scrolling-text">
        <div className="scrolling-text--inner direction-left">
          <div className="scrolling-text--item">
            <span>* SPECIAL SALE *</span>
          </div>
          <div className="scrolling-text--item">
            <span className="skate-text">SKATEBOARDING PROMO</span>
          </div>
          
        </div>
      </div>
    );
};
    
    export default ScrollingText;
