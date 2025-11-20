import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import GridCard from './components/GridCard';
import ExpandedOverlay from './components/ExpandedOverlay';
import { NAV_ITEMS } from './constants';
import { NavItem } from './types';

const App: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = NAV_ITEMS.find((item) => item.id === selectedId);

  return (
    <div className="min-h-screen bg-[#f0fdf4] text-slate-700 selection:bg-emerald-200 pb-20">
      
      {/* Decorative Background Elements - Little Fresh (Pastel) Theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Soft Mint Blob */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-200/40 rounded-full blur-[100px] mix-blend-multiply" />
        {/* Soft Teal Blob */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-200/40 rounded-full blur-[100px] mix-blend-multiply" />
        {/* Pale Lime/Yellow Accent */}
        <div className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-lime-100/60 rounded-full blur-[80px] mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />

        <main className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {NAV_ITEMS.map((item) => (
              <GridCard 
                key={item.id} 
                item={item} 
                onClick={() => setSelectedId(item.id)} 
              />
            ))}
          </div>
        </main>

        <AnimatePresence>
          {selectedId && selectedItem && (
            <ExpandedOverlay 
              item={selectedItem} 
              onClose={() => setSelectedId(null)} 
            />
          )}
        </AnimatePresence>
      </div>
      
      <footer className="mt-24 text-center text-emerald-800/40 text-sm font-medium">
         <p>&copy; {new Date().getFullYear()} tamochi'page. Designed with freshness.</p>
      </footer>
    </div>
  );
};

export default App;