import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ChevronDown, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO, REVIEWS, OFFERS } from '../constants';

const SmokeEffect = React.lazy(() => import('../components/SmokeEffect'));

const Home: React.FC = () => {
  const [isSizzlerHovered, setIsSizzlerHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      
      {/* 1. Hero: Ultra Luxury & Atmosphere */}
      <section className="relative min-h-screen w-full px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center pt-24 lg:pt-0 overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 bg-void">
          <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-rust/5 blur-[150px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-cream/5 blur-[150px]"></div>
          
          {/* Subtle Grain */}
          <div className="absolute inset-0 opacity-[0.07] bg-noise"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full">
          
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 relative z-20 pt-4 lg:pt-0">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="flex items-center gap-4 mb-6 lg:mb-8"
             >
               <div className="h-[1px] w-8 lg:w-12 bg-rust"></div>
               <span className="font-sans text-[10px] lg:text-xs text-rust uppercase tracking-[0.3em] font-medium">Fine Dining Reimagined</span>
             </motion.div>

             <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
                className="font-display text-4xl sm:text-5xl md:text-8xl lg:text-9xl leading-[0.9] text-cream mb-6 lg:mb-8"
             >
               Taste The <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream via-cream to-cream/50 italic pr-4">Sublime</span>
             </motion.h1>

             <motion.p 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
                className="font-sans text-cream/70 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mb-8 lg:mb-12 border-l border-white/10 pl-4 sm:pl-6"
             >
               Experience the alchemy of flavors at the apex of the city. A sanctuary where North Indian heritage meets Pan-Asian innovation.
             </motion.p>

             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6"
             >
                <Link to="/menu" className="interactive group relative overflow-hidden px-5 sm:px-6 lg:px-8 py-3 lg:py-4 bg-rust text-void font-sans text-[10px] lg:text-xs font-bold uppercase tracking-widest transition-all hover:bg-cream hover:text-void flex items-center justify-center w-full sm:w-auto">
                  <span className="relative z-10 flex items-center gap-2">View Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/></span>
               </Link>
                <Link to="/contact" className="interactive group px-5 sm:px-6 lg:px-8 py-3 lg:py-4 border border-cream/20 text-cream font-sans text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:border-rust hover:text-rust transition-colors flex items-center justify-center w-full sm:w-auto">
                  Book A Table
                </Link>
             </motion.div>
          </div>

          {/* Right Visual: Levitation & Smoke */}
          <div className="lg:col-span-6 relative h-[35vh] sm:h-[40vh] lg:h-[80vh] flex items-center justify-center order-2">
            
            {/* Spinning Circle Back */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[600px] md:h-[600px] border border-cream/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
               <div className="absolute w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] md:w-[450px] md:h-[450px] border border-dashed border-rust/20 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
            </div>

            {/* The Dish Image */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="relative z-10 w-[85%] lg:w-[95%] max-w-[600px] cursor-pointer"
               onMouseEnter={() => setIsSizzlerHovered(true)}
               onMouseLeave={() => setIsSizzlerHovered(false)}
            >
              {/* Three.js Smoke Effect - Lazy Loaded */}
              <React.Suspense fallback={null}>
                <SmokeEffect isHovered={isSizzlerHovered} />
              </React.Suspense>

              {/* Main Dish */}
              <img 
                src="/images/sizzler.png" 
                alt="Sizzler" 
                className="relative z-10 w-full object-contain transition-all duration-1000 ease-out"
                style={{ 
                  transform: isSizzlerHovered ? 'scale(1.04)' : 'scale(1)',
                  filter: 'brightness(0.85) contrast(1.1) saturate(1.1) drop-shadow(0 25px 60px rgba(0,0,0,0.7)) drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
                }}
              />
              
              {/* Floating Label */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute -bottom-4 lg:-bottom-8 -right-4 lg:-right-8 bg-void/80 backdrop-blur-md border border-cream/10 p-3 lg:p-4 max-w-[120px] lg:max-w-[150px] z-30"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-3 h-3 text-rust fill-rust" />
                  <span className="font-sans text-[8px] lg:text-[10px] uppercase tracking-widest text-cream">Chef's Special</span>
                </div>
                <p className="font-display text-base lg:text-lg leading-tight text-cream">Sizzler</p>
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-20"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-cream/40">Scroll</span>
          <ChevronDown className="w-4 h-4 text-rust animate-bounce" />
        </motion.div>
      </section>

      {/* 2. Marquee */}
      <div className="py-6 border-y border-cream/5 bg-void overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll-text">
          {[...OFFERS, ...OFFERS, ...OFFERS].map((offer, i) => (
            <div key={i} className="flex items-center mx-12">
              <UtensilsCrossed className="w-6 h-6 text-rust mr-6 opacity-60" />
              <span className="font-display text-2xl uppercase text-cream/80 tracking-widest">
                {offer.title} <span className="font-sans text-xs text-rust align-top ml-2">{offer.details}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. The Concept: Editorial Layout */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <span className="font-sans text-xs text-rust uppercase tracking-[0.3em] block mb-6">01 — The Concept</span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-7xl mb-8 leading-tight">
              Elevated <br/><span className="italic text-cream/50">Perspective</span>
            </h2>
            <p className="font-sans text-cream/60 leading-relaxed mb-12 max-w-sm">
              Perched on the 6th floor, we offer a sanctuary above the city noise. The signature glass dome creates a year-round luxury experience.
            </p>
            <Link to="/about" className="interactive inline-flex items-center gap-4 text-rust hover:text-cream transition-colors font-sans text-xs uppercase tracking-widest">
              Read Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-8 mt-20">
               <div className="interactive group relative overflow-hidden rounded-t-[10rem]">
                 <img src="https://images.pexels.com/photos/33982288/pexels-photo-33982288.jpeg" className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-void to-transparent">
                   <h3 className="font-display text-2xl">The Dome</h3>
                 </div>
               </div>
               <div className="p-8 border border-cream/10 bg-cream/5 backdrop-blur-sm">
                  <h3 className="font-display text-3xl mb-4">Atmosphere</h3>
                  <p className="font-sans text-sm text-cream/60">Open-air ambiance meeting panoramic city views, creating the perfect setting for memorable evenings.</p>
               </div>
             </div>
             
             <div className="space-y-8">
               <div className="p-8 border border-cream/10 bg-rust/10 backdrop-blur-sm">
                  <h3 className="font-display text-3xl mb-4 text-rust">Cuisine</h3>
                  <p className="font-sans text-sm text-cream/60">North Indian, Chinese, and Pan-Asian delicacies prepared with authentic techniques and modern presentation.</p>
               </div>
               <div className="interactive group relative overflow-hidden rounded-b-[10rem]">
                 <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070" className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-void to-transparent">
                   <h3 className="font-display text-2xl">The Deck</h3>
                 </div>
               </div>
             </div>
          </div>

        </div>
      </section>

      {/* 4. Menu Preview: Large Typography */}
      <section className="py-16 sm:py-24 md:py-32 bg-cream text-void px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-rust/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-[1920px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-void/10 pb-8">
             <div>
               <span className="font-sans text-xs text-rust uppercase tracking-[0.3em] block mb-4">Selections</span>
               <h2 className="font-display text-4xl sm:text-6xl md:text-9xl text-void">Selected <br/> Plates</h2>
             </div>
             <Link to="/menu" className="interactive hidden md:block px-8 py-3 border border-void text-void hover:bg-void hover:text-cream transition-colors font-sans text-xs uppercase tracking-widest">
               Full Menu
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Paneer Tikka", price: "410", desc: "Marinated cottage cheese grilled in tandoor." },
              { name: "Sushi Platter", price: "450", desc: "Fresh vegetarian sushi assortment." },
              { name: "Sizzling Brownie", price: "289", desc: "Hot walnut brownie with vanilla ice cream." }
            ].map((item, idx) => (
              <div key={idx} className="interactive group border-t border-void/20 pt-8 hover:border-void transition-colors duration-500">
                 <span className="font-sans text-xs text-rust uppercase tracking-widest mb-4 block">0{idx+1}</span>
                 <h3 className="font-display text-4xl mb-4 group-hover:translate-x-2 transition-transform duration-300">{item.name}</h3>
                 <p className="font-sans text-void/60 mb-6 max-w-xs">{item.desc}</p>
                 <span className="font-sans font-medium text-lg">₹{item.price}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 md:hidden">
            <Link to="/menu" className="block w-full py-4 text-center border border-void font-sans text-xs uppercase tracking-widest">View All</Link>
          </div>
        </div>
      </section>

      {/* 5. Reviews: Prominent Single Review */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 flex flex-col items-center text-center bg-void relative border-t border-cream/5">
         <div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
         <div className="w-16 h-1 bg-rust mb-12"></div>
         
         <span className="font-sans text-xs text-rust uppercase tracking-[0.3em] mb-8 block">Guest Impressions</span>

         <blockquote className="font-display text-xl sm:text-3xl md:text-5xl max-w-4xl leading-snug mb-12 text-cream">
           "{REVIEWS[0].text}"
         </blockquote>
         
         <div className="flex flex-col items-center gap-2 mb-12">
           <cite className="font-sans text-sm font-medium not-italic tracking-widest uppercase text-rust">{REVIEWS[0].name}</cite>
           <div className="flex gap-1">
             {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-cream fill-cream" />
             ))}
           </div>
         </div>

         <Link to="/reviews" className="interactive px-8 py-3 border border-cream/20 hover:border-rust text-cream font-sans text-xs uppercase tracking-widest hover:text-rust transition-all duration-300">
            Read More Reviews
         </Link>
      </section>

      {/* 6. Contact Preview Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-cream/5 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-rust/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="lg:pl-24">
                <span className="font-sans text-xs text-rust uppercase tracking-[0.3em] mb-6 block">Plan Your Visit</span>
                <h2 className="font-display text-3xl sm:text-5xl md:text-7xl mb-8">Reserve <br/> Your Spot</h2>
                <p className="font-sans text-cream/60 leading-relaxed mb-10 max-w-md">
                   Whether for a romantic evening under the dome or a lively family gathering on the deck, we ensure every moment is memorable.
                </p>
                <Link to="/contact" className="interactive inline-flex items-center gap-4 px-8 py-4 bg-rust text-void font-sans text-xs font-bold uppercase tracking-widest hover:bg-cream transition-colors duration-300">
                    Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:gap-8 border-l border-cream/10 pl-4 sm:pl-8 md:pl-16">
                <div>
                    <h3 className="font-display text-2xl mb-2">Location</h3>
                    <p className="font-sans text-cream/60 text-sm leading-relaxed max-w-xs">
                        {RESTAURANT_INFO.address}
                    </p>
                </div>
                <div>
                    <h3 className="font-display text-2xl mb-2">Inquiries</h3>
                    <div className="flex flex-col gap-1">
                        {RESTAURANT_INFO.phone.map((ph, i) => (
                            <a key={i} href={`tel:${ph}`} className="interactive font-sans text-cream/60 text-sm hover:text-rust transition-colors">{ph}</a>
                        ))}
                    </div>
                </div>
                <div>
                     <h3 className="font-display text-2xl mb-2">Hours</h3>
                     <p className="font-sans text-cream/60 text-sm">{RESTAURANT_INFO.hours}</p>
                </div>
            </div>
        </div>
      </section>

      {/* 7. Final Respectful Invitation */}
      <section className="py-24 bg-void border-t border-cream/5 flex justify-center items-center">
        <div className="text-center px-6">
          <p className="font-display text-2xl md:text-4xl text-cream/60 italic">
            "We await the pleasure of your company."
          </p>
          <div className="mt-8 flex justify-center">
             <div className="h-px w-24 bg-gradient-to-r from-transparent via-rust to-transparent"></div>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Home;