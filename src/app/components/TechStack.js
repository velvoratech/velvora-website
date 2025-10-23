import { useState, useEffect } from 'react';

export default function TechStack() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Technology items with logo URLs
  const techStack1 = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
  ];
  
  const techStack2 = [
    { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
  ];

  const combinedStack1 = [...techStack1, ...techStack1];
  const combinedStack2 = [...techStack2, ...techStack2];
  const allTechs = [...techStack1, ...techStack2];

  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center py-12">
      <div className="container px-4 mb-12">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-amber-200 font-medium text-center"style={{ 
            color: '#EDD594',
            fontFamily: '"ClashDisplay-Medium", sans-serif'
          }}>
          Powered by Modern, Scalable Tech
        </h1>
      </div>
      
      {/* Desktop Marquee Container */}
      {!isMobile && (
        <div className="w-full overflow-hidden space-y-6 hidden md:block">
          {/* First Row */}
          <div className="flex animate-marquee gap-6 w-[200%]">
            {combinedStack1.map((tech, i) => (
              <TechItem key={i} name={tech.name} logo={tech.logo} isDesktop={true} />
            ))}
          </div>

          {/* Second Row */}
          <div className="flex animate-marquee-reverse gap-6 w-[200%]">
            {combinedStack2.map((tech, i) => (
              <TechItem key={i} name={tech.name} logo={tech.logo} isDesktop={true} />
            ))}
          </div>
        </div>
      )}
      
      {/* Mobile Grid Container */}
      <div className="w-full md:hidden px-4">
        <div className="grid grid-cols-2 gap-6">
          {allTechs.map((tech, i) => (
            <TechItem key={i} name={tech.name} logo={tech.logo} isDesktop={false} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
      `}</style>
    </div>
  );
}

function TechItem({ name, logo, isDesktop }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={isDesktop ? "flex-shrink-0 w-1/12 px-2" : "w-full"}>
      <div className="bg-zinc-800 rounded-lg flex flex-col items-center justify-center h-32 md:h-36 w-full p-4 hover:bg-zinc-700 transition-colors duration-300 group">
        {!imageError ? (
          <img 
            src={logo}
            alt={`${name} logo`}
            className="w-12 h-12 md:w-16 md:h-16 object-contain group-hover:scale-110 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-12 h-12 md:w-16 md:h-16 bg-zinc-600 rounded flex items-center justify-center">
            <span className="text-2xl text-zinc-400">?</span>
          </div>
        )}
        <span className="text-zinc-300 text-sm md:text-base mt-3 font-medium">{name}</span>
      </div>
    </div>
  );
}