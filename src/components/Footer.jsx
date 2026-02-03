import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] text-white py-12 overflow-hidden border-t border-white/5">
      {/* Subtle Background Accent */}
      <div className="absolute -bottom-10 -right-10 pointer-events-none select-none">
        <h2 className="text-[15rem] font-serif italic text-white/[0.01] leading-none">
          TG
        </h2>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-8 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo/Name Area */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xs font-serif tracking-[0.5em] uppercase mb-2">
              Thamindu <span className="text-orange-500/80">Gamage</span>
            </h3>
            <p className="text-[8px] uppercase tracking-[0.3em] text-white/20">
              © {new Date().getFullYear()} — Cinematic Excellence
            </p>
          </div>

          {/* Minimal Navigation */}
          <nav className="flex gap-8">
            {["Services", "Gallery", "Contact"].map((item) => (
              <HashLink
                key={item}
                smooth
                to={`/#${item.toLowerCase()}`}
                className="text-[9px] uppercase tracking-[0.4em] text-white/40 hover:text-orange-500 transition-colors"
              >
                {item}
              </HashLink>
            ))}
          </nav>

          {/* Functional Link */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-[9px] uppercase tracking-[0.4em] text-white/20 hover:text-white transition-all"
          >
            Top <span className="text-orange-500 transition-transform group-hover:-translate-y-1">↑</span>
          </button>
        </div>
      </div>

      {/* Grainy Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </footer>
  );
};

export default Footer;