
import React, { useState } from 'react';
import p1 from '../assets/img/p4.jpg'; 

const Card1 = () => {
  const [activatedCard, setActivatedCard] = useState(null);

  const handleGetStartedClick = (cardIndex) => {
    setActivatedCard(cardIndex); 
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3 md:w-1/3 w-full"> 
            <div className="h-full bg-gray-800 bg-opacity-75 px-8 pt-12 pb-16 rounded-lg overflow-hidden text-center relative">
              <span className="text-white text-lg pr-80 font-bold pb-10">Transporter</span>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3 text-left">
                <span className="text-red-600 font-bold">$5</span>
                <span className="text-white">/month</span>
              </h1>
              <p className="leading-relaxed text-white mb-3 text-left">Entity responsible for moving goods from one location to another.</p>
              <ul className="leading-relaxed mb-3 text-left">
                <li className="flex items-center text-white">
                  <img src={p1} alt="icon" className="w-4 h-4 mr-2" /> Unlimited load searching
                </li>
                <li className="flex items-center text-white">
                  <img src={p1} alt="icon" className="w-4 h-4 mr-2" /> Unlimited truck posting
                </li>
                <li className="flex items-center text-white">
                  <img src={p1} alt="icon" className="w-4 h-4 mr-2" /> EAC Profile Verification
                </li>
              </ul>

             
              <button
                onClick={() => handleGetStartedClick(1)} 
                className="mt-4 bg-red-600 text-white px-12 py-2 rounded-full text-lg"
              >
                Get Started
              </button>

              {activatedCard === 1 && (
                <div className="absolute top-0 left-0 right-0 bg-red-600 text-white p-2 rounded-lg mt-2">
                  Activated
                </div>
              )}
            </div>
          </div>

          <div className="p-4 lg:w-1/3 md:w-1/3 hidden lg:block"> 
            <div className="h-full bg-gray-800 bg-opacity-75 px-8 pt-12 pb-16 rounded-lg overflow-hidden text-center relative">
              <span className="text-white text-lg pr-80 font-bold text-left">Transporter</span>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3 text-left">
                <span className="text-red-600 font-bold">$5</span>
                <span className="text-white">/month</span>
              </h1>
              <p className="leading-relaxed text-white mb-3 text-left">Entity responsible for moving goods from one location to another.</p>
              <ul className="leading-relaxed mb-3 text-left">
                <li className="flex items-center text-white">
                  <img src={p1} alt="icon" className="w-4 h-4 mr-2" /> Unlimited load searching
                </li>
                <li className="flex items-center text-white">
                  <img src={p1} alt="icon" className="w-4 h-4 mr-2" /> Unlimited truck posting
                </li>
                <li className="flex items-center text-white">
                  <img src={p1} alt="icon" className="w-4 h-4 mr-2" /> EAC Profile Verification
                </li>
              </ul>

              <button
                onClick={() => handleGetStartedClick(2)}
                className="mt-4 bg-red-600 text-white px-12 py-2 rounded-full text-lg"
              >
                Get Started
              </button>

              {activatedCard === 2 && (
                <div className="absolute top-0 left-0 right-0 bg-red-600 text-white p-2 rounded-lg mt-2">
                  Activated
                </div>
              )}
            </div>
          </div>

          <div className="p-4 lg:w-1/3 md:w-1/3 hidden lg:block">
            <div className="h-full bg-red-600 px-8 pt-12 pb-16 rounded-lg overflow-hidden text-center relative">
              <span className="text-white text-lg pr-80 font-bold pb-10">Transporter</span>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3 text-left">
                <span className="text-white font-bold">$5</span>
                <span className="text-white">/month</span>
              </h1>

              <p className="pr-1 text-white mb-3 text-left">Entity responsible for moving goods from one location to another.</p>
              <ul className="leading-relaxed mb-3 text-left">
                <li className="flex items-center text-white">
                  <img src={p1} alt="icon" className="w-4 h-4 mr-2" /> Unlimited load searching
                </li>
                <li className="flex items-center text-white">
                  <img src={p1} alt="icon" className="w-4 h-4 mr-2" /> Unlimited truck posting
                </li>
                <li className="flex items-center text-white">
                  <img src={p1} alt="icon" className="w-4 h-4 mr-2" /> EAC Profile Verification
                </li>
              </ul>

              <button
                onClick={() => handleGetStartedClick(3)}
                className="mt-4 bg-black text-white px-12 py-2 rounded-full text-lg"
              >
                Get Started
              </button>

              {activatedCard === 3 && (
                <div className="absolute top-0 left-0 right-0 bg-white text-red-600 p-2 rounded-lg "> 
                  Activated
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card1;
