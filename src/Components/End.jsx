import React from 'react';
import mainImage from '../assets/img/End1.png'; 
import smallImage from '../assets/img/dark.png'; 


function EndImage() {
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
      
    </div>
  );
}

export default EndImage;

