import React from 'react';
import { motion } from 'framer-motion';
import { NavItem } from '../types';
import { Icon } from './Icons';

interface GridCardProps {
  item: NavItem;
  onClick?: () => void;
}

const GridCard: React.FC<GridCardProps> = ({ item, onClick }) => {
  const isClickable = !!onClick;

  return (
    <motion.div
      layoutId={`card-container-${item.id}`}
      onClick={onClick}
      className={`relative group ${isClickable ? 'cursor-pointer' : 'cursor-default'} h-64 w-full z-10`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      {/* Card Background/Border wrapper - Light Mode Glass */}
      <motion.div
        className={`h-full w-full rounded-3xl p-[1px] bg-gradient-to-br from-white/60 to-white/30 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md`}
      >
        {/* Inner Content - White translucent */}
        <div className="relative h-full w-full bg-white/40 rounded-[23px] p-6 flex flex-col items-center justify-center overflow-hidden border border-white/50">

          {/* Decorative Gradient Orb - We layoutId this to blend into the expanded background if needed, or just fade out */}
          <motion.div
            layoutId={`card-bg-gradient-${item.id}`}
            className={`absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br ${item.color} opacity-40 blur-[60px] group-hover:opacity-50 transition-opacity duration-500 pointer-events-none`}
          />

          {item.isAvatar ? (
            // Avatar Mode Layout
            <>
              <motion.div
                layoutId={`card-icon-${item.id}`}
                className="relative z-10 mb-4"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/70 shadow-md">
                  <img
                    src={item.previewImage}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Use a hidden title layoutId to anchor it even if hidden, or display small */}
              <motion.div layoutId={`card-title-${item.id}`} className="hidden">
                {item.title || "About Me"}
              </motion.div>

              <motion.p
                layoutId={`card-desc-${item.id}`}
                className="relative z-10 mt-2 text-sm text-slate-600 text-center line-clamp-3 font-medium px-4"
              >
                {item.description}
              </motion.p>
            </>
          ) : (
            // Standard Mode Layout
            <>
              <motion.div
                layoutId={`card-icon-${item.id}`}
                className="relative z-10 bg-white/60 p-4 rounded-full mb-4 border border-white/40 shadow-sm text-emerald-800"
              >
                <Icon name={item.iconName} className="w-8 h-8 text-slate-700" />
              </motion.div>

              <motion.h3
                layoutId={`card-title-${item.id}`}
                className="relative z-10 text-xl font-bold text-slate-800 tracking-wide text-center"
              >
                {item.title}
              </motion.h3>

              <motion.p
                layoutId={`card-desc-${item.id}`}
                className="relative z-10 mt-2 text-sm text-slate-600 text-center line-clamp-2 font-medium"
              >
                {item.description}
              </motion.p>
            </>
          )}

          {isClickable && (
            <motion.div
              layoutId={`card-btn-${item.id}`}
              className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-slate-500 font-bold uppercase tracking-widest"
            >
              {item.isAvatar ? 'Read Bio' : 'Click to Open'}
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GridCard;