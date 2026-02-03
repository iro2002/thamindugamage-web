import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, Heart, ImageIcon, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function BabyShoot() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroImage = "https://www.momnewsdaily.com/app/uploads/2023/10/manishq1_5_Month_Baby_Girl_Photoshoot_Ideas_At_Home_Baby_baller_96c2bf33-a37e-47af-adf6-ae938d249274.jpg";

  return (
    <div className="bg-[#050505] text-white selection:bg-orange-500/30 overflow-x-hidden font-sans">
      
      {/* NAVIGATION - Minimalist Back Button */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed top-6 left-6 md:top-8 md:left-12 z-50"
      >
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase font-bold bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-full hover:bg-orange-500 transition-all duration-500"
        >
          <ArrowLeft size={16} />
          <span className="hidden md:block">Back</span>
        </button>
      </motion.div>

      {/* HERO SECTION - Reduced Height (75vh mobile / 85vh desktop) */}
      <section className="relative h-[75vh] md:h-[85vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={heroImage} 
            alt="Newborn Photography" 
            className="w-full h-full object-cover grayscale-[0.2] object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#050505]" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-16 lg:p-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-orange-500 font-mono text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.6em] mb-2 md:mb-4 block uppercase">
              Newborn Collection
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-serif italic tracking-tighter leading-[0.9] mb-6">
              Baby Shoot
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-16 lg:px-24 py-16 md:py-24 border-b border-white/5"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <motion.div variants={fadeInUp} className="lg:col-span-7">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-6 md:mb-8 font-bold">The Approach</h2>
            <p className="text-xl md:text-3xl lg:text-4xl text-white/90 font-light leading-relaxed mb-10 italic font-serif">
              "Gentle, organic portraiture for your newest addition. We focus on the soft, fleeting moments of early life with a patient and calm approach."
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 pt-10 border-t border-white/5">
                <div className="space-y-3">
                  <div className="text-orange-500"><Heart size={20} /></div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-white">Natural Comfort</h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    A safe, warm, and quiet environment tailored to your baby’s needs. We move at their pace.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-orange-500"><ImageIcon size={20} /></div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-white">Fine Art Edits</h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Soft, timeless processing designed to highlight delicate skin and those tiny, precious details.
                  </p>
                </div>
            </div>
          </motion.div>

          {/* SIDE INFO BOX */}
          <motion.div 
            variants={fadeInUp}
            className="lg:col-span-5"
          >
            <div className="bg-white/[0.03] p-6 md:p-10 border border-white/10 rounded-sm backdrop-blur-3xl lg:sticky lg:top-24">
              <h3 className="text-xl font-serif italic mb-6 md:mb-8 text-center lg:text-left">Session Details</h3>
              <ul className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                <li className="flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-widest border-b border-white/5 pb-3">
                  <span className="text-white/30">Duration</span>
                  <span>2-4 Hour Session</span>
                </li>
                <li className="flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-widest border-b border-white/5 pb-3">
                  <span className="text-white/30">Best Age</span>
                  <span>5-14 Days Old</span>
                </li>
                <li className="flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-widest border-b border-white/5 pb-3">
                  <span className="text-white/30">Setting</span>
                  <span>Studio or Home</span>
                </li>
              </ul>
              <button className="group w-full py-4 md:py-5 bg-white text-black hover:bg-orange-500 hover:text-white transition-all duration-500 uppercase text-[10px] tracking-[0.3em] font-black flex items-center justify-center gap-4">
                Book Session <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* GALLERY GRID - Image sizes reduced and capped */}
      <section className="py-16 md:py-24 px-4 md:px-12">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src={heroImage} 
                className="w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-700 object-cover max-h-[500px]" 
                alt="Baby Detail" 
              />
            </motion.div>
            
            <div className="aspect-square md:aspect-[3/4] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center p-8 md:p-12 text-center space-y-6">
                <div className="w-10 h-px bg-orange-500/50" />
                <p className="font-serif italic text-2xl md:text-3xl text-white/80 leading-tight">Preserving the magic of new beginnings.</p>
                <div className="w-10 h-px bg-orange-500/50" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1555252333-978fead023f4?q=80&w=2070" 
                className="w-full rounded-sm brightness-75 hover:brightness-100 transition-all duration-700 object-cover max-h-[600px]" 
                alt="Newborn Portrait" 
              />
            </motion.div>
          </div>
      </section>
    </div>
  );
}