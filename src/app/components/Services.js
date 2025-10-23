import React from "react";
import {
  IconCode,
  IconDeviceDesktop,
  IconSettingsAutomation,
  IconPuzzle,
  IconRocket
} from "@tabler/icons-react";
import localFont from 'next/font/local';

const clashDisplay = localFont({ 
    src: '../../../public/fonts/ClashDisplay-Medium.woff2',
    display: 'swap',
    variable: '--font-clash-display'
});

export default function Services() {
  // Service data with icons and content
const services = [
  {
    icon: <IconCode size={32} color="#000" />,
    title: "Web Development",
    description: "Responsive, high-performance websites tailored to your brand."
  },
  {
    icon: <IconDeviceDesktop size={32} color="#000" />,
    title: "Customized Software Development",
    description: "Bespoke software solutions built around your unique needs."
  },
  {
    icon: <IconSettingsAutomation size={32} color="#000" />,
    title: "Automated Workflows",
    description: "Streamline operations through intelligent automation."
  },
  {
    icon: <IconPuzzle size={32} color="#000" />,
    title: "Technical Consulting",
    description: "Strategic guidance and architecture for scalable digital solutions."
  },
  {
    icon: <IconRocket size={32} color="#000" />,
    title: "Product Prototyping / MVP Development",
    description: "Transforming ideas into functional prototypes to validate and launch faster."
  }
];

  return (
    <div className="relative w-full h-full overflow-hidden bg-black px-4 sm:px-6 md:px-8">
      {/* Background SVG - making the arrows visible against black background and extending full width */}
      <svg 
        className="absolute top-0 left-0 w-full h-[70%] -z-100 mt-28 sm: h-[50%]" 
        viewBox="0 0 1440 737" 
        preserveAspectRatio="none" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="mask0_52_162" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="-226" y="16" width="384" height="721">
          <rect width="408.061" height="408.061" transform="matrix(0.470189 -0.882566 0.470189 0.882566 -226 376.141)" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_52_162)">
          <rect width="408.061" height="191.866" transform="matrix(-0.470189 -0.882566 1 0 -34.1328 376.141)" fill="#EDD594"/>
          <rect width="408.061" height="191.866" transform="matrix(0.470189 -0.882566 1 0 -226 736.282)" fill="#EDD594"/>
        </g>
        <mask id="mask1_52_162" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="8" y="16" width="385" height="721">
          <rect width="408.061" height="408.061" transform="matrix(0.470189 -0.882566 0.470189 0.882566 8.81641 376.141)" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask1_52_162)">
          <rect width="408.061" height="191.866" transform="matrix(-0.470189 -0.882566 1 0 200.684 376.141)" fill="#EDD594"/>
          <rect width="408.061" height="191.866" transform="matrix(0.470189 -0.882566 1 0 8.81641 736.282)" fill="#EDD594"/>
        </g>
        <mask id="mask2_52_162" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="243" y="16" width="385" height="721">
          <rect width="408.061" height="408.061" transform="matrix(0.470189 -0.882566 0.470189 0.882566 243.637 376.141)" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask2_52_162)">
          <rect width="408.061" height="191.866" transform="matrix(-0.470189 -0.882566 1 0 435.504 376.141)" fill="#EDD594"/>
          <rect width="408.061" height="191.866" transform="matrix(0.470189 -0.882566 1 0 243.637 736.282)" fill="#EDD594"/>
        </g>
        <mask id="mask3_52_162" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="478" y="16" width="385" height="721">
          <rect width="408.061" height="408.061" transform="matrix(0.470189 -0.882566 0.470189 0.882566 478.449 376.141)" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask3_52_162)">
          <rect width="408.061" height="191.866" transform="matrix(-0.470189 -0.882566 1 0 670.316 376.141)" fill="#EDD594"/>
          <rect width="408.061" height="191.866" transform="matrix(0.470189 -0.882566 1 0 478.449 736.282)" fill="#EDD594"/>
        </g>
        <mask id="mask4_52_162" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="713" y="16" width="384" height="721">
          <rect width="408.061" height="408.061" transform="matrix(0.470189 -0.882566 0.470189 0.882566 713.266 376.141)" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask4_52_162)">
          <rect width="408.061" height="191.866" transform="matrix(-0.470189 -0.882566 1 0 905.133 376.141)" fill="#EDD594"/>
          <rect width="408.061" height="191.866" transform="matrix(0.470189 -0.882566 1 0 713.266 736.282)" fill="#EDD594"/>
        </g>
        <mask id="mask5_52_162" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="964" y="8" width="384" height="721">
          <rect width="408.061" height="408.061" transform="matrix(0.470189 -0.882566 0.470189 0.882566 964 368.141)" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask5_52_162)">
          <rect width="408.061" height="191.866" transform="matrix(-0.470189 -0.882566 1 0 1155.87 368.141)" fill="#EDD594"/>
          <rect width="408.061" height="191.866" transform="matrix(0.470189 -0.882566 1 0 964 728.282)" fill="#EDD594"/>
        </g>
        <mask id="mask6_52_162" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="1214" y="0" width="385" height="721">
          <rect width="408.061" height="408.061" transform="matrix(0.470189 -0.882566 0.470189 0.882566 1214.73 360.141)" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask6_52_162)">
          <rect width="408.061" height="191.866" transform="matrix(-0.470189 -0.882566 1 0 1406.6 360.141)" fill="#EDD594"/>
          <rect width="408.061" height="191.866" transform="matrix(0.470189 -0.882566 1 0 1214.73 720.281)" fill="#EDD594"/>
        </g>
      </svg>

      {/* Services Container with proper margins on mobile */}
      <div 
        className="flex flex-col mx-4 sm:mx-8 md:mx-12 lg:mx-auto max-w-5xl my-8 md:my-16 border border-[#EDD594] rounded-lg overflow-hidden z-10 relative"
        style={{
          background: "linear-gradient(135deg, rgba(236,236,236,0.15) 0%, rgba(255,255,255,0.15) 100%)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)"
        }}
      >
        {/* Header */}
        <div className="border-b border-[#EDD594] py-4 px-6" 
          style={{ 
            background: "linear-gradient(90deg, rgba(30,30,30,0.2) 0%, rgba(50,50,50,0.2) 100%)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)" 
          }}>
          <h2 className={`${clashDisplay.variable} font-clash-display text-xl md:text-2xl text-[#EDD594]`}>Our Services</h2>
        </div>

        {/* Services Cards Container */}
        <div className="p-4 md:p-6" style={{ backdropFilter: "blur(5px)", WebkitBackdropFilter: "blur(5px)" }}>
          {/* Services Grid - changes to column on mobile with proper margins */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* First row - stacks vertically on mobile */}
            <div className="bg-[#FFFBE6] rounded-lg h-24 md:h-48 shadow-lg flex items-center justify-center p-4">
              <div className="flex flex-col items-center text-center">
                {services[0].icon}
                <h3 className="font-semibold mt-2">{services[0].title}</h3>
              </div>
            </div>
            <div className="bg-[#FFFBE6] rounded-lg h-24 md:h-48 shadow-lg flex items-center justify-center p-4">
              <div className="flex flex-col items-center text-center">
                {services[1].icon}
                <h3 className="font-semibold mt-2">{services[1].title}</h3>
              </div>
            </div>
            <div className="bg-[#FFFBE6] rounded-lg h-24 md:h-48 shadow-lg flex items-center justify-center p-4">
              <div className="flex flex-col items-center text-center">
                {services[2].icon}
                <h3 className="font-semibold mt-2">{services[2].title}</h3>
              </div>
            </div>
            
            {/* Second row - stacks vertically on mobile, preserves layout on desktop */}
            <div className="bg-[#FFFBE6] rounded-lg h-24 md:h-56 shadow-lg flex items-center justify-center p-4">
              <div className="flex flex-col items-center text-center">
                {services[3].icon}
                <h3 className="font-semibold mt-2">{services[3].title}</h3>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 bg-[#FFFBE6] rounded-lg h-24 md:h-56 shadow-lg flex items-center justify-center p-4">
              <div className="flex flex-col items-center text-center">
                {services[4].icon}
                <h3 className="font-semibold mt-2">{services[4].title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}