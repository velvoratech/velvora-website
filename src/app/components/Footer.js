'use client';

import Link from 'next/link';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import localFont from 'next/font/local';

// Define local fonts
const melodrama = localFont({ 
  src: '../../../public/fonts/Melodrama-Bold.woff2',
  variable: '--font-melodrama'
});

const clashDisplay = localFont({ 
  src: '../../../public/fonts/ClashDisplay-Medium.woff2',
  variable: '--font-clash-display'
});

const Footer = () => {
  return (
    <footer className="bg-[#EDD594] py-16 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Button with enhanced shadow/glow effect */}
        <div className="flex justify-center mb-16 md:mb-48">
          <button className={`${clashDisplay.variable} font-clash-display border-2 border-black rounded-md w-full max-w-4xl py-4 md:py-5 text-center text-black text-base md:text-lg font-bold hover:bg-black hover:text-[#EDD594] transition-colors duration-300 shadow-[0_8px_15px_rgba(0,0,0,0.3)]`}>
            Get in touch
          </button>
        </div>
        
        {/* Mobile and Desktop layouts */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-8">
          {/* Mobile: Stacked layout (Social, Email, Logo, Copyright) */}
          <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-auto">
            {/* Social icons - centered on mobile, left on desktop */}
            <div className="flex gap-6 md:order-1">
              <Link href="https://otieu.com/4/10073375" className="text-black hover:opacity-70 transition-opacity">
                <FaInstagram size={28} />
              </Link>
              <Link href="https://otieu.com/4/10073375" className="text-black hover:opacity-70 transition-opacity">
                <FaLinkedinIn size={28} />
              </Link>
            </div>
            
            {/* Email - centered on mobile, left on desktop */}
            <a 
              href="mailto:contact@velvoratech.com" 
              className={`${clashDisplay.variable} font-clash-display text-black hover:underline text-sm font-medium md:order-2`}
            >
              contact@velvoratech.com
            </a>
          </div>
          
          {/* Logo and Copyright - centered on mobile, right on desktop */}
          <div className="flex flex-col items-center md:items-end gap-1 w-full md:w-auto">
            <div className={`${melodrama.variable} font-melodrama text-6xl md:text-8xl font-bold text-black tracking-tighter`}>VELVORA</div>
            <div className={`${clashDisplay.variable} font-clash-display text-xs text-black font-medium`}>© 2025 Velvora Technologies. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
