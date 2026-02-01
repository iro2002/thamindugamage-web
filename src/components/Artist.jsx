import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion";
import thaminduPng from "../gallery/service/thamindu.png";

const Artist = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const mX = useMotionValue(0);
  const mY = useMotionValue(0);
  const springX = useSpring(mX, { damping: 30, stiffness: 50 });
  const springY = useSpring(mY, { damping: 30, stiffness: 50 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const pngY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      mX.set(x);
      mY.set(y);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mX, mY]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-[#050505] text-white py-20 lg:py-48 px-6 overflow-hidden border-t border-white/[0.05]"
    >
      {/* Background Parallax Silhouette */}
      <motion.div 
        style={{ y: pngY, x: useTransform(springX, (val) => val * -1), disappearance: useTransform(scrollYProgress, [0.5, 1], [1, 0]) }}
        className="absolute right-[-10%] bottom-[-5%] w-[90%] lg:w-[50%] h-auto opacity-[0.08] pointer-events-none z-0 select-none grayscale contrast-125"
      >
        <img src={thaminduPng} alt="" className="w-full h-full object-contain" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* flex-col-reverse handles the mobile order: Text (Top), Image (Bottom) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-32">
          
          {/* IMAGE BLOCK: Appears second on mobile, left on desktop */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="w-full lg:w-[45%] relative group mt-8 lg:mt-0"
          >
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-orange-500/30" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-orange-500/30" />
            
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 ring-1 ring-white/10">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src="https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/594542645_855925930164036_4166289582778905339_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=z_FOt0eTbBkQ7kNvwGkPRnx&_nc_oc=Adndhc4tocX9Hrpc6ivsM7nURoURzFwUYbePzz4EmoSgqUu6xQWrMziIhdP2O7WaIzk&_nc_zt=23&_nc_ht=scontent.fcmb10-1.fna&_nc_gid=5tN0QBxRfA3EzpyAx6YXdQ&oh=00_AfuxCOz958g3mHqOWQH72pRmVE6oaDuRAzyAxqECrpRbfA&oe=6983ADFE"
                alt="Thamindu Portrait"
                className="w-full h-full object-cover grayscale-[0.2]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* TEXT BLOCK: Appears first on mobile, right on desktop */}
          <div className="w-full lg:w-[55%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:space-y-10"
            >
              <div className="flex items-center gap-3">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 40 } : {}}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="h-[1px] bg-orange-500" 
                />
                <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.5em] text-orange-500 font-bold">
                  The Artist
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tighter leading-[0.85] text-white">
                Turning moments <br />
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 0.4, x: 0 } : {}}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="italic font-serif"
                >
                  into stories.
                </motion.span>
              </h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7, duration: 1 }}
                className="space-y-6"
              >
                <p className="text-lg md:text-2xl font-light leading-relaxed text-white/60 max-w-xl">
                  I’m <span className="text-white font-medium">Thamindu Gamage</span> — A Sri Lankan storyteller dedicated to capturing raw emotions and cinematic narratives.
                </p>
                
                {/* Visual signature for mobile appeal */}
                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent lg:hidden" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Background Texture Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default Artist;