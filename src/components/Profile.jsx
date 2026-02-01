import React, { memo } from "react";
import { ArrowRight, Instagram, Camera } from "lucide-react";
import { motion } from "framer-motion";

const REEL_IMAGES = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/${i + 10}/800/1200`);

const Hero = () => {
  // We only need to duplicate once for a seamless loop if logic is correct
  const duplicatedReel = [...REEL_IMAGES, ...REEL_IMAGES];

  const openWhatsApp = () => {
    const number = "94717441271";
    const message = encodeURIComponent("Hello Thamindu! I would like to secure a date.");
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050505] text-white isolation-auto">
      {/* Background Camera Reel Animation */}
      <div className="absolute inset-0 z-0 opacity-60 grayscale-[40%] pointer-events-none">
        <motion.div 
          className="flex h-full items-center"
          style={{ 
            width: "max-content", 
            willChange: "transform",
            transform: "translateZ(0)" // Force GPU acceleration
          }}
          animate={{ x: [0, "-50%"] }} 
          transition={{ 
            duration: 40, // Slightly faster feels smoother than jittery slow
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {duplicatedReel.map((url, i) => (
            <div 
              key={i} 
              className="relative h-screen w-[30vw] min-w-[300px] flex-none bg-[#111] overflow-hidden"
            >
              {/* Optimized Film Perforations using CSS Gradients instead of 12 divs */}
              <div 
                className="absolute left-4 top-0 bottom-0 w-2 opacity-20"
                style={{
                  backgroundImage: "linear-gradient(to bottom, white 16px, transparent 16px)",
                  backgroundSize: "100% 32px"
                }}
              />
              
              <img 
                src={url} 
                alt="Reel" 
                className="h-full w-full object-cover transform-gpu" 
                loading="lazy"
              />

              <div 
                className="absolute right-4 top-0 bottom-0 w-2 opacity-20"
                style={{
                  backgroundImage: "linear-gradient(to bottom, white 16px, transparent 16px)",
                  backgroundSize: "100% 32px"
                }}
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays - Added 'pointer-events-none' to ensure no interaction lag */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="cursor-default">
            <span className="block font-serif text-6xl md:text-9xl font-extralight tracking-tighter leading-tight">
              THAMINDU <span className="italic text-white/30 font-light">GAMAGE</span>
            </span>
            <span className="mt-6 block text-[10px] md:text-xs font-bold uppercase tracking-[1.2em] text-white/60">
              Photography Archive
            </span>
          </h1>
          
          <p className="mt-12 text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/40 italic">
            “Every captured moment is a story waiting to be told.”
          </p>

          <div className="mt-16 flex flex-col sm:flex-row gap-10 justify-center items-center">
            <a 
              href="#services" 
              className="group text-[10px] font-bold uppercase tracking-[0.4em] text-white/80 hover:text-white transition-colors"
            >
              View Work 
              <ArrowRight size={14} className="inline-block ml-2 transition-transform group-hover:translate-x-2" />
            </a>
            <button 
              onClick={openWhatsApp} 
              className="rounded-full border border-white/20 bg-white/10 px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all active:scale-95"
            >
              Secure a Date
            </button>
          </div>
        </motion.div>
      </div>

      {/* Side HUD UI */}
      <div className="absolute bottom-12 left-12 hidden lg:flex items-center gap-6 opacity-40 z-40">
        <div className="flex flex-col gap-6">
          <Instagram size={18} className="hover:text-white cursor-pointer transition-colors" />
          <Camera size={18} className="hover:text-white cursor-pointer transition-colors" />
        </div>
        <div className="h-20 w-[1px] bg-white/30" />
        <span className="text-[9px] font-medium uppercase tracking-[0.3em] [writing-mode:vertical-lr]">
          EST_2024.ARCHIVE
        </span>
      </div>
    </section>
  );
};

export default memo(Hero);