import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mapRef.current) return;
      
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth) * 8 - 4; // -4 to 4
      const yPos = (clientY / window.innerHeight) * 8 - 4; // -4 to 4
      
      mapRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="relative h-screen flex items-center">
      {/* Animated background map with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={mapRef}
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/269724/pexels-photo-269724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            filter: 'blur(4px) saturate(0.8) brightness(0.4)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-slate-900/60"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-tactical opacity-20 dark:opacity-10"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-pixel font-bold text-white mb-4 drop-shadow-lg">
            <span className="animate-pulse-slow text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">OpenFront</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
            Command your forces, expand your territory, and conquer the battlefield in this real-time strategy game.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-blue-500/30 group flex items-center gap-2">
              Play Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-lg transition-all border border-white/20">
              Watch Tutorial
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-6">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>1,240 Online</span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm text-white">
              <span>42 Active Games</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;