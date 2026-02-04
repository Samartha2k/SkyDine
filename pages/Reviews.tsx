import React from 'react';
import { motion } from 'framer-motion';
import { REVIEWS } from '../constants';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen px-6 pt-32 pb-20"
    >
      <div className="max-w-[1920px] mx-auto">
        <h1 className="font-display text-6xl md:text-8xl mb-24 text-center md:text-left">Voices</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-cream/10">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="interactive border-b border-r border-cream/10 p-12 hover:bg-cream/5 transition-colors duration-500 group">
              <div className="flex gap-1 mb-8 opacity-40 group-hover:opacity-100 group-hover:text-rust transition-all">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'opacity-20'}`} />
                ))}
              </div>
              <p className="font-display text-xl md:text-2xl leading-relaxed mb-12">
                "{review.text}"
              </p>
              <div className="flex justify-between items-end">
                <span className="font-sans text-xs uppercase tracking-widest font-bold">{review.name}</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-cream/40">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Reviews;