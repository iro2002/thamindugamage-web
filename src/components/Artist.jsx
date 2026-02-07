import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, animate } from "framer-motion";

// IMPORT BOTH IMAGES
import thaminduPng from "../gallery/service/thamindu.png";
import thaminduJpg from "../gallery/service/thamindu.jpg";

// Helper Component for Number Animation
const Counter = ({ value, duration = 2, isInView }) => {
  const ref = useRef(null);
  
  useEffect(() => {
    if (isInView) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (v) => {
          if (node) node.textContent = Math.round(v);
        }
      });
      return () => controls.stop();
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>0</span>;
};

const Artist = () => {
  const sectionRef = useRef(null);
  
  // Trigger animation when 20% of the section is visible
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const lastUpdate = useRef(0);
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);
  const springX = useSpring(mX, { damping: 30, stiffness: 50 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const pngY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const pngOpacity = useTransform(scrollYProgress, [0.5, 1], [0.08, 0]);
  const pngX = useTransform(springX, (val) => val * -1);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;
    
    const handleMove = (e) => {
      const now = Date.now();
      if (now - lastUpdate.current < 33) return;
      lastUpdate.current = now;
      
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      mX.set(x);
      mY.set(y);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mX, mY]);

  return (
    <section ref={sectionRef} id="about" className="relative w-full bg-[#050505] text-white overflow-hidden border-t border-white/[0.05]">
      
      {/* HEADER */}
      <header className="flex-none pt-12 pb-8 px-8 lg:px-20 z-20">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-8 h-px bg-orange-500" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-orange-500 font-bold">About</span>
        </div>
        <h2 className="text-5xl lg:text-7xl font-serif italic tracking-tighter leading-none">
          Visual <span className="not-italic text-white/10">Journal</span>
        </h2>
      </header>

      {/* BACKGROUND FLOATING IMAGE */}
      <motion.div 
        style={{ y: pngY, x: pngX, opacity: pngOpacity }}
        className="absolute right-[-10%] bottom-[-5%] w-[90%] lg:w-[50%] h-auto pointer-events-none z-0 select-none grayscale contrast-125"
      >
        <img src={thaminduPng} alt="" className="w-full h-full object-contain" loading="lazy" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-20 px-8 lg:px-20 pb-20 lg:pb-48">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-32">
          
          {/* PORTRAIT CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-[45%] relative group mt-8 lg:mt-0"
          >
            {/* Top Left Border Pulse */}
            <motion.div 
              animate={isInView ? { opacity: [0.3, 0.6, 0.3] } : { opacity: 0.3 }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-orange-500/30" 
            />
            
            {/* Bottom Right Border Pulse */}
            <motion.div 
              animate={isInView ? { opacity: [0.3, 0.6, 0.3] } : { opacity: 0.3 }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-orange-500/30" 
            />

            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 ring-1 ring-white/10">
              {/* Zoom Effect */}
              <motion.img
                src={thaminduJpg} 
                alt="Portrait"
                className="w-full h-full object-cover grayscale-[0.2]"
                animate={isInView ? { scale: [1, 1.1] } : { scale: 1 }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  ease: "linear" 
                }}
              />
            </div>
          </motion.div>

          {/* TEXT CONTENT */}
          <div className="w-full lg:w-[55%]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 lg:space-y-10"
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.85] text-white">
                Turning moments <br />
                <span className="italic font-serif opacity-40">into stories.</span>
              </h2>
              <p className="text-lg md:text-2xl font-light leading-relaxed text-white/60 max-w-xl">
                I’m <span className="text-white font-medium">Thamindu Gamage</span> — Professional photographer and videographer in Sri Lanka, creating cinematic visuals that capture genuine emotion and real stories.
              </p>

              {/* STATS SECTION */}
              <div className="flex items-center gap-12 pt-4 border-t border-white/10 mt-8">
                
                {/* Projects Done - ANIMATED */}
                <div>
                  <div className="text-4xl md:text-5xl font-serif italic text-orange-500 flex items-center">
                    <Counter value={50} duration={2.5} isInView={isInView} />+
                  </div>
                  <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/40 mt-2 font-medium">Projects Done</div>
                </div>
                
                <div className="w-px h-12 bg-white/10" />
                
                {/* Satisfaction - STATIC (No Animation) */}
                <div>
                  <div className="text-4xl md:text-5xl font-serif italic text-orange-500 flex items-center">
                    100%
                  </div>
                  <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/40 mt-2 font-medium">Satisfaction</div>
                </div>

              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;