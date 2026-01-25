import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "The Artist", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Feedback", href: "#feedback" },
    { name: "Contact", href: "#contact" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out px-6 md:px-12 ${
        isScrolled ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        
        {/* LOGO AREA */}
        <div className="flex-1">
          <a href="/" className="group flex flex-col">
            <span className="text-lg font-serif tracking-[0.2em] leading-none text-white">
              T<span className="italic">G</span>
            </span>
         
          </a>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA / BOOKING */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <a 
            href="#inquire" 
            className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.2em] border border-white/20 px-5 py-2 hover:bg-white hover:text-black transition-all duration-500"
          >
            Inquire
          </a>
          
          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <div 
        className={`fixed inset-0 h-screen w-full bg-black flex flex-col items-center justify-center transition-transform duration-700 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ zIndex: -1 }}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-serif italic tracking-tighter text-white hover:text-white/50 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;