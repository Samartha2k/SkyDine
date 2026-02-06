import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, OFFERS } from '../constants';
import { ArrowUpRight, ShieldCheck, Globe } from 'lucide-react';

const OrderOnline: React.FC = () => {
  // Filter out Magicpin for symmetry (leaving 4 items)
  const orderingLinks = SOCIAL_LINKS.filter(link => link.name !== 'Magicpin');

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen px-4 sm:px-6 pt-24 sm:pt-32 pb-20"
    >
      <div className="max-w-[1920px] mx-auto">
        <header className="mb-12 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
           <div className="max-w-2xl">
              <span className="font-sans text-xs text-rust uppercase tracking-[0.4em] mb-4 block">Concierge & Delivery</span>
               <h1 className="font-display text-4xl sm:text-6xl md:text-8xl leading-none">Dining <br/> <span className="italic text-cream/50">Gateways</span></h1>
           </div>
           <p className="font-sans text-cream/40 text-xs uppercase tracking-[0.2em] max-w-xs md:text-right">
             Select a platform to experience Sky Dine's culinary excellence from the comfort of your home.
           </p>
        </header>

        {/* Redesigned Luxury Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/10 mb-16 sm:mb-32 border border-cream/10">
          {orderingLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url} 
              target="_blank" 
              rel="noreferrer"
              className="interactive group relative min-h-[220px] sm:min-h-[320px] lg:min-h-[400px] bg-void overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-16 transition-colors duration-700 hover:bg-[#0c0c0c]"
            >
              {/* Massive Background Numeral */}
              <div className="absolute -top-10 -right-10 font-display text-[10rem] sm:text-[15rem] md:text-[20rem] leading-none text-cream/[0.02] group-hover:text-rust/[0.05] transition-colors duration-1000 pointer-events-none select-none">
                0{idx + 1}
              </div>

              {/* Top Accent */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-8 bg-rust group-hover:h-12 transition-all duration-700"></div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-cream/40 group-hover:text-rust transition-colors">Official Partner</span>
                    <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-cream/20 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Secure Link
                    </span>
                  </div>
                </div>
                <div className="p-4 border border-cream/10 rounded-full group-hover:border-rust/50 group-hover:bg-rust group-hover:text-void transition-all duration-500">
                   <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              
              {/* Main Content */}
              <div className="relative z-10 mt-auto">
                <div className="mb-4 overflow-hidden">
                   <motion.span 
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    className="block font-sans text-xs uppercase tracking-[0.5em] text-rust"
                   >
                     Available Now
                   </motion.span>
                </div>
                <h3 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-cream group-hover:translate-x-4 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                  {link.name}
                </h3>
                
                {/* Expandable Footer on Hover */}
                <div className="mt-8 flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  <div className="flex items-center gap-2">
                    <Globe className="w-3 h-3 text-rust" />
                    <span className="font-sans text-[10px] uppercase tracking-widest text-cream/40">External Portal</span>
                  </div>
                  <div className="h-px flex-grow bg-cream/10"></div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-rust animate-pulse">Connect</span>
                </div>
              </div>

              {/* Shimmer/Scanline effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-rust/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-[1px] bg-rust/20 -translate-y-full group-hover:animate-[scan_3s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100"></div>
            </a>
          ))}
        </div>

        {/* Rest of the page preserved exactly as is */}
        <div className="bg-void border border-cream/10 p-6 sm:p-12 lg:p-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rust/5 rounded-full blur-[120px] pointer-events-none"></div>
           
           <h2 className="font-display text-3xl sm:text-4xl mb-8 sm:mb-12 relative z-10">Privileges & Offers</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 relative z-10">
             {OFFERS.map((offer, idx) => (
               <div key={idx} className="group hover:bg-cream/5 p-4 sm:p-6 -ml-4 sm:-ml-6 rounded-lg transition-colors duration-300">
                 <div className="flex items-baseline gap-4 mb-4 border-b border-cream/10 pb-4">
                    <span className="font-sans text-xs text-rust font-bold">0{idx+1}</span>
                    <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-cream">{offer.title}</h4>
                 </div>
                 <p className="font-display text-lg sm:text-xl mb-3 text-cream/90">{offer.details}</p>
                 <p className="font-sans text-xs text-cream/40 group-hover:text-cream/60 transition-colors">{offer.conditions}</p>
               </div>
             ))}
           </div>
        </div>

      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
      `}</style>
    </motion.div>
  );
};

export default OrderOnline;