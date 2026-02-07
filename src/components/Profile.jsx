import React, { useEffect, useState, memo, useRef } from "react";
import { ArrowRight, Instagram, Camera } from "lucide-react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const Hero = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  
  // High-performance motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs to eliminate jitter and lag
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleMove = (e) => {
      // Calculate offset from center
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const scrollToGallery = (e) => {
    e.preventDefault();
    setIsNavigating(true);

    const target = document.querySelector("#gallery");
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => setIsNavigating(false), 1200);
      }, 500);
    }
  };

    const openWhatsApp = () => {
    const number = "94717441271"; // no +, no spaces
    const message = encodeURIComponent(
        "Hello Thamindu! I would like to secure a date for a photoshoot."
    );
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
    };


  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      {/* Decorative Outer Frame */}
      <div className="absolute inset-4 border border-white/5 pointer-events-none z-50" />

      {/* Background Image - Optimized Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ 
            x: springX, 
            y: springY,
            scale: 1.1 // Static scale to prevent layout thrashing during hover
          }}
          className="h-full w-full will-change-transform"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: isNavigating ? 0.2 : 0.5 }}
            transition={{ duration: 1 }}
            src="https://images.unsplash.com/photo-1590189703942-41b170fa6719?q=80&w=1170&auto=format&fit=crop"
            alt="Thamindu Gamage Photography"
            className="h-full w-full object-cover grayscale-[20%]"
            draggable="false"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isNavigating ? 0 : 1, y: isNavigating ? -20 : 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Brand Title */}
          <h1 className="cursor-default">
            <span className="block font-serif text-5xl md:text-8xl lg:text-9xl font-extralight tracking-tighter leading-[0.9]">
              THAMINDU{" "}
              <span className="italic font-light text-white/40">GAMAGE</span>
            </span>
            <span className="mt-6 block text-[10px] md:text-xs font-bold uppercase tracking-[1em] text-white/50">
              Photography
            </span>
          </h1>

          <div className="mt-12 h-px w-16 bg-white/20" />

          {/* Quote + Buttons */}
          <div className="mt-12 max-w-xl space-y-10">
            <p className="text-xs md:text-sm font-light leading-relaxed tracking-[0.2em] text-white/40 uppercase">
              “Every captured moment is a story waiting to be told.”
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">
              {/* Gallery Link */}
              <button
                onClick={scrollToGallery}
                className="group relative text-[10px] font-bold uppercase tracking-[0.4em] text-white/80 transition"
              >
                <span className="relative z-10">View Gallery</span>
                <span className="absolute -bottom-2 left-0 h-[1px] w-full bg-white/20 origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
                <ArrowRight size={14} className="inline-block ml-3 transition-transform group-hover:translate-x-2" />
              </button>

              {/* Secure Date Button */}
              <button
                onClick={openWhatsApp}
                className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-xl transition-all hover:bg-white hover:text-black"
              >
                Secure a Date
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sidebar UI */}
      <div className="absolute bottom-12 left-12 z-30 hidden lg:flex items-center gap-8 text-white/30">
        <div className="flex flex-col gap-6">
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Instagram size={16} strokeWidth={1.5} />
          </a>
          <span className="h-5 w-5 rounded-full border border-white/10 grid place-items-center">
            <Camera size={12} strokeWidth={1.5} />
          </span>
        </div>
        <div className="h-20 w-[1px] bg-white/10" />
    
      </div>

      {/* Grain Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default memo(Hero);