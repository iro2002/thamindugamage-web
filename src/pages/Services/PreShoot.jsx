import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Camera, Send, Sparkles, Heart, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceDetailTemplate = ({ title, category, description, image, id, galleryImage }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="bg-[#050505] text-white selection:bg-orange-500/30 overflow-x-hidden font-sans">
      
      {/* NAVIGATION - BACK BUTTON ADDED */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed top-6 left-6 md:top-8 md:left-12 z-50"
      >
    
      </motion.div>

      {/* HERO SECTION - FIXED HEIGHT SCALE */}
      <section className="relative h-[75vh] md:h-[85vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={image} 
            alt={title} 
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
                {category}
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-serif italic tracking-tighter leading-[0.9] mb-6">
                {title}
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
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-6 md:mb-8 font-bold">The Vision</h2>
            <p className="text-xl md:text-3xl lg:text-4xl text-white/90 font-light leading-relaxed mb-10 italic font-serif">
              "{description}"
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 pt-10 border-t border-white/5">
                <div className="space-y-3">
                  <div className="text-orange-500"><Sparkles size={20} /></div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-white">Unique Themes</h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    We help you choose the perfect locations and styles that match your personality and your love story.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-orange-500"><Camera size={20} /></div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-white">Premium Finish</h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Your photos receive professional retouching to ensure every frame looks like it belongs in a magazine.
                  </p>
                </div>
            </div>
          </motion.div>

          {/* BOOKING INFO BOX */}
          <motion.div 
            variants={fadeInUp}
            className="lg:col-span-5"
          >
            <div className="bg-white/[0.03] p-6 md:p-10 border border-white/10 rounded-sm backdrop-blur-3xl lg:sticky lg:top-24">
              <h3 className="text-xl font-serif italic mb-6 md:mb-8">Session Details</h3>
              <ul className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                <li className="flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-widest border-b border-white/5 pb-3">
                  <span className="text-white/30">Duration</span>
                  <span>Full Day Session</span>
                </li>
                <li className="flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-widest border-b border-white/5 pb-3">
                  <span className="text-white/30">Outfits</span>
                  <span>Unlimited Changes</span>
                </li>
                <li className="flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-widest border-b border-white/5 pb-3">
                  <span className="text-white/30">Travel</span>
                  <span>Included</span>
                </li>
              </ul>
              <button className="group w-full py-4 md:py-5 bg-white text-black hover:bg-orange-500 hover:text-white transition-all duration-500 uppercase text-[10px] tracking-[0.3em] font-black flex items-center justify-center gap-4">
                Plan Your Shoot <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* GALLERY GRID - PREVENTS IMAGE OVERFLOW */}
      <section className="py-16 md:py-24 px-4 md:px-12">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src={image} 
                className="w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-700 object-cover max-h-[500px]" 
                alt="Pre-shoot moment" 
              />
            </motion.div>
            
            <div className="aspect-square md:aspect-[3/4] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center p-8 md:p-12 text-center space-y-6">
                <Heart className="text-orange-500/40" size={30} />
                <p className="font-serif italic text-2xl md:text-3xl text-white/80 leading-tight">Your story, beautifully told before the big day.</p>
                <div className="w-10 h-px bg-orange-500/50" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img 
                src={galleryImage} 
                className="w-full rounded-sm brightness-75 hover:brightness-100 transition-all duration-700 object-cover max-h-[600px]" 
                alt="Concept photography" 
              />
            </motion.div>
          </div>
      </section>
    </div>
  );
};

export default function PreShoot() {
  return (
    <ServiceDetailTemplate 
      id="02"
      title="Pre Shoot"
      category="Creative Concept"
      image="https://stanburyphotography.co.uk/wp-content/uploads/2015/02/9aef2-peckforton-castle-cheshire-wedding-photographer-stanbury-photography2b009.jpg"
      galleryImage="https://onehorizonproductions.com/wp-content/uploads/2021/10/Pre-wedding-photoshoot-by-one-horizon-productions-26-1024x683.jpg"
      description="Let’s create something artistic and unique. We combine fashion-style photography with your personal story to create beautiful images before your wedding day."
    />
  );
}