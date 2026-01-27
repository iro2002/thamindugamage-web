import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "/#" },
    { name: "The Artist", href: "/#about" },
    { name: "Services", href: "/#services" },
    /* UPDATED LINK BELOW */
    { name: "Reviews", href: "/#review" },
    
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out px-6 md:px-12 ${
        isScrolled ? "py-4 bg-black/90 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"
      }`}>
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <HashLink smooth to="/#" className="group flex flex-col w-fit">
            <span className="text-xl font-serif tracking-[0.2em] leading-none text-white">
              T<span className="italic text-orange-500">G</span>
            </span>
          </HashLink>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <HashLink
              key={link.name}
              smooth
              to={link.href}
              className="relative text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </HashLink>
          ))}
        </div>

        <div className="flex-1 flex justify-end items-center gap-6">
          <HashLink 
            smooth
            to="/#contact" 
            className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.2em] border border-white/20 px-6 py-2.5 hover:bg-white hover:text-black transition-all duration-500"
          >
            Inquire
          </HashLink>
          
          <button 
            className="md:hidden text-white p-2 z-[101]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <div className={`fixed inset-0 h-screen w-full bg-[#050505] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}>
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <HashLink
              key={link.name}
              smooth
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl font-serif italic tracking-tighter text-white hover:text-orange-500 transition-all duration-300"
            >
              {link.name}
            </HashLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;