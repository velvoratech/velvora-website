import { useEffect, useRef } from 'react';

export default function VelvoraMarquee() {
  const marqueeRef = useRef(null);
  
  useEffect(() => {
    // Simple marquee animation
    const marqueeElement = marqueeRef.current;
    if (!marqueeElement) return;
    
    let position = 0;
    const speed = 1.25;
    const containerWidth = marqueeElement.offsetWidth;
    const textWidth = marqueeElement.scrollWidth;
    
    const animate = () => {
      position -= speed;
      
      // Reset position when text has scrolled completely
      if (position <= -textWidth) {
        position = containerWidth;
      }
      
      marqueeElement.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className="w-full overflow-hidden bg-[#EDD594] relative">
      {/* Top border */}
      <div className="w-full h-px bg-black"></div>
      
      {/* Marquee container */}
      <div className="relative overflow-hidden py-12">
        <div 
          ref={marqueeRef}
          className="whitespace-nowrap inline-block"
          style={{ fontFamily: 'ClashDisplay-Medium, sans-serif' }}
        >
          <span className="text-9xl tracking-tighter">VELVORA</span>
          <span className="text-9xl tracking-tighter ml-24">VELVORA</span>
          <span className="text-9xl tracking-tighter ml-24">VELVORA</span>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="w-full h-px bg-black"></div>
    </div>
  );
}