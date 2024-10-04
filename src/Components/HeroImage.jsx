
import React from 'react';
import mainImage from '../assets/img/p1.jpg'; 
import smallImage from '../assets/img/P11.jpg'; 


function HeroImage() {
  return (
    <div className="relative w-full overflow-hidden mt-5">
      <img
        src={mainImage} 
        alt="Main Image"
        className="w-full h-auto object-cover contrast-125 brightness-90 main-image" 
      />
      <img
        src={smallImage} 
        alt="Small Image"
        className="w-full h-auto object-cover contrast-125 brightness-90 small-image hidden" 
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center text-4xl sm:text-6xl">
        PRICING
      </div>
    </div>
  );
}

export default HeroImage;

