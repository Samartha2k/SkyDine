import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU } from '../constants';
import { Search } from 'lucide-react';

const Menu: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(MENU[0].title);
  
  // Create refs for each section to handle scrolling
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Filter logic: Filter items within categories, then remove empty categories
  const filteredMenu = MENU.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  // Scroll Spy Logic to update active category
  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      let minDistance = Infinity;
      const offset = 200; // Look ahead distance

      // Determine which section is currently active
      filteredMenu.forEach((category) => {
        const ref = sectionRefs.current[category.title];
        if (ref) {
          const rect = ref.getBoundingClientRect();
          // Calculate distance from the top, treating near 0 or slightly negative as active
          const distance = Math.abs(rect.top - offset);
          if (distance < minDistance) {
            minDistance = distance;
            current = category.title;
          }
        }
      });

      if (current && current !== activeCategory) {
        setActiveCategory(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredMenu, activeCategory]);

  const scrollToCategory = (title: string) => {
    setActiveCategory(title);
    const element = sectionRefs.current[title];
    if (element) {
      const offset = 100; // Navbar height + padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen px-6 pt-32 pb-20"
    >
      <div className="max-w-[1920px] mx-auto">
        
        <header className="text-center mb-16">
          <span className="font-sans text-xs text-rust uppercase tracking-[0.4em] mb-6 block">The Index</span>
          <h1 className="font-display text-7xl md:text-9xl text-cream mb-8">Culinary</h1>
          <p className="font-sans text-cream/60 max-w-md mx-auto mb-12">
            A curation of global flavors, bringing together the best of North Indian, Asian, and Continental traditions.
          </p>
          
           {/* Search Bar - Centered */}
            <div className="max-w-md mx-auto relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-cream/30 group-focus-within:text-rust transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 bg-transparent border-b border-cream/20 text-cream placeholder-cream/30 focus:outline-none focus:border-rust transition-all font-sans tracking-wide"
                placeholder="Search for dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Desktop Left Sidebar Navigation */}
          {filteredMenu.length > 0 && (
             <aside className="hidden lg:flex w-[25%] flex-col justify-center h-screen sticky top-0 pb-20">
               <div className="space-y-6 border-l border-cream/5 pl-8 relative">
                 {/* Moving Indicator */}
                 {filteredMenu.map((category) => (
                    <button 
                      key={category.title}
                      onClick={() => scrollToCategory(category.title)}
                      className={`block text-left font-display text-2xl transition-all duration-300 w-full hover:translate-x-2 ${activeCategory === category.title ? 'text-rust scale-105' : 'text-cream/30 hover:text-cream'}`}
                    >
                      {category.title}
                    </button>
                 ))}
               </div>
             </aside>
          )}

          {/* Main Menu Content */}
          <div className="w-full lg:w-[75%] space-y-24 lg:space-y-32 lg:pt-12">
            {filteredMenu.length > 0 ? (
              filteredMenu.map((category, idx) => (
                <motion.section 
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  ref={el => sectionRefs.current[category.title] = el}
                  id={category.title}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-8 mb-12">
                     <h2 className="font-display text-4xl md:text-5xl text-cream shrink-0">{category.title}</h2>
                     <div className="h-[1px] bg-cream/10 w-full"></div>
                     <span className="font-sans text-xs text-rust font-bold">0{idx + 1}</span>
                  </div>

                  <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                    <AnimatePresence mode="popLayout">
                      {category.items.map((item) => (
                        <motion.div 
                          layout
                          key={item.name} 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          className="group interactive"
                        >
                          <div className="flex justify-between items-baseline border-b border-cream/5 pb-2 mb-2 group-hover:border-rust/50 transition-colors">
                            <h3 className="font-display text-xl text-cream group-hover:text-rust transition-colors">{item.name}</h3>
                            <span className="font-sans text-sm text-cream/60">{item.price}</span>
                          </div>
                          <p className="font-sans text-sm text-cream/40 leading-relaxed group-hover:text-cream/60 transition-colors">
                            {item.description}
                          </p>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </motion.section>
              ))
            ) : (
              <div className="text-center py-20">
                <p className="font-display text-2xl text-cream/40">No dishes found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-32 text-center py-12 border-t border-cream/10">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-cream/30">
            Government taxes applicable. We levy a 5% service charge. Please inform your server of any allergies.
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default Menu;