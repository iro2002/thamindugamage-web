import React, { useEffect, useState, memo, useRef } from "react";
import { ArrowRight, Instagram, Camera } from "lucide-react";

const Hero = () => {
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
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      {/* Decorative Outer Frame */}
      <div className="absolute inset-4 border border-white/5 pointer-events-none z-50" />

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590189703942-41b170fa6719?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Thamindu Gamage Photography"
          className="h-full w-full object-cover opacity-50 grayscale-[20%] transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${(mousePos.x - 50) * 0.015}%, ${(mousePos.y - 50) * 0.015}%) scale(1.1)`,
            filter: "contrast(1.1) brightness(0.8)",
          }}
          draggable="false"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40" />
      </div>

      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.06), transparent 100%)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center text-center">
          {/* Top Detail */}
          <div className="mb-8 flex items-center gap-4 overflow-hidden">

            <span className="h-[1px] w-12 bg-white/20" />
          </div>

          {/* Brand Title */}
          <h1 className="cursor-default">
            <span className="block font-serif text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[0.95]">
              THAMINDU{" "}
              <span className="italic font-light opacity-90">GAMAGE</span>
            </span>

            <span className="mt-4 block text-[11px] md:text-sm font-semibold uppercase tracking-[0.8em] text-white/60">
              PHOTOGRAPHY
            </span>
          </h1>

          {/* Divider */}
          <div className="mt-10 h-px w-24 bg-white/15" />

          {/* Quote + CTAs */}
          <div className="mt-10 max-w-xl space-y-8">
            <p className="text-sm md:text-base font-light leading-relaxed tracking-wide text-white/45 italic">
              “Every frame tells a story that words cannot reach.”
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-2">
              <a
                href="#portfolio"
                className="group relative text-[10px] font-bold uppercase tracking-[0.4em] text-white/80 hover:text-white transition"
              >
                <span className="relative z-10">View Gallery</span>
                <span className="absolute -bottom-2 left-0 h-[1px] w-full bg-white/20 origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
                <ArrowRight
                  size={14}
                  className="inline-block ml-4 transition-transform group-hover:translate-x-2"
                />
              </a>

              <a
                href="#book"
                className="group relative overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-xl transition-all hover:bg-white hover:text-black"
              >
                Secure a Date
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Corners UI */}
      <div className="absolute bottom-10 left-10 z-30 hidden lg:flex items-center gap-6 text-white/40">
        <div className="flex flex-col gap-4">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={15} />
          </a>
          <span className="h-4 w-4 rounded-full border border-white/20 grid place-items-center">
            <Camera size={14} />
          </span>
        </div>

        <div className="h-16 w-[1px] bg-white/10" />

        <p className="text-[9px] [writing-mode:vertical-lr] uppercase tracking-widest">
          Scroll to explore
        </p>
      </div>

      

      {/* Grain Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-screen [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default memo(Hero);
