
import React, { useState } from 'react';
import Card1 from './cards1'; 
import Card2 from './cards2'; 
import Card3 from './cards3';
import Card4 from './cards4'; 

const PricingOptions = () => {

    const [selectedOption, setSelectedOption] = useState('Monthly'); 

    const renderCards = () => {
        switch (selectedOption) {
            case 'Monthly':
                return <Card1 />;
            case 'Quarterly':
                return <Card2 />;
            case 'Semi':
                return <Card3 />;
            case 'Annual':
                return <Card4 />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center items-center bg-gray-800 p-0 my-5 rounded-[25px] w-fit mx-auto">
                <button
                    className="bg-red-500 text-white text-sm border-none rounded-full py-2 px-4 transition duration-300 hover:bg-red-700"
                    onClick={() => setSelectedOption('Monthly')}
                >
                    Monthly
                </button>
                <button
                    className="bg-transparent text-white text-sm border-none rounded-full py-2 px-4 transition duration-300 hover:bg-red-700"
                    onClick={() => setSelectedOption('Quarterly')}
                >
                    Quarterly
                </button>
                <button
                    className="bg-transparent text-white text-sm border-none rounded-full py-2 px-4 transition duration-300 hover:bg-red-700"
                    onClick={() => setSelectedOption('Semi')}
                >
                    Semi
                </button>
                <button
                    className="bg-transparent text-white text-sm border-none rounded-full py-2 px-4 transition duration-300 hover:bg-red-700"
                    onClick={() => setSelectedOption('Annual')}
                >
                    Annual
                </button>
            </div>

        
            <div className="flex flex-wrap justify-center">
                {renderCards()}
            </div>
        </div>
    );
};

export default PricingOptions;
