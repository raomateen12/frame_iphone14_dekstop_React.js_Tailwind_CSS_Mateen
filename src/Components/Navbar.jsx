

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo.jpg";
import symbol from "../assets/img/symbol.jpg"; 

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); 

    const toggleMenu = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

   
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.menu-button') && !event.target.closest('.dropdown')) {
                setIsDropdownOpen(false);
            }
        };

        window.addEventListener('click', handleOutsideClick);
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, []);

  
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setIsDropdownOpen(false); 
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="flex items-center bg-black p-4 relative">
            <img src={logo} alt="Logo" className="w-[90px] h-[30px] mr-5" />
            <ul className="hidden md:flex space-x-5 list-none">
                <li><Link to="/transporters" className="text-white text-lg hover:underline">Transporters</Link></li>
                <li><Link to="/full-service-broker" className="text-white text-lg hover:underline">Full Service Broker</Link></li>
                <li><Link to="/freight-forwarders" className="text-white text-lg hover:underline">Freight Forwarders/Brokers</Link></li>
            </ul>
            <div className="ml-auto hidden md:flex space-x-2">
                <button className="bg-white text-black rounded-full py-2 px-4 text-lg">Pricing</button>
                <button className="bg-red-600 text-white rounded-full py-2 px-4 text-lg hover:bg-white hover:text-black transition duration-300">Book a Demo</button>
            </div>
            {isMobile && ( 
                <>
                    <button className="menu-button text-white bg-transparent border-none cursor-pointer text-lg ml-auto" onClick={toggleMenu}>
                        Menu <img src={symbol} alt="Menu Symbol" className="menu-icon mr-2 inline-block" />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute bg-black border border-white z-10 w-28 top-12 right-0 dropdown">
                            <ul className="list-none p-2">
                                <li><Link to="/Home" className="text-white block py-2 hover:text-red-500">Home</Link></li>
                                <li><Link to="/about" className="text-white block py-2 hover:text-red-500">About</Link></li>
                                <li><Link to="/contact" className="text-white block py-2 hover:text-red-500">Contact</Link></li>
                            </ul>
                        </div>
                    )}
                </>
            )}
        </nav>
    );
};

export default NavBar;

