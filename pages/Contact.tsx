import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RESTAURANT_INFO, SOCIAL_LINKS } from '../constants';
import { Phone, MessageCircle, ArrowRight, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Please fill in your Name and Message.');
      return;
    }

    const text = `*New Inquiry via Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleDirectCall = () => {
    window.open(`tel:${RESTAURANT_INFO.phone[0]}`, '_self');
  };

  const handleDirections = () => {
    const destination = encodeURIComponent(RESTAURANT_INFO.name + " " + RESTAURANT_INFO.address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, '_blank');
  };

  const partnerLinks = SOCIAL_LINKS.filter(link => 
    link.name === 'Justdial' || link.name === 'EazyDiner'
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-12 bg-void relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070" 
          className="w-full h-full object-cover opacity-20"
          alt="Restaurant Ambience" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/90 to-void/60"></div>
        <div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
      </div>

      <div className="max-w-[1920px] mx-auto px-6 lg:px-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Information & Actions */}
        <div className="flex flex-col py-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-xs text-rust uppercase tracking-[0.4em] mb-6 block">Concierge</span>
            <h1 className="font-display text-6xl md:text-8xl mb-8 text-cream">Get In <br/> <span className="italic text-cream/50">Touch</span></h1>
            
            <p className="font-sans text-lg text-cream/70 leading-relaxed max-w-lg mb-12 border-l border-rust pl-6">
              For reservations, private dining inquiries, or to simply say hello, our team is at your disposal.
            </p>

            {/* Detailed Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
               <div>
                  <h4 className="font-sans text-xs text-rust uppercase tracking-widest mb-4">Address</h4>
                  <p className="font-sans text-cream/80 leading-relaxed text-sm">
                    {RESTAURANT_INFO.address}
                  </p>
               </div>
               <div>
                  <h4 className="font-sans text-xs text-rust uppercase tracking-widest mb-4">Timings</h4>
                  <p className="font-sans text-cream/80 leading-relaxed text-sm">
                    {RESTAURANT_INFO.hours}
                  </p>
               </div>
               <div className="md:col-span-2">
                  <h4 className="font-sans text-xs text-rust uppercase tracking-widest mb-4">Phone</h4>
                  <div className="flex flex-wrap gap-6">
                    {RESTAURANT_INFO.phone.map((ph, idx) => (
                      <a key={idx} href={`tel:${ph}`} className="interactive font-display text-xl text-cream hover:text-rust transition-colors">
                        {ph}
                      </a>
                    ))}
                  </div>
               </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-xl">
              <button onClick={handleDirectCall} className="interactive group flex items-center justify-between p-6 border border-cream/10 bg-cream/5 hover:bg-rust hover:border-rust transition-all duration-500">
                <div className="flex flex-col items-start">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-cream/60 group-hover:text-void/60 mb-2">Voice</span>
                  <span className="font-display text-xl text-cream group-hover:text-void">Call Now</span>
                </div>
                <Phone className="w-5 h-5 text-rust group-hover:text-void" />
              </button>

              <button onClick={() => window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`, '_blank')} className="interactive group flex items-center justify-between p-6 border border-cream/10 bg-cream/5 hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-500">
                <div className="flex flex-col items-start">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-cream/60 group-hover:text-void/60 mb-2">Chat</span>
                  <span className="font-display text-xl text-cream group-hover:text-void">WhatsApp</span>
                </div>
                <MessageCircle className="w-5 h-5 text-rust group-hover:text-void" />
              </button>

              <button onClick={handleDirections} className="interactive group flex items-center justify-between p-6 border border-cream/10 bg-cream/5 hover:bg-cream hover:border-cream transition-all duration-500 md:col-span-2">
                 <div className="flex flex-col items-start">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-cream/60 group-hover:text-void/60 mb-2">Location</span>
                  <span className="font-display text-xl text-cream group-hover:text-void">Get Directions</span>
                </div>
                <Navigation className="w-5 h-5 text-rust group-hover:text-void" />
              </button>
            </div>

            {/* Partner Links */}
            <div className="space-y-6">
               <span className="font-sans text-xs text-cream/30 uppercase tracking-[0.2em] block">Partners</span>
               <div className="flex flex-wrap gap-8">
                 {partnerLinks.map((link, idx) => (
                   <a 
                    key={idx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="interactive flex items-center gap-2 font-display text-xl text-cream hover:text-rust transition-colors border-b border-transparent hover:border-rust pb-1"
                   >
                     {link.name} <ArrowRight className="w-4 h-4 -rotate-45" />
                   </a>
                 ))}
               </div>
            </div>

          </motion.div>
        </div>

        {/* Right Column: Luxury Form & Map */}
        <div className="flex flex-col gap-12 py-12">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full bg-void/40 backdrop-blur-xl border border-cream/10 p-8 md:p-12 relative"
          >
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-rust/50"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-rust/50"></div>

            <h3 className="font-display text-3xl mb-8 text-center">Inquiry</h3>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-8">
              <div className="group relative">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full bg-transparent border-b border-cream/20 py-3 text-cream focus:outline-none focus:border-rust transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-cream/40 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-rust peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs uppercase tracking-widest">
                  Name *
                </label>
              </div>

              <div className="group relative">
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full bg-transparent border-b border-cream/20 py-3 text-cream focus:outline-none focus:border-rust transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-cream/40 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-rust peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs uppercase tracking-widest">
                  Phone
                </label>
              </div>

              <div className="group relative">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full bg-transparent border-b border-cream/20 py-3 text-cream focus:outline-none focus:border-rust transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-cream/40 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-rust peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs uppercase tracking-widest">
                  Email
                </label>
              </div>

              <div className="group relative">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="block w-full bg-transparent border-b border-cream/20 py-3 text-cream focus:outline-none focus:border-rust transition-colors peer resize-none"
                  placeholder=" "
                ></textarea>
                <label className="absolute left-0 top-3 text-cream/40 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-rust peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs uppercase tracking-widest">
                  Message *
                </label>
              </div>

              <button 
                type="submit"
                className="interactive w-full bg-cream text-void font-sans text-xs font-bold uppercase tracking-[0.2em] py-5 hover:bg-rust hover:text-white transition-colors duration-300 mt-8"
              >
                Send Request
              </button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full h-[300px] border border-cream/10 relative group overflow-hidden"
          >
             <div className="absolute inset-0 bg-rust/10 z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
             <iframe 
               src={RESTAURANT_INFO.mapEmbedUrl} 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(85%)' }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="group-hover:filter-none transition-all duration-700"
             ></iframe>
             <div className="absolute bottom-0 left-0 bg-void px-4 py-2 z-20 border-t border-r border-cream/10">
                <span className="font-sans text-[10px] uppercase tracking-widest text-cream">Google Maps</span>
             </div>
          </motion.div>

        </div>

      </div>
    </motion.div>
  );
};

export default Contact;