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
        <h1 
          className="text-5xl md:text-7xl font-bold tracking-tighter text-center select-none relative z-10"
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            color: '#065f46', // Emerald 800
            // Simple text shadow to replace complex SVG filter if needed, but keeping filter for texture
            filter: 'url(#textNoise)',
          }}
        >
          tamochi's home
        </h1>
        
        {/* SVG Filter for "Frosted Rough" Font Texture */}
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