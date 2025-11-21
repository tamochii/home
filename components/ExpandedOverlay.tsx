import React from 'react';
import { motion } from 'framer-motion';
import { NavItem } from '../types';
import { Icon } from './Icons';

interface ExpandedOverlayProps {
  item: NavItem;
  onClose: () => void;
}

const ExpandedOverlay: React.FC<ExpandedOverlayProps> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-emerald-900/30 backdrop-blur-sm pointer-events-auto"
        onClick={onClose}
      />

      {/* The Expanded Card */}
      <motion.div
        layoutId={`card-container-${item.id}`}
        className="relative w-[90vw] h-[80vh] md:w-[80vw] md:h-[75vh] bg-white rounded-3xl overflow-hidden shadow-2xl pointer-events-auto"
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Slow, elegant ease
      >
        {/* Background Image (Random Picture) */}
        <motion.div className="absolute inset-0 z-0">
           <img 
             src={item.previewImage} 
             alt="Background" 
             className="w-full h-full object-cover opacity-90"
           />
           {/* Overlay Gradient to ensure text readability */}
           <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white/90" />
        </motion.div>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 bg-white/50 hover:bg-white/80 rounded-full transition-colors backdrop-blur-md"
        >
          <Icon name="X" className="w-6 h-6 text-slate-800" />
        </button>

        {/* Content Container */}
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
          
          {/* TOP LEFT: Logo/Avatar & Title */}
          <div className="flex flex-col items-start gap-4">
             {item.isAvatar ? (
                <motion.div 
                  layoutId={`card-icon-${item.id}`}
                  className="relative z-20"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={item.previewImage} 
                      alt="Avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
             ) : (
                <motion.div 
                  layoutId={`card-icon-${item.id}`}
                  className="relative z-20 bg-white/80 p-4 rounded-full border border-white/50 shadow-md backdrop-blur-md"
                >
                  <Icon name={item.iconName} className="w-12 h-12 text-slate-800" />
                </motion.div>
             )}

             <motion.h2 
               layoutId={`card-title-${item.id}`}
               className="relative z-20 text-4xl md:text-6xl font-bold text-slate-900 tracking-tight"
               style={{ textShadow: '0 2px 10px rgba(255,255,255,0.5)' }}
             >
               {item.title || (item.isAvatar && "About Me")}
             </motion.h2>
          </div>

          {/* BOTTOM LEFT: Description */}
          <div className="relative z-20 max-w-2xl mt-auto">
            <motion.div 
              layoutId={`card-desc-${item.id}`}
              className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed p-4 bg-white/30 backdrop-blur-md rounded-xl border border-white/40 shadow-sm"
            >
               {item.textContent ? (
                 <div className="whitespace-pre-wrap max-h-[30vh] overflow-y-auto pr-2 custom-scrollbar">
                   {item.textContent}
                 </div>
               ) : (
                 item.description
               )}
            </motion.div>
          </div>

        </div>

        {/* BOTTOM RIGHT: Action Button (Fades in slowly) */}
        {!item.isAvatar && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-8 right-8 z-30"
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white rounded-2xl overflow-hidden shadow-xl transition-transform hover:scale-105 active:scale-95`}
            >
              {/* Button Background matching card theme or generic dark */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color || 'from-slate-700 to-slate-900'} opacity-90`} />
              
              <span className="relative z-10 flex items-center gap-2 text-slate-800">
                Visit Site <Icon name="ExternalLink" className="w-5 h-5" />
              </span>
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </a>
          </motion.div>
        )}

        {/* Layout ID placeholder for the grid button to disappear into */}
        <motion.div layoutId={`card-btn-${item.id}`} className="hidden" />

      </motion.div>
    </div>
  );
};

export default ExpandedOverlay;