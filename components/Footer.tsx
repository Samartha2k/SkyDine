import React from 'react';
import { Facebook, Instagram, Twitter, ArrowUpRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RESTAURANT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-charcoal pt-32 pb-12 px-6 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        
        {/* Giant Luxury Text Section */}
        <div className="relative py-12 md:py-24 border-b border-cream/5 mb-24 overflow-hidden flex flex-col items-center justify-center">
            
            {/* Animated Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[radial-gradient(circle,_rgba(140,58,40,0.15)_0%,_transparent_70%)] blur-[100px] pointer-events-none"></div>

            {/* Main Text Container */}
            <div className="relative z-10 w-full text-center">
                
                {/* Top Decorative Line */}
                <div className="flex justify-center items-center gap-6 mb-8 opacity-60">
                    <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-rust"></div>
                    <div className="flex items-center gap-2">
                        <Star className="w-3 h-3 text-rust fill-rust" />
                        <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-cream">The Apex of Taste</span>
                        <Star className="w-3 h-3 text-rust fill-rust" />
                    </div>
                    <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-rust"></div>
                </div>

                {/* The Giant Text with Layering */}
                <div className="relative inline-block group cursor-default">
                    {/* Main Gradient Text */}
                    <h1 className="font-display text-[13vw] leading-[0.8] tracking-tight uppercase text-center relative z-10 transition-transform duration-1000 ease-out group-hover:scale-105">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-cream via-cream/50 to-cream/5">
                            Sky Dine
                        </span>
                    </h1>
                    
                    {/* Stroke Layer for Depth */}
                    <h1 className="absolute top-0 left-0 w-full font-display text-[13vw] leading-[0.8] tracking-tight uppercase text-center pointer-events-none z-0 opacity-30 blur-[1px]" style={{ WebkitTextStroke: '1px #8c3a28', color: 'transparent' }}>
                         Sky Dine
                    </h1>
                    
                    {/* Shadow Layer */}
                    <h1 className="absolute top-4 left-0 w-full font-display text-[13vw] leading-[0.8] tracking-tight uppercase text-center pointer-events-none z-0 text-void opacity-50 blur-sm mix-blend-multiply">
                         Sky Dine
                    </h1>
                </div>

                {/* Bottom Decorative Badge */}
                <div className="mt-12 flex justify-center">
                    <Link to="/contact" className="group relative w-24 h-24 md:w-32 md:h-32 rounded-full border border-cream/10 flex items-center justify-center backdrop-blur-sm hover:border-rust/50 transition-colors duration-500">
                         <div className="absolute inset-0 rounded-full border border-rust/20 border-dashed animate-[spin_10s_linear_infinite] group-hover:border-rust/40"></div>
                         <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-cream/40 group-hover:text-rust group-hover:scale-110 transition-all duration-300" />
                         <span className="absolute -bottom-8 font-sans text-[10px] uppercase tracking-widest text-cream/40 group-hover:text-rust transition-colors">Book Now</span>
                    </Link>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-32 relative z-10">
          <div className="md:col-span-1">
             <span className="font-sans text-xs text-rust uppercase tracking-[0.3em] block mb-8">Location</span>
             <p className="font-sans text-sm text-cream/70 leading-relaxed">
               {RESTAURANT_INFO.address}
             </p>
          </div>

          <div className="md:col-span-1">
             <span className="font-sans text-xs text-rust uppercase tracking-[0.3em] block mb-8">Contact</span>
             <div className="flex flex-col gap-2">
               {RESTAURANT_INFO.phone.map((ph, i) => (
                 <a key={i} href={`tel:${ph}`} className="interactive font-display text-2xl text-cream hover:text-rust transition-colors">{ph}</a>
               ))}
             </div>
          </div>

          <div className="md:col-span-1">
             <span className="font-sans text-xs text-rust uppercase tracking-[0.3em] block mb-8">Hours</span>
             <p className="font-display text-2xl text-cream">
               {RESTAURANT_INFO.hours}
             </p>
          </div>

          <div className="md:col-span-1 flex flex-col justify-between">
             <span className="font-sans text-xs text-rust uppercase tracking-[0.3em] block mb-8">Social</span>
             <div className="flex gap-4">
               {[Instagram, Facebook, Twitter].map((Icon, i) => (
                 <a key={i} href="#" className="interactive w-12 h-12 border border-cream/20 rounded-full flex items-center justify-center hover:bg-cream hover:text-void transition-all duration-300">
                   <Icon className="w-5 h-5" />
                 </a>
               ))}
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-cream/5 pt-8">
          <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-cream/30">
            © {new Date().getFullYear()} Sky Dine. All Rights Reserved.
          </div>
          <div className="flex gap-8 mt-4 md:mt-0">
            {['Privacy', 'Terms', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="interactive font-sans text-[10px] uppercase tracking-[0.2em] text-cream/30 hover:text-cream transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;