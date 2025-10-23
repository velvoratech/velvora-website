// ChooseUs.js
'use client';
import React from 'react';

export default function ChooseUs() {
  const points = [
    "Exceptional quality and attention to detail in every project we deliver",
    "Personalized solutions tailored to your specific needs and requirements",
    "Transparent communication and collaborative approach throughout the process"
  ];

  return (
    <div className="w-full bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl mb-12 text-center"
          style={{ 
            color: '#EDD594',
            fontFamily: '"ClashDisplay-Medium", sans-serif'
          }}
        >
          Why Choose Us?
        </h2>
        
        <div className="space-y-6">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="flex items-center bg-[#1C1C1C] rounded-md overflow-hidden"
            >
              <div 
                className="w-16 h-16 flex items-center justify-center"
                style={{ 
                
                  borderTopRightRadius: '0.375rem',
                  borderBottomRightRadius: '0.375rem'
                }}
              >
                <svg width="65" height="50" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id={`mask-${index}`} style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="27">
                    <rect width="16.7593" height="16.7593" transform="matrix(0.645631 -0.76365 0.645631 0.76365 0.480469 13.4199)" fill="#D9D9D9"/>
                  </mask>
                  <g mask={`url(#mask-${index})`}>
                    <rect width="16.7593" height="10.8203" transform="matrix(-0.645631 -0.76365 1 0 11.3008 13.4199)" fill="#FFFFE3"/>
                    <rect width="16.7593" height="10.8203" transform="matrix(0.645631 -0.76365 1 0 0.480469 26.2178)" fill="#EDD594"/>
                  </g>
                </svg>
              </div>
              
              <p 
                className="text-white pl-6 py-5 pr-4 text-lg"
                style={{ fontFamily: '"ClashDisplay-Extralight", sans-serif' }}
              >
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}