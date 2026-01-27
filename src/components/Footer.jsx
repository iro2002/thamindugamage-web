import React from "react";
import { Instagram, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] text-white pt-32 pb-10 overflow-hidden">
      {/* Background Accent - Large "TG" watermark */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none select-none">
        <h2 className="text-[25rem] font-serif italic text-white/[0.02] leading-none">
          TG
        </h2>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Massive Call to Action */}
        <div className="mb-32">
          <HashLink 
            smooth 
            to="/contact" 
            className="group inline-block"
          >
            <p className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.6em] mb-6">
              Available Worldwide
            </p>
            <h2 className="text-6xl md:text-9xl font-serif italic tracking-tighter leading-none transition-transform duration-700 group-hover:translate-x-4">
              Let's Create <br /> 
              <span className="not-italic text-white/90">Something Iconic</span>
              <ArrowUpRight className="inline-block ml-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4" size={60} strokeWidth={1} />
            </h2>
          </HashLink>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-white/5 pt-16">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5">
            <h3 className="text-xl font-serif tracking-widest uppercase mb-8">
              Thamindu <span className="text-orange-500">Gamage</span>
            </h3>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs font-light tracking-wide">
              Documenting life's most profound moments through a cinematic lens. 
              Based in Sri Lanka, operating across borders to tell your unique story.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8">Discovery</p>
            <ul className="space-y-4">
              {["Portfolio", "The Artist", "Services", "Reviews", "Gallery"].map((item) => (
                <li key={item}>
                  <HashLink
                    smooth
                    to={`/#${item.toLowerCase().replace(" ", "")}`}
                    className="text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8">Connect</p>
            <div className="space-y-6">
              <a href="mailto:hello@tgamage.com" className="block group">
                <span className="text-[10px] text-white/30 block mb-1">Email</span>
                <span className="text-sm tracking-widest group-hover:text-orange-500 transition-colors">hello@tgamage.com</span>
              </a>
              <a href="https://instagram.com" className="block group">
                <span className="text-[10px] text-white/30 block mb-1">Social</span>
                <span className="text-sm tracking-widest group-hover:text-orange-500 transition-colors">@thamindugamage</span>
              </a>
              <div className="block">
                <span className="text-[10px] text-white/30 block mb-1">Studio</span>
                <span className="text-sm tracking-widest">Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Tech */}
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/20">
            © {new Date().getFullYear()} TG Photography — All Rights Reserved
          </p>
          
          <div className="flex gap-12">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[9px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>

      {/* Grainy Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </footer>
  );
};

export default Footer;