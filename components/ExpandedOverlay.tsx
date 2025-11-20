import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { NavItem } from '../types';
import { Icon } from './Icons';

interface ExpandedOverlayProps {
  item: NavItem;
  onClose: () => void;
}

const ExpandedOverlay: React.FC<ExpandedOverlayProps> = ({ item, onClose }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlipped(true);
    }, 300); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 md:p-8">
      {/* Backdrop - Lighter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-emerald-900/20 backdrop-blur-sm"
      />

      {/* 3D Container */}
      <div className="relative w-full max-w-5xl h-full md:h-[80vh] perspective-2000">
        <motion.div
          layoutId={`card-container-${item.id}`}
          className="relative w-full h-full"
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
            {/* The Card itself which rotates */}
            <motion.div
                className="relative w-full h-full transform-style-3d transition-all duration-700"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* FRONT FACE */}
                <div 
                    className="absolute inset-0 backface-hidden w-full h-full rounded-3xl bg-white border border-white/50 flex flex-col items-center justify-center overflow-hidden shadow-2xl"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                     <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-50 blur-[80px]`} />
                     
                     {item.isAvatar ? (
                       <motion.div layoutId={`card-icon-${item.id}`} className="relative z-10 mb-8">
                          <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-white/60 shadow-xl">
                             <img src={item.previewImage} alt="Avatar" className="w-full h-full object-cover" />
                          </div>
                       </motion.div>
                     ) : (
                       <motion.div layoutId={`card-icon-${item.id}`} className="relative z-10 p-8 bg-white/60 rounded-full mb-8 backdrop-blur-md shadow-sm">
                          <Icon name={item.iconName} className="w-20 h-20 text-slate-700" />
                       </motion.div>
                     )}

                     <motion.h2 layoutId={`card-title-${item.id}`} className="relative z-10 text-4xl md:text-6xl font-bold text-slate-800">
                        {item.title || (item.isAvatar && "About Me")}
                     </motion.h2>
                </div>

                {/* BACK FACE */}
                <div 
                    className="absolute inset-0 backface-hidden w-full h-full rounded-3xl bg-white border border-white/50 overflow-hidden shadow-2xl flex flex-col"
                    style={{ 
                        transform: 'rotateY(180deg)', 
                        backfaceVisibility: 'hidden', 
                        WebkitBackfaceVisibility: 'hidden' 
                    }}
                >
                    {/* Header of the "Browser Window" */}
                    <div className="h-14 bg-gray-100/80 backdrop-blur flex items-center justify-between px-6 border-b border-gray-200 shrink-0 relative z-20">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-amber-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 mx-8">
                            {!item.textContent && (
                                <div className="bg-white shadow-sm border border-gray-200 rounded-lg px-4 py-1.5 text-xs text-gray-500 font-mono text-center truncate max-w-md mx-auto flex items-center justify-center gap-2">
                                    <span className={`w-2 h-2 ${item.useLivePreview ? 'bg-green-400 animate-pulse' : 'bg-gray-400'} rounded-full`} />
                                    {item.url}
                                </div>
                            )}
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                            <Icon name="X" className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 relative bg-gray-50 overflow-hidden group flex flex-col">
                        
                        {item.textContent ? (
                            // TEXT CONTENT MODE (Profile)
                            <div className="flex-1 p-8 md:p-16 overflow-y-auto">
                                <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="flex items-center gap-6 mb-8">
                                        {item.isAvatar && (
                                            <img src={item.previewImage} alt="Profile" className="w-20 h-20 rounded-full object-cover border-4 border-gray-100" />
                                        )}
                                        <h2 className="text-3xl font-bold text-slate-800">About Me</h2>
                                    </div>
                                    <div className="prose prose-lg text-slate-600 whitespace-pre-wrap leading-relaxed">
                                        {item.textContent}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // BROWSER/IMAGE MODE
                            <>
                                {item.useLivePreview ? (
                                <iframe 
                                    src={item.url} 
                                    title={item.title}
                                    className="w-full h-full border-0"
                                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                                    loading="lazy"
                                />
                                ) : (
                                <img 
                                    src={item.previewImage} 
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                                )}
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/95 via-white/20 to-transparent" />

                                {/* Info Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col md:flex-row items-end md:items-center justify-between gap-6 pointer-events-none">
                                    <div className="max-w-2xl pointer-events-auto">
                                        <motion.h2 
                                            className="text-3xl md:text-5xl font-bold text-slate-800 mb-4"
                                        >
                                            {item.title}
                                        </motion.h2>
                                        <motion.p 
                                            className="text-lg text-slate-600 leading-relaxed"
                                        >
                                            {item.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`pointer-events-auto group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-slate-800 rounded-xl overflow-hidden bg-gradient-to-r ${item.color} shadow-lg transition-transform hover:scale-105 active:scale-95`}
                                        whileHover={{ y: -2 }}
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            Visit Site <Icon name="ExternalLink" className="w-5 h-5" />
                                        </span>
                                        <div className="absolute inset-0 -translate-x-[100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />
                                    </motion.a>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExpandedOverlay;