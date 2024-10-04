import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import HeroImage from './Components/HeroImage';
import PricingOptions from './Components/Pricing'; 
import EndImage from './Components/End';
import Footer from './Components/footer';

function App() {
    return (
        <Router>
            <div className="App bg-black min-h-screen text-white"> 
                <Navbar />
                <main className="p-4">
                    
                 
                    <HeroImage /> 
                    <PricingOptions /> 
                    <EndImage/>
                    <Footer/>
                   
                </main>
            </div>
        </Router>
    );
}

export default App;
