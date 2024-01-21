import React from "react";
import "./ScrollingText.css"; 

const ScrollingText = () => {
    return (
        <div class="scrolling-text">
        <div class="scrolling-text--inner direction-left">
          <div class="scrolling-text--item">
            <span>* SPECIAL SALE *</span>
          </div>
          <div class="scrolling-text--item">
            <span className="skate-text">SKATEBOARDING PROMO</span>
          </div>
          
        </div>
      </div>
    );
};
    
    export default ScrollingText;
