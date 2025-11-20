import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex justify-center items-center py-16 relative z-10"
    >
      <div className="relative">
        {/* Removed the glow background container completely as requested */}
        
        <h1 
          className="text-5xl md:text-7xl font-bold tracking-tighter text-center select-none relative z-10"
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            // Using color with a slight opacity to blend, or a solid dark green with texture
            color: '#065f46', // Emerald 800
            
            // CSS trick for "Rough" texture on the font itself:
            // We use a noise image as a mask or background clip if we wanted gradient text,
            // but for "Solid + Texture", text-shadow and SVG filters work best.
            // Here we simulate the "Frosted Rough" look by adding a grain filter URL to the text itself (if supported)
            // or simply using a grainy SVG filter on the text element.
            filter: 'url(#textNoise)',
          }}
        >
          tamochi'page
        </h1>
        
        {/* SVG Filter Definition for the "Rough/Frosted" Font Texture */}
        <svg className="absolute w-0 h-0">
          <filter id="textNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.4 0" in="noise" result="coloredNoise" />
            <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite" />
            <feBlend mode="multiply" in="composite" in2="SourceGraphic" />
          </filter>
        </svg>

      </div>
    </motion.header>
  );
};

export default Header;