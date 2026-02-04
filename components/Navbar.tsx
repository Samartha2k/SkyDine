import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, ArrowRight, Copy, Check, Instagram, Facebook, Globe } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: 'Home', path: '/', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070' },
    { name: 'Menu', path: '/menu', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070' },
    { name: 'About', path: '/about', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974' },
    { name: 'Gallery', path: '/gallery', img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070' },
    { name: 'Reviews', path: '/reviews', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070' },
    { name: 'Contact', path: '/contact', img: 'https://images.unsplash.com/photo-1424847651672-bf202175b63a?q=80&w=2070' },
    { name: 'Order', path: '/order-online', img: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2066' },
  ];

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
    setHoveredLink(null);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (RESTAURANT_INFO.phone && RESTAURANT_INFO.phone.length > 0) {
        navigator.clipboard.writeText(RESTAURANT_INFO.phone[0]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
  };

  const defaultImage = 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070';
  const currentImage = hoveredLink 
    ? links.find(l => l.name === hoveredLink)?.img 
    : defaultImage;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-cream">
        
        {/* Logo */}
        <Link to="/" className="interactive relative z-50 group">
          <div className="flex flex-col">
            <span className="font-display font-bold text-3xl tracking-widest group-hover:text-rust transition-colors duration-500">
              SKY DINE
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-60">Est. 2024</span>
          </div>
        </Link>

        <div className="flex items-center gap-8">
           <Link to="/order-online" className="interactive hidden md:flex items-center gap-2 font-sans text-xs uppercase tracking-widest hover:text-rust transition-colors border border-cream/20 px-6 py-3 rounded-full hover:bg-cream hover:text-void hover:border-cream">
             <span>Order Online</span>
           </Link>
           
           <button 
            onClick={() => setIsOpen(true)} 
            className="interactive flex items-center gap-4 group"
          >
            <span className="hidden md:block font-sans text-xs uppercase tracking-[0.2em] group-hover:text-rust transition-colors">Menu</span>
            <div className="w-12 h-12 bg-cream/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-rust group-hover:text-void transition-all duration-300 border border-cream/20">
              <MenuIcon className="w-5 h-5" />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] flex flex-col md:flex-row h-[100dvh]"
          >
            {/* Left Panel: Navigation with deep stained gradient */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-between p-6 md:p-12 relative z-20 overflow-y-auto overflow-x-hidden custom-scrollbar bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#000000]">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
              
              <div className="flex justify-between items-center flex-shrink-0">
                 <span className="font-sans text-[10px] md:text-xs text-rust uppercase tracking-[0.4em]">Navigation</span>
                 <button 
                    onClick={() => setIsOpen(false)}
                    className="interactive p-3 md:p-4 border border-cream/20 rounded-full hover:bg-rust hover:border-rust hover:text-void transition-all duration-300 md:hidden"
                  >
                    <X className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
              </div>

              <div className="flex flex-col justify-center gap-2 md:gap-0 lg:gap-1 my-8 md:my-4 flex-grow">
                {links.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.5, ease: "easeOut" }}
                    className="relative group w-fit"
                    onMouseEnter={() => setHoveredLink(link.name)}
                  >
                    <button 
                      onClick={() => handleNavigation(link.path)}
                      className="interactive text-left font-display text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-cream/40 group-hover:text-cream transition-colors duration-500 leading-none md:leading-tight py-1 tracking-tight"
                    >
                      {link.name}
                    </button>
                    <span className="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2 text-rust opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-6 h-6" />
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between md:items-end border-t border-cream/10 pt-6 flex-shrink-0">
                <div className="flex gap-6 text-cream/30 font-sans text-xs uppercase tracking-widest">
                  <a href="#" className="hover:text-rust transition-colors flex items-center gap-2 group">
                    <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform"/> <span className="hidden lg:inline">Instagram</span>
                  </a>
                  <a href="#" className="hover:text-rust transition-colors flex items-center gap-2 group">
                    <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform"/> <span className="hidden lg:inline">Facebook</span>
                  </a>
                  <a href="#" className="hover:text-rust transition-colors flex items-center gap-2 group">
                    <Globe className="w-4 h-4 group-hover:scale-110 transition-transform"/> <span className="hidden lg:inline">Web</span>
                  </a>
                </div>

                <button 
                  onClick={handleCopyPhone}
                  className="interactive group flex items-center gap-3 text-cream/50 hover:text-rust transition-colors"
                >
                  <div className="flex flex-col items-start text-left">
                     <span className="font-sans text-[10px] uppercase tracking-widest opacity-60">Reservations</span>
                     <span className="font-display text-xl md:text-2xl">{RESTAURANT_INFO.phone[0]}</span>
                  </div>
                  <div className="p-2 border border-cream/10 rounded-full group-hover:border-rust transition-colors">
                     {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </div>
                </button>
              </div>
            </div>

            {/* Right Panel: Visual with Cross-Fade */}
            <div className="hidden md:block w-1/2 h-full relative overflow-hidden bg-charcoal">
               <button 
                  onClick={() => setIsOpen(false)}
                  className="interactive absolute top-8 right-8 z-30 p-4 border border-cream/20 rounded-full bg-void/20 backdrop-blur-md text-cream hover:bg-cream hover:text-void transition-all duration-300"
                >
                  <X className="w-6 h-6" />
               </button>

               {/* Synchronized Cross-fade for more luxury feel */}
               <AnimatePresence initial={false}>
                 <motion.div 
                   key={currentImage}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.8, ease: "easeInOut" }}
                   className="absolute inset-0"
                 >
                   <div className="absolute inset-0 bg-void/40 z-10"></div>
                   <motion.img 
                     src={currentImage} 
                     alt="Menu Preview" 
                     className="w-full h-full object-cover grayscale-[15%] brightness-75"
                     initial={{ scale: 1.1 }}
                     animate={{ scale: 1 }}
                     transition={{ duration: 1.2, ease: "easeOut" }}
                   />
                 </motion.div>
               </AnimatePresence>
               
               <div className="absolute bottom-12 right-12 z-20 text-right">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={hoveredLink}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="font-display text-4xl text-cream mb-2 uppercase tracking-tight">
                        {hoveredLink || "Sky Dine"}
                      </p>
                      <p className="font-sans text-xs text-rust uppercase tracking-[0.4em]">
                        {hoveredLink ? "Explore Concept" : "Vadodara"}
                      </p>
                    </motion.div>
                  </AnimatePresence>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;