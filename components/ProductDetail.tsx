import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Zap, CreditCard, Gift, ChevronDown } from 'lucide-react';

const SmartphoneProductPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedOption, setSelectedOption] = useState('buy');
  const [count, setCount] = useState(0);
  
  // Animation for count-up effect on price
  useEffect(() => {
    if (count < 9999) {
      const timer = setTimeout(() => setCount(prev => prev + 100), 10);
      return () => clearTimeout(timer);
    } 
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        
        
        {/* Product Container */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row gap-8 mb-6">
          {/* Product Image */}
          <div className="md:w-2/5 relative">
            <div 
              className="bg-white p-4 rounded-lg transition-all duration-500"
              style={{
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)' : 'none'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img 
                src={} 
                alt={}
                className="w-full h-auto object-contain"
              />
              <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition">
                <Heart className="h-6 w-6 text-gray-400 hover:text-red-500 transition" />
              </button>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="md:w-3/5">
            <h1 className="text-2xl font-bold mb-2 animate-fadeIn">
              SAMSUNG Galaxy F06 5G (Bahama Blue, 128 GB) (4 GB RAM)
            </h1>
            
            <div className="flex items-center mb-4">
              <span className="bg-green-600 text-white px-2 py-1 rounded-md text-sm mr-2">4.4 ★</span>
              <span className="text-gray-600 text-sm">166 Ratings & 13 Reviews</span>
              <span className="ml-4 text-blue-700 text-sm font-semibold">Assured</span>
            </div>
            
            <div className="mb-4">
              {/* <div className="text-green-600 font-semibold">Extra ₹4000 off</div> */}
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">₹{count >= 9999 ? "9,999" : count}</span>
                {/* <span className="text-gray-500 line-through ml-2">₹13,999</span> */}
                <span className="text-green-600 ml-2 font-semibold">(Refurbished)</span>
              </div>
              <div className="text-sm text-gray-600 mt-1">+ ₹30 Secured Packaging Fee</div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  {/* <span className="text-green-500 mr-2 mt-1"><Gift className="h-5 w-5" /></span> */}
                  <div>
                    <span className="font-semibold">Brand :</span> Samsung
                    {/* <span className="text-blue-500 ml-1 cursor-pointer">T&C</span> */}
                  </div>
                </li>
                <li className="flex items-start">
                  {/* <span className="text-green-500 mr-2 mt-1"><Gift className="h-5 w-5" /></span> */}
                  <div>
                    <span className="font-semibold">Operating System :</span> Android
                    {/* <span className="text-blue-500 ml-1 cursor-pointer">T&C</span> */}
                  </div>
                </li>
                <li className="flex items-start">
                  {/* <span className="text-green-500 mr-2 mt-1"><Gift className="h-5 w-5" /></span> */}
                  <div>
                    <span className="font-semibold">Memory :</span> 128 GB
                    {/* <span className="text-blue-500 ml-1 cursor-pointer">T&C</span> */}
                  </div>
                </li> 

                <li className="flex items-start">
                  {/* <span className="text-green-500 mr-2 mt-1"><Gift className="h-5 w-5" /></span> */}
                  <div>
                    <span className="font-semibold">Screen Size :</span> 6.1 inches
                    {/* <span className="text-blue-500 ml-1 cursor-pointer">T&C</span> */}
                  </div>
                </li> 

                <li className="flex items-start">
                  {/* <span className="text-green-500 mr-2 mt-1"><Gift className="h-5 w-5" /></span> */}
                  <div>
                    <span className="font-semibold">Model name :</span> Samsung S23
                    {/* <span className="text-blue-500 ml-1 cursor-pointer">T&C</span> */}
                  </div>
                </li> 
              </ul>
              <br /><br />
              <div className="grid grid-cols-2 gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center transition transform hover:scale-105">
            <Zap className="h-5 w-5 mr-2" />
            BUY NOW
          </button>
        </div>
              
            </div>
            
            <div className="border rounded-lg overflow-hidden mb-6">
             
             
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}

      </div>
      
     
    </div>
  );
};

export default SmartphoneProductPage;