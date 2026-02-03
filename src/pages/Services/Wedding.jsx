import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Camera, Image as ImageIcon, Send, Heart, Sparkles, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceDetailTemplate = ({ title, category, description, image, id }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  return (
    <div className="bg-[#050505] text-white selection:bg-orange-500/30 overflow-hidden font-sans">
      
      {/* NAVIGATION BACK BUTTON */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed top-8 left-6 md:left-12 z-50"
      >
      
      </motion.div>

      {/* HERO SECTION - Optimized Height */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover grayscale-[0.2] object-center"
          />
          {/* Enhanced Gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050505]" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-16 lg:p-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <span className="text-orange-500 font-mono text-xs md:text-sm tracking-[0.6em] mb-4 block uppercase">
                {category}
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif italic tracking-tighter leading-none mb-8">
                {title}
              </h1>
            </motion.div>
        </div>
      </section>

      {/* CONTENT BLOCK */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="px-6 md:px-16 lg:px-24 py-24 border-b border-white/5"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <motion.div variants={fadeInUp} className="lg:col-span-7">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-8 font-bold">Our Philosophy</h2>
            <p className="text-2xl md:text-4xl text-white/90 font-light leading-relaxed mb-12 italic font-serif">
              "{description}"
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                <div className="space-y-4">
                  <div className="text-orange-500"><Sparkles size={20} /></div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-white">Natural Moments</h4>
                  <p className="text-white/40 text-sm leading-relaxed">No stiff poses. We capture the real laughter, the quiet tears, and the genuine joy as it happens.</p>
                </div>
                <div className="space-y-4">
                  <div className="text-orange-500"><Camera size={20} /></div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-white">True Colors</h4>
                  <p className="text-white/40 text-sm leading-relaxed">Beautiful, clean editing that feels like a classic film—designed to look stunning today and 50 years from now.</p>
                </div>
            </div>
          </motion.div>

          {/* Side Info Box */}
          <motion.div 
            variants={fadeInUp}
            className="lg:col-span-5"
          >
            <div className="bg-white/[0.03] p-10 border border-white/10 rounded-sm backdrop-blur-3xl lg:sticky lg:top-32">
              <h3 className="text-xl font-serif italic mb-8">What to Expect</h3>
              <ul className="space-y-6 mb-10">
                <li className="flex justify-between items-center text-[11px] uppercase tracking-widest border-b border-white/5 pb-4">
                  <span className="text-white/30">Delivery</span>
                  <span>1 - 2 Weeks</span>
                </li>
                <li className="flex justify-between items-center text-[11px] uppercase tracking-widest border-b border-white/5 pb-4">
                  <span className="text-white/30">Gallery</span>
                  <span>Online & Print Ready</span>
                </li>
                <li className="flex justify-between items-center text-[11px] uppercase tracking-widest border-b border-white/5 pb-4">
                  <span className="text-white/30">Travel</span>
                  <span>Available Sri Lanka</span>
                </li>
              </ul>
              <button className="group w-full py-5 bg-white text-black hover:bg-orange-500 hover:text-white transition-all duration-500 uppercase text-[10px] tracking-[0.4em] font-black flex items-center justify-center gap-4">
                Check Availability <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* CREATIVE MASONRY GRID */}
      <section className="py-24 px-4 md:px-12">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={image} 
                className="w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 cursor-pointer object-cover max-h-[600px]" 
                alt="Wedding Moment" 
              />
            </motion.div>
            
            <div className="aspect-[3/4] bg-orange-500/5 border border-orange-500/10 flex flex-col items-center justify-center p-12 text-center space-y-6">
                <Heart className="text-orange-500/40" size={32} />
                <p className="font-serif italic text-3xl text-white/80 leading-tight">Capturing the stories you'll tell forever.</p>
                <div className="w-12 h-px bg-orange-500/50" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069" 
                className="w-full rounded-sm brightness-75 hover:brightness-100 transition-all duration-1000 cursor-pointer object-cover max-h-[600px]" 
                alt="Wedding Vibe" 
              />
            </motion.div>
          </div>
      </section>
    </div>
  );
};

// Main Export Component
export default function Wedding() {
  return (
    <ServiceDetailTemplate 
      id="01"
      title="Weddings"
      category="The Wedding Experience"
      image="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070"
      description="Your wedding is more than just an event; it's the start of your history. We focus on the small, beautiful details and the big, emotional moments so you can relive your day exactly as it felt."
    />
  );
}