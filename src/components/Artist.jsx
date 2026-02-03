import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion";
import thaminduPng from "../gallery/service/thamindu.png";

const Artist = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const lastUpdate = useRef(0);

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
    if (window.innerWidth < 1024) return;
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
      
      {/* STANDARD HEADER */}
      <header className="flex-none pt-12 pb-8 px-8 lg:px-20 z-20">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-8 h-px bg-orange-500" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-orange-500 font-bold">About</span>
        </div>
        <h2 className="text-5xl lg:text-7xl font-serif italic tracking-tighter leading-none">
          Visual <span className="not-italic text-white/10">Journal</span>
        </h2>
      </header>

      <motion.div 
        style={{ y: pngY, x: useTransform(springX, (val) => val * -1), opacity: useTransform(scrollYProgress, [0.5, 1], [0.08, 0]) }}
        className="absolute right-[-10%] bottom-[-5%] w-[90%] lg:w-[50%] h-auto pointer-events-none z-0 select-none grayscale contrast-125"
      >
        <img src={thaminduPng} alt="" className="w-full h-full object-contain" loading="lazy" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-20 px-8 lg:px-20 pb-20 lg:pb-48">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full lg:w-[45%] relative group mt-8 lg:mt-0"
          >
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-orange-500/30" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-orange-500/30" />
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 ring-1 ring-white/10">
              <motion.img
                src="https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/594542645_855925930164036_4166289582778905339_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=z_FOt0eTbBkQ7kNvwGkPRnx&_nc_oc=Adndhc4tocX9Hrpc6ivsM7nURoURzFwUYbePzz4EmoSgqUu6xQWrMziIhdP2O7WaIzk&_nc_zt=23&_nc_ht=scontent.fcmb10-1.fna&_nc_gid=5tN0QBxRfA3EzpyAx6YXdQ&oh=00_AfuxCOz958g3mHqOWQH72pRmVE6oaDuRAzyAxqECrpRbfA&oe=6983ADFE"
                alt="Portrait"
                className="w-full h-full object-cover grayscale-[0.2]"
              />
            </div>
          </motion.div>

          <div className="w-full lg:w-[55%]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="space-y-6 lg:space-y-10">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.85] text-white">
                Turning moments <br />
                <span className="italic font-serif opacity-40">into stories.</span>
              </h2>
              <p className="text-lg md:text-2xl font-light leading-relaxed text-white/60 max-w-xl">
                I’m <span className="text-white font-medium">Thamindu Gamage</span> — A Sri Lankan storyteller dedicated to capturing raw emotions and cinematic narratives.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Artist;