'use client';

import localFont from 'next/font/local';

// Define Clash Display font
const clashDisplay = localFont({ 
  src: '../../../public/fonts/ClashDisplay-Medium.woff2',
  variable: '--font-clash-display'
});

const clashDisplayLight = localFont({ 
    src: '../../../public/fonts/ClashDisplay-Extralight.woff2',
    variable: '--font-clash-display'
  });

const Vision = () => {
  return (
    <div className="bg-black py-16 px-6 md:px-16 lg:-mt-[450px]">
      <div className="max-w-7xl mx-auto">
        <div className={`${clashDisplay.variable} border border-[#EDD594] p-12 md:p-16`}>
          {/* Vision Title */}
          <h2 className="font-clash-display text-[#EDD594] text-6xl md:text-7xl lg:text-8xl font-medium mb-10 md:mb-14">
            Our Vision
          </h2>
          
          {/* Vision Quote */}
          <p className="font-clash-display text-[#FFFFE3] text-2xl md:text-3xl font-medium mb-8 md:mb-10">
            "To make smart, scalable IT solutions accessible to every business."
          </p>
          
        {/* Vision Description - First Paragraph */}
<p className={`${clashDisplayLight.variable} font-clash-display text-[#FFFFE3] text-lg md:text-xl font-light mb-6 md:mb-8 leading-relaxed`}>
  At Velvora Technologies, we believe that technology should be an enabler — not a barrier. Our 
  vision is to become a trusted partner for businesses of all sizes, helping them embrace digital 
  transformation without complexity or high costs.
</p>

{/* Vision Description - Second Paragraph */}
<p className={`${clashDisplayLight.variable} font-clash-display text-[#FFFFE3] text-lg md:text-xl font-light leading-relaxed`}>
  We see a future where small and mid-sized enterprises operate with the same efficiency, 
  automation, and insight as large corporations — powered by tailored tech solutions that evolve 
  as they grow.
</p>
        </div>
      </div>
    </div>
  );
};

export default Vision;