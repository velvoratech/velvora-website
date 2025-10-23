import React, { useEffect } from 'react';

const Approach = () => {
  useEffect(() => {
    // Add font-face declarations dynamically to ensure proper loading
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'ClashDisplayBold';
        src: url('/fonts/ClashDisplay-Medium.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
      }
 
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
   <>
         <div className="relative z-20 text-center pt-8 md:pt-12 lg:pt-16 px-4 bg-black py-8">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium text-[#EDD594] mb-8 font-[ClashDisplayBold]">
          Our Approach to Building Smarter Businesses
        </h1>
      </div>
    <div className="relative w-full h-full bg-black text-white overflow-hidden -mt-8">
        
      <div className="absolute inset-0">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1279 2408" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="xMidYMid meet"
        >
          {/* DISCOVERY CALL SECTION - TOP LEFT */}
          
          {/* First vertical line at the top left */}
          <line x1="13" y1="325.001" x2="13" y2="-0.000488281" stroke="#EDD594" strokeWidth="5" />
          
          {/* Second vertical line of Discovery Call section (below the dot) */}
          <line x1="24.5" y1="467" x2="24.5" y2="215" stroke="#EDD594" strokeWidth="5"/>
          
          {/* Horizontal line extending right from Discovery Call */}
          <line x1="152.003" y1="590.5" x2="700.003" y2="591.583" stroke="#EDD594" strokeWidth="5"/>
          
          {/* Diagonal connector line from vertical to horizontal (forms the corner) */}
          <line x1="27.0564" y1="465.935" x2="153.06" y2="590.931" stroke="#EDD594" strokeWidth="5"/>
          
          {/* Golden dot at top left with glow effect */}
          <g filter="url(#filter0_f_62_448)">
            <circle cx="14" cy="159" r="10" fill="#E5B42F"/>
          </g>
          <circle cx="14" cy="159" r="10" fill="#E5B42F"/>
          
          {/* DEVELOPMENT SECTION - BOTTOM LEFT */}
          
          {/* First vertical line of Development section */}
          <path d="M33 1529L33 1202.18" stroke="#EDD594" strokeWidth="5"/>
          
          {/* Second vertical line of Development section (below the dot) */}
          <line x1="43.5" y1="1671" x2="43.5" y2="1419" stroke="#EDD594" strokeWidth="5"/>
          
          {/* Horizontal line extending right from Development */}
          <line x1="171.003" y1="1794.5" x2="769.003" y2="1795.58" stroke="#EDD594" strokeWidth="5"/>
          
          {/* Diagonal connector line from vertical to horizontal (forms the corner) */}
          <line x1="46.0564" y1="1669.94" x2="172.06" y2="1794.93" stroke="#EDD594" strokeWidth="5"/>
          
          {/* Golden dot for Development section with glow effect */}
          <g filter="url(#filter1_f_62_448)">
            <circle cx="33" cy="1363" r="10" fill="#E5B42F"/>
          </g>
          <circle cx="33" cy="1363" r="10" fill="#E5B42F"/>
          
          {/* SOLUTION DESIGN SECTION - TOP RIGHT */}
      
          
          {/* Bottom vertical line of Solution Design section */}
          <line x1="1258.01" y1="879" x2="1258.01" y2="1204" stroke="#EDD594" strokeWidth="5"/>
          
          {/* Top vertical line of Solution Design section (above the dot) */}
          <path d="M1246.51 741V988.999" stroke="#EDD594" strokeWidth="5"/>
          
          {/* Left horizontal line connecting Discovery Call to Solution Design */}
          <line x1="33.0027" y1="1201.5" x2="631.003" y2="1202.58" stroke="#EDD594" strokeWidth="5"/>
          
          {/* Right horizontal line connecting to Solution Design vertical */}
          <path d="M631 1203L1257 1204.08" stroke="#EDD594" strokeWidth="5"/>
          
          {/* Diagonal connector line forming the corner at top right */}
          <path d="M1247 742L1117.95 613.068" stroke="#EDD594" strokeWidth="5"/>
          
          {/* NEW: Horizontal line going left from the diagonal connector in Solution Design */}
          <line x1="1117.95" y1="613.068" x2="500" y2="613.068" stroke="#EDD594" strokeWidth="5"/>
          
          {/* Golden dot for Solution Design section with glow effect */}
          <g filter="url(#filter2_f_62_448)">
            <circle cx="1185" cy="678" r="10" transform="rotate(180 1185 678)" fill="#E5B42F"/>
          </g>
          <circle cx="1185" cy="678" r="10" transform="rotate(180 1185 678)" fill="#E5B42F"/>
          
          {/* LAUNCH & SUPPORT SECTION - BOTTOM RIGHT */}
          
          {/* Bottom vertical line of Launch & Support section */}
          <line x1="1277.01" y1="2083" x2="1277.01" y2="2408" stroke="#EDD594" strokeWidth="5"/>
          
          {/* Top vertical line of Launch & Support section (above the dot) */}
          <path d="M1265.51 1945V2193" stroke="#EDD594" strokeWidth="5"/>
          
          {/* Horizontal line connecting Development to Launch & Support */}
          <line x1="1138" y1="1817.5" x2="563" y2="1817.5" stroke="#EDD594" strokeWidth="5"/>
          
          {/* Diagonal connector line forming the corner at bottom right */}
          <path d="M1266 1946L1136.95 1817.07" stroke="#EDD594" strokeWidth="5"/>
          
          {/* Golden dot for Launch & Support section with glow effect */}
          <g filter="url(#filter3_f_62_448)">
            <circle cx="1201" cy="1882" r="10" transform="rotate(180 1201 1882)" fill="#E5B42F"/>
          </g>
          <circle cx="1201" cy="1882" r="10" transform="rotate(180 1201 1882)" fill="#E5B42F"/>
          
          {/* FILTER DEFINITIONS FOR GLOW EFFECTS */}
          <defs>
            {/* Glow filter for Discovery Call dot */}
            <filter id="filter0_f_62_448" x="0" y="145" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_62_448"/>
            </filter>
            
            {/* Glow filter for Development dot */}
            <filter id="filter1_f_62_448" x="19" y="1349" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_62_448"/>
            </filter>
            
            {/* Glow filter for Solution Design dot */}
            <filter id="filter2_f_62_448" x="1171" y="664" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_62_448"/>
            </filter>
            
            {/* Glow filter for Launch & Support dot */}
            <filter id="filter3_f_62_448" x="1187" y="1868" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_62_448"/>
            </filter>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 p-4 md:p-6 flex flex-col h-full max-h-full justify-between">
        {/* Discovery Call Section - Top Left Text */}
        <div className="
          mt-8 max-w-full ml-[20px]
          md:ml-[200px]
          lg:ml-[750px]
        ">
          <h2 className="text-2xl md:text-3xl font-[ClashDisplayBold] text-[#EDD594] mb-2">Discovery Call</h2>
          <p className="text-[#FFFFE3] max-w-xs font-[ClashDisplay] text-xs md:text-sm"
          style={{ fontFamily: '"ClashDisplay", sans-serif' }}>
          Our initial discovery call helps us understand your unique business challenges and goals. We collaborate closely to identify opportunities, gather essential insights, and tailor strategies that align with your vision.
          </p>
        </div>

        {/* Solution Design Section - Top Right Text */}
        <div className="
          text-right mt-12 max-w-full mr-[30px]
          md:mr-[200px]
          lg:mr-[750px] lg:mt-20
        ">
          <h2 className="text-2xl md:text-3xl font-medium text-[#EDD594] mb-2 font-[ClashDisplayBold]">Solution Design</h2>
          <p className="text-[#FFFFE3] max-w-xs ml-auto font-[ClashDisplay] text-xs md:text-sm"
          style={{ fontFamily: '"ClashDisplay", sans-serif' }}>
            In the solution design phase, we create customized strategies and innovative solutions that address your specific needs. Leveraging the latest technologies and industry best practices, we craft scalable, future-proof business models that drive growth and maximize ROI.
          </p>
        </div>

        {/* Development Section - Bottom Left Text */}
        <div className="
          mt-16 max-w-full ml-[30px]
          md:ml-[200px]
          lg:ml-[750px] lg:mt-24
        ">
          <h2 className="text-2xl md:text-3xl font-medium text-[#EDD594] mb-2 font-[ClashDisplayBold]">Development</h2>
          <p className="text-[#FFFFE3] max-w-xs font-[ClashDisplay] text-xs md:text-sm"
          style={{ fontFamily: '"ClashDisplay", sans-serif' }}>
           Our team transforms the solution design into a fully functional product. We focus on delivering high-quality, reliable, and user-friendly software tailored to streamline your operations and enhance customer experience, ensuring your business stays competitive in a digital-first world.
          </p>
        </div>

        {/* Launch & Support Section - Bottom Right Text */}
        <div className="
          mb-8 mt-16 text-right max-w-full mr-[30px]
          md:mr-[200px] md:mb-8
          lg:mr-[750px] lg:mt-16
        ">
          <h2 className="text-2xl md:text-3xl font-medium text-[#EDD594] mb-2 font-[ClashDisplayBold]">Launch & Support</h2>
          <p className="text-[#FFFFE3] max-w-xs ml-auto font-[ClashDisplay] text-xs md:text-sm"
          style={{ fontFamily: '"ClashDisplay", sans-serif' }}>
           We guide your business through a seamless product launch, ensuring minimal downtime and maximum impact. Post-launch, our team provides continuous monitoring, maintenance, and updates to keep your business running smoothly and adapt to evolving market demands.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Approach;