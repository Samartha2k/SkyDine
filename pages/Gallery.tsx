import React, { useRef, useEffect } from 'react';
import { motion } from '@/lib/motion';

const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const images = Array.from({ length: 9 }).map((_, i) => ({
    url: `https://picsum.photos/seed/skydine_gallery_${i}/800/1000`,
    alt: `Gallery Image ${i + 1}`
  }));

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 overflow-x-hidden"
    >
      <div className="px-6 mb-20 text-center">
        <h1 className="font-display text-6xl md:text-8xl">Visuals</h1>
        <p className="font-sans text-xs text-rust uppercase tracking-[0.3em] mt-4">Captured Moments</p>
      </div>

      <div className="flex gap-12 px-6 overflow-x-auto pb-20 scrollbar-hide">
        {images.map((img, idx) => (
          <div key={idx} className="interactive flex-shrink-0 w-[80vw] md:w-[400px] group relative">
             <div className="overflow-hidden aspect-[3/4] mb-6">
               <img 
                 src={img.url} 
                 alt={img.alt} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
               />
             </div>
             <div className="flex justify-between items-end border-b border-cream/20 pb-4">
               <span className="font-sans text-xs uppercase tracking-widest">Scene 0{idx+1}</span>
               <span className="font-display text-2xl italic text-cream/40 group-hover:text-rust transition-colors">Sky Dine</span>
             </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
         <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-cream/30">Scroll Horizontally</span>
      </div>

    </motion.div>
  );
};

export default Gallery;