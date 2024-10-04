import React from 'react';
import logo from "../assets/img/logo.jpg";
import arrow from "../assets/img/arrow.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="footer-main text-white p-2 w-full md:w-1/2 mx-2.5"> 
          <div className="footer-input">
            <img
              src={logo}
              alt="website-logo"
              className="footer-image w-4/5 h-auto mb-8" 
            />
            <p className="seek text-gray-400 text-xl font-light leading-9">
              The first free end-to-end analytics service for the site, designed
              to work with enterprises of various levels and business segments.
            </p>
            <h2 className="feedback text-orange-500 font-black text-sm mt-4 mb-4">
              FEEDBACK
            </h2>
            <p className="seek text-gray-400 text-xl font-light leading-9">
              Seeking personalized support? <br />
              <span className="request text-xl"> Request a call from our team</span>
            </p>
            <form action="">
              <div className="footerdiv border-2 border-gray-600 rounded-md mb-5 mt-3 w-9/10 p-2 text-white hover:border-white"> 
                <label htmlFor="name" className="block">Your Name: </label>
                <input
                  type="text"
                  className="footer-email border-none text-white h-8 w-full bg-black focus:outline-none" 
                />
              </div>
              <div className="footerdiv border-2 border-gray-600 rounded-md mb-5 mt-3 w-9/10 p-2 text-white hover:border-white"> 
                <label htmlFor="phone" className="block">Phone Number: </label>
                <input
                  type="number"
                  className="footer-email border-none text-white h-8 w-full bg-black focus:outline-none" 
                />
              </div>
              <button className="footer-button bg-red-500 text-white font-normal rounded-full w-1/2 mx-4">
                Send a request
              </button>
            </form>
          </div>
        </div>
        <div className="footer-links mx-2.5 w-full md:w-[50vw]">
          <div className="link1 flex w-full">
            <div>
              <h3 className="linkheading text-[rgb(160,16,16)] mt-2.5 mb-2.5"> 
                Useful Links
              </h3>
              <ul className="links list-none">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
                <li>News Letter</li>
                <li>Pricing</li>
                <li>Our Blog</li>
                <li>FAQsEAC</li>
                <li>Profile</li>
              </ul>
            </div>
            <div className="space ml-0"> 
              <h3 className="linkheading text-[rgb(160,16,16)] mt-2.5 mb-2.5">
                Services
              </h3>
              <h4 className="linkheading2 mt-2 mb-2"> 
                Transporters
              </h4>
              <ul className="links list-none"> 
                <li>Post Trucks</li>
                <li>Search for Loads</li>
              </ul>
              <h4 className="linkheading2 mt-2 mb-2"> 
                Shippers
              </h4>
              <ul className="links list-none"> 
                <li>Post Trucks</li>
                <li>Search for Loads</li>
              </ul>
            </div>
            <div className="space ml-0 brokers mt-6.5"> 
              <h4 className="linkheading2 mt-2 mb-2"> 
                Brokers/Freight Forwarders
              </h4>
              <ul className="links list-none"> 
                <li>Post Trucks</li>
                <li>Search for Loads</li>
              </ul>

              <h4 className="linkheading2 mt-2 mb-2"> 
                Full Service Brokers
              </h4>
              <ul className="links list-none"> 
                <li>Post Trucks/Loads</li>
                <li>Search for Loads/Loads</li>
              </ul>
            </div>
          </div>

          <br />
          <div className="link2 flex w-full">
            <div>
              <h3 className="contactus linkheading text-xs text-gray-500 mb-2.5"> 
                CONTACT US
              </h3>
              <p>+254 (0) 709 677 400</p>
              <p>info@apexloads.com</p>

              <h3 className="linkheading text-[rgb(160,16,16)] mt-2.5 mb-2.5"> 
                Call me back
              </h3>

              <div className="follow mt-8"> 
                <h3>Follow Us</h3>
                <p className="socials">Telegram / Whatsapp / Instagram</p>
              </div>
              <div className="date text-xs mt-12">
                <p>&copy; 2024- COPYRIGHT</p>
                <p>Privacy</p>
              </div>
            </div>
            <div>
              <div className="address">
                <p>2972 Weshtheimer Rd. Santa Ana,</p>
                <p>Illonis 85486</p>
              </div>
              <img src={arrow} alt="Arrow Sign" width="150" height="150" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
