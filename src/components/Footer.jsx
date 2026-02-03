import React from "react";
import { ArrowUpRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] text-white py-12 overflow-hidden border-t border-white/5">
      {/* Subtle Grainy Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Brand Logo / Name */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <h3 className="text-xs font-serif tracking-[0.4em] uppercase">
              Thamindu <span className="text-orange-500">Gamage</span>
            </h3>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/30 font-light">
              Cinematic Storytelling • Sri Lanka
            </p>
          </div>

          {/* Compact Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {["Portfolio", "Artist", "Services", "Gallery"].map((item) => (
                <li key={item}>
                  <HashLink
                    smooth
                    to={`/#${item.toLowerCase()}`}
                    className="text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-orange-500 transition-colors duration-300"
                  >
                    {item}
                  </HashLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright & Top Button */}
          <div className="flex items-center gap-8">
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 hidden sm:block">
              © {currentYear}
            </p>
            
            {/* The Professional White Button - Scaled down for Small Footer */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group relative w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-500 active:scale-90"
              aria-label="Back to top"
            >
              <ArrowUpRight className="w-5 h-5 text-black group-hover:rotate-[-45deg] transition-transform duration-500" />
              <div className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/30 group-hover:scale-125 transition-all duration-500"></div>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;