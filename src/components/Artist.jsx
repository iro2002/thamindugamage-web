import React, { useEffect, useRef, useState } from "react";

const Artist = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const raf = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => setMousePos({ x, y }));
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section id="about" className="relative w-full bg-[#0a0a0a] text-white py-24 md:py-48 px-6 overflow-hidden">
      
      {/* Background Accent: Warm Glow */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] z-0"
        style={{
          transform: `translate(${(mousePos.x - 50) * 0.2}px, ${(mousePos.y - 50) * 0.2}px)`
        }}
      />

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
          
          {/* IMAGE: Cinematic Color Grade */}
          <div className="w-full lg:w-[45%] relative">
            {/* Decorative Offset Frame */}
            <div className="absolute -inset-4 border border-orange-500/10 z-0 pointer-events-none" />
            
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl z-10">
              <img
                src="https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-6/594542645_855925930164036_4166289582778905339_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KS3ED5Pfan0Q7kNvwEqvXJl&_nc_oc=AdlyAA8qQo7nFLDIX5o8KyK_b-wEQEhzCFr4z0UCO3c5NtBxLaULNyr1jI2_EMq-oG4&_nc_zt=23&_nc_ht=scontent.fcmb8-1.fna&_nc_gid=A6nqXvHxQlyuNCQ2TaqwYg&oh=00_AfpNM2M_GjJTo8q0wxK5gKg1P2tvSlMW9kBHYlAhReRl2w&oe=697B8CBE"
                alt="Artist in Color"
                className="w-full h-full object-cover transition-transform duration-[3s] ease-out hover:scale-105"
                style={{
                  filter: "sepia(0.1) contrast(1.1) brightness(0.9)", // Subtle warm pro grade
                  transform: `scale(1.1) translate(${(mousePos.x - 50) * 0.015}%, ${(mousePos.y - 50) * 0.015}%)`
                }}
              />
              {/* Warm Light Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 via-transparent to-transparent mix-blend-overlay" />
            </div>

            
          </div>

          {/* CONTENT: Minimal & Bold */}
          <div className="w-full lg:w-[55%] space-y-10">
            <div>
              <p className="text-[10px] uppercase tracking-[1em] text-orange-500/40 mb-4 font-bold">The Visionary</p>
              <h2 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
                Capturing <br />
                <span className="italic opacity-80 text-orange-100/90">the Soul</span>
              </h2>
            </div>

            <div className="max-w-md space-y-6">
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Thamindu Gamage is a visual artist based in Sri Lanka, specializing in 
                <span className="text-white italic"> narrative-driven </span> 
                cinematography and fine-art portraiture.
              </p>
              
              <div className="h-px w-16 bg-orange-500/30" />
              
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 italic">EST. 2024</span>
                <a href="#contact" className="group text-sm uppercase tracking-[0.3em] flex items-center gap-4">
                  Let's Collaborate 
                  <span className="transition-transform group-hover:translate-x-2 text-orange-500">→</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Grain Texture Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-soft-light [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default Artist;