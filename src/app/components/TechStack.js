import { useState, useEffect } from 'react';
import localFont from 'next/font/local';

const clashDisplay = localFont({ 
  src: '../../../public/fonts/ClashDisplay-Medium.woff2',
  variable: '--font-clash-display'
});

export default function TechStack() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Handle responsive behavior
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Technology items
  const techStack1 = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "GraphQL"];
  const techStack2 = ["Tailwind", "Firebase", "AWS", "Docker", "Kubernetes", "Redis"];

  // Combined array for seamless loop
  const combinedStack1 = [...techStack1, ...techStack1];
  const combinedStack2 = [...techStack2, ...techStack2];

  // All techs for mobile view
  const allTechs = [...techStack1, ...techStack2];

  return (
    <div className={`bg-black min-h-screen w-full flex flex-col items-center py-12 ${clashDisplay.variable}`}>
      <div className="container px-4 mb-12">
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl text-[#EDD594] font-medium text-center"
          style={{ fontFamily: 'var(--font-clash-display)' }}
        >
          Powered by Modern, Scalable Tech
        </h1>
      </div>
      
      {/* Desktop Marquee Container */}
      {!isMobile && (
        <div className="w-full overflow-hidden space-y-4 hidden md:block">
          {/* First Row */}
          <div className="flex animate-marquee gap-4 w-[200%]">
            {combinedStack1.map((tech, i) => (
              <TechItem key={i} name={tech} isDesktop={true} />
            ))}
          </div>

          {/* Second Row */}
          <div className="flex animate-marquee gap-4 w-[200%]">
            {combinedStack2.map((tech, i) => (
              <TechItem key={i} name={tech} isDesktop={true} />
            ))}
          </div>
        </div>
      )}
      
      {/* Mobile Grid Container - 3 items per row */}
      <div className="w-full md:hidden px-4">
        <div className="grid grid-cols-2 gap-6">
          {allTechs.map((tech, i) => (
            <TechItem key={i} name={tech} isDesktop={false} />
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

function TechItem({ name, isDesktop }) {
  return (
    <div className={isDesktop ? "flex-shrink-0 w-1/12 px-2" : "w-full"}>
      <div className="bg-zinc-800 rounded-md flex items-center justify-center h-24 md:h-32 w-full">
        <img 
          src={`/api/placeholder/64/64`} 
          alt={name} 
          className="w-10 h-10 md:w-14 md:h-14 opacity-70 object-contain"
        />
      </div>
    </div>
  );
}