import React from 'react';
import { motion } from 'framer-motion';
import { RESTAURANT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen px-6 pt-32 pb-20"
    >
      <div className="max-w-[1920px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
           <div>
             <h1 className="font-display text-6xl md:text-8xl leading-[0.9] mb-12">
               An Ode to <br/> <span className="text-rust italic">The Sky</span>
             </h1>
             <p className="font-sans text-lg text-cream/80 leading-relaxed max-w-xl indent-24">
               Sky Dine is not merely a restaurant; it is a sanctuary suspended above the cacophony of the everyday. Located on the 6th floor of Florence Excellence, we have crafted a space where gastronomy meets serenity.
             </p>
           </div>
           <div className="relative">
             <div className="absolute top-0 right-0 w-full h-full border border-rust/30 translate-x-4 translate-y-4"></div>
             <img src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2080" className="w-full h-[60vh] object-cover grayscale contrast-125 relative z-10" />
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-cream/10">
          {[
            { title: "Architecture", desc: "Our vision creates a duality of experience. The signature glass dome offers shelter while maintaining a connection to the starlit void." },
            { title: "Cuisine", desc: "A laboratory of flavors, blending the warmth of North Indian spices with the delicate techniques of Pan-Asian cuisine." },
            { title: "Experience", desc: "Whether you choose the intimacy of the dome or the breeze of the open deck, every seat provides a unique perspective." }
          ].map((item, idx) => (
            <div key={idx} className="p-12 border-b md:border-b-0 md:border-r border-cream/10 last:border-r-0 hover:bg-cream/5 transition-colors duration-500">
               <span className="font-sans text-xs text-rust uppercase tracking-widest mb-6 block">0{idx+1}</span>
               <h3 className="font-display text-3xl mb-6">{item.title}</h3>
               <p className="font-sans text-sm text-cream/60 leading-loose">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default About;