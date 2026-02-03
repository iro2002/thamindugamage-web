import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Camera, Send, Sparkles, GraduationCap } from "lucide-react";

const ServiceDetailTemplate = ({ title, category, description, image }) => {
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
      
      {/* HERO SECTION */}
      <section className="relative h-[70vh] md:h-screen w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050505]" />
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
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-serif italic tracking-tighter leading-[0.9] mb-6">
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
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-6 md:mb-8 font-bold">The Milestone</h2>
            <p className="text-xl md:text-3xl lg:text-4xl text-white/90 font-light leading-relaxed mb-10 italic font-serif">
              "{description}"
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 pt-10 border-t border-white/5">
                <div className="space-y-3">
                  <div className="text-orange-500"><GraduationCap size={20} /></div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-white">Classic & Modern</h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    We capture both the traditional graduation look and natural, lifestyle photos that show your personality.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-orange-500"><Camera size={20} /></div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-white">Easy Posing</h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Don't worry about being camera-shy. We guide you every step of the way to make you look confident and proud.
                  </p>
                </div>
            </div>
          </motion.div>

          {/* PACKAGE INFO BOX */}
          <motion.div 
            variants={fadeInUp}
            className="lg:col-span-5"
          >
            <div className="bg-white/[0.03] p-6 md:p-10 border border-white/10 rounded-sm backdrop-blur-3xl lg:sticky lg:top-24">
              <h3 className="text-xl font-serif italic mb-6 md:mb-8">Package Details</h3>
              <ul className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                <li className="flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-widest border-b border-white/5 pb-3">
                  <span className="text-white/30">Time</span>
                  <span>2 Hour Session</span>
                </li>
                <li className="flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-widest border-b border-white/5 pb-3">
                  <span className="text-white/30">Delivery</span>
                  <span>7 Days</span>
                </li>
                <li className="flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-widest border-b border-white/5 pb-3">
                  <span className="text-white/30">Prints</span>
                  <span>High-Res Digital Gallery</span>
                </li>
              </ul>
              <button className="group w-full py-4 md:py-5 bg-white text-black hover:bg-orange-500 hover:text-white transition-all duration-500 uppercase text-[10px] tracking-[0.3em] font-black flex items-center justify-center gap-4">
                Check Availability <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* GALLERY GRID */}
      <section className="py-16 md:py-24 px-4 md:px-12">
          <div className="flex flex-col md:block md:columns-2 lg:columns-3 gap-6 space-y-6">
            <motion.img 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={image} 
              className="w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Graduation portrait" 
            />
            
            <div className="aspect-square md:aspect-[3/4] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center p-8 md:p-12 text-center space-y-6">
                <Sparkles className="text-orange-500/40" size={30} />
                <p className="font-serif italic text-2xl md:text-3xl text-white/80 leading-tight">Celebrating your hard work and bright future.</p>
                <div className="w-10 h-px bg-orange-500/50" />
            </div>

            <motion.img 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src="https://s3.amazonaws.com/bizenglish/wp-content/uploads/2022/01/04155354/SLIM-Graduates.jpg" 
              className="w-full rounded-sm brightness-75 hover:brightness-100 transition-all duration-700" 
              alt="Graduation celebration" 
            />
          </div>
      </section>
    </div>
  );
};

export default function Graduation() {
  return (
    <ServiceDetailTemplate 
      title="Graduation"
      category="Legacy Collection"
      image="https://www.graduate.sjp.ac.lk/wp-content/uploads/2025/09/50th-Convocation.jpg"
      description="You've worked hard for this moment. We’re here to capture the pride, the joy, and the excitement of your graduation with photos you’ll keep forever."
    />
  );
}