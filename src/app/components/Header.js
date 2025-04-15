// components/Header.jsx
import { useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  useEffect(() => {
    // Add font-face declarations dynamically to ensure proper loading
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Melodrama';
        src: url('/fonts/Melodrama-Bold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
      }
      @font-face {
        font-family: 'ClashDisplay';
        src: url('/fonts/ClashDisplay-Extralight.woff2') format('woff2');
        font-weight: 200;
        font-style: normal;
        font-display: swap;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <header className="relative w-full overflow-hidden">
      {/* Main navbar container */}
      <div className="relative bg-black h-28">
        <div className="mx-auto h-full max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo with glow effect - centered on large screens, left on small */}
          <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            {/* Blurred glow effect */}
            <div className="absolute -z-10 top-0 left-0 w-full h-full">
              <h1 className="font-[Melodrama] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#FFFFE3] uppercase filter blur-[2px]">
                VELVORA
              </h1>
            </div>
            
            {/* Main logo */}
            <h1 className="font-[Melodrama] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#FFFFE3] uppercase">
              VELVORA
            </h1>
          </div>
          
          {/* Get in touch button - right aligned on all screens, size adjusts */}
          <div className="relative md:absolute md:right-4">
            <Link href="/" passHref>
              <button className="group relative">
                {/* Button inner content with responsive padding and font size */}
                <div className="relative rounded-lg px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 backdrop-blur-xl bg-white/10 text-white overflow-hidden z-10">
                  <span className="font-['ClashDisplay'] text-sm sm:text-base md:text-lg font-extralight">Get in touch</span>
                </div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-lg border border-[#EDD594] z-0"></div>
                <div className="absolute inset-0 rounded-lg border-2 border-[#EDD594] opacity-60 blur-md z-0"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Enhanced glowing header break line */}
      <div className="relative w-full h-[10px] bg-black">
        {/* Solid base line at the top of the container */}
        <div className="absolute inset-x-0 top-0 h-[0px] bg-[#EDD594]"></div>
        
        {/* Multiple glow layers positioned below the line */}
        <div className="absolute inset-x-0 top-[1px] h-[3px] bg-[#EDD594] opacity-90 blur-sm"></div>
        <div className="absolute inset-x-0 top-[2px] h-[5px] bg-[#EDD594] opacity-80 blur-md"></div>
        <div className="absolute inset-x-0 top-[3px] h-[8px] bg-[#EDD594] opacity-60 blur-lg"></div>
      </div>
    </header>
  );
};

export default Header;