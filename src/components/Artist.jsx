import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import thaminduPng from "../gallery/service/thamindu.png";

const Artist = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Parallax Scroll Effect for the background PNG
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const pngY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-[#050505] text-white py-24 lg:py-48 px-6 overflow-hidden border-t border-white/[0.05]"
    >
      {/* Structural Accent Line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : {}}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="absolute top-0 right-1/3 w-px bg-white/[0.02] hidden lg:block" 
      />

      {/* Layer 1: Follow-Mouse Background Glow */}
      <motion.div
        animate={{ x: mousePos.x * 2, y: mousePos.y * 2 }}
        transition={{ type: "spring", damping: 30, stiffness: 50 }}
        className="pointer-events-none absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px] z-0"
      />

      {/* Layer 2: Silhouette Parallax PNG */}
      <motion.div 
        style={{ y: pngY, x: mousePos.x * -1 }}
        className="absolute right-[-5%] bottom-[-10%] w-[80%] lg:w-[50%] h-auto opacity-[0.12] pointer-events-none z-10 select-none grayscale contrast-125"
      >
        <img src={thaminduPng} alt="" className="w-full h-full object-contain" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Main Portrait Box with Reveal Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[45%] relative group"
          >
            {/* Animated Corner Accents */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-orange-500/20 group-hover:border-orange-500/50 transition-colors duration-500" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-orange-500/20 group-hover:border-orange-500/50 transition-colors duration-500" />
            
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 ring-1 ring-white/10 shadow-2xl">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src="https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/594542645_855925930164036_4166289582778905339_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=z_FOt0eTbBkQ7kNvwGkPRnx&_nc_oc=Adndhc4tocX9Hrpc6ivsM7nURoURzFwUYbePzz4EmoSgqUu6xQWrMziIhdP2O7WaIzk&_nc_zt=23&_nc_ht=scontent.fcmb10-1.fna&_nc_gid=5tN0QBxRfA3EzpyAx6YXdQ&oh=00_AfuxCOz958g3mHqOWQH72pRmVE6oaDuRAzyAxqECrpRbfA&oe=6983ADFE"
                alt="Thamindu Portrait"
                className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
              />
            </div>
          </motion.div>

          {/* Text Content with Staggered Fade */}
          <div className="w-full lg:w-[55%]">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 32 } : {}}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-px bg-orange-500" 
                />
                <span className="text-[10px] uppercase tracking-[0.6em] text-orange-500 font-bold">
                  The Artist
                </span>
              </div>

              <h2 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9]">
                Turning moments <br />
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.4 } : {}}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="italic font-serif"
                >
                  into stories.
                </motion.span>
              </h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-xl md:text-2xl font-light leading-relaxed text-white/70 max-w-xl"
              >
                I’m <span className="text-white font-medium">Thamindu Gamage</span> — A Sri Lankan storyteller dedicated to capturing raw emotions and cinematic narratives through my lens.
              </motion.p>

              {/* Minimal Call to Action */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1, duration: 1 }}
                className="pt-8"
              >
                <button className="text-[11px] uppercase tracking-[0.3em] border-b border-orange-500/30 pb-2 hover:border-orange-500 transition-colors">
                  Explore My Process
                </button>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Noise Texture Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default Artist;