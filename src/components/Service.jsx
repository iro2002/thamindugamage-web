import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// 1. IMPORT LOCAL IMAGES
import weddingImg from "../gallery/service/wedding.jpg";
import engagementImg from "../gallery/service/engagement.jpg";
import preshootImg from "../gallery/service/preshoot.jpeg";
import graduationImg from "../gallery/service/graduation.jpg";
import babyImg from "../gallery/service/baby.jpg";
import birthdayImg from "../gallery/service/birthday.jpg";

const services = [
  { id: "01", title: "WEDDINGS", img: weddingImg },
  { id: "02", title: "ENGAGEMENT", img: engagementImg },
  { id: "03", title: "PRE SHOOT",  img: preshootImg },
  { id: "04", title: "GRADUATION", img: graduationImg },
  { id: "05", title: "BABY SHOOT", img: babyImg },
  { id: "06", title: "BD SHOOT", img: birthdayImg }
];

const Service = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleServiceClick = (s) => {
    if (isMobile && expandedId !== s.id) {
      setExpandedId(s.id);
    } else {
      const slug = s.title.toLowerCase().replace(/\s+/g, '-');
      navigate(`/services/${slug}`);
    }
  };

  return (
    <section id="services" className="bg-[#0a0a0a] text-white w-full h-screen flex flex-col overflow-hidden">
      
      {/* HEADER: No overlap, fixed height */}
      <header className="flex-none pt-12 pb-8 px-8 lg:px-20 z-20">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-8 h-px bg-orange-500" />
          <span className="text-[10px] tracking-[0.4em] text-orange-500 font-mono uppercase">Services</span>
        </div>
        <h2 className="text-5xl lg:text-7xl font-serif italic tracking-tighter leading-none">
          Event <span className="not-italic text-white/10">Coverage</span>
        </h2>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 min-h-0 relative z-10">
        
        {/* --- NEW PC DESIGN: DYNAMIC MOSAIC --- */}
        {!isMobile && (
          <div className="flex h-full w-full p-4 lg:p-8 gap-4">
            {services.map((s) => (
              <div
                key={s.id}
                onMouseEnter={() => setHoveredId(s.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleServiceClick(s)}
                className={`relative h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden group
                  ${hoveredId === s.id ? "flex-[3]" : "flex-1"}
                `}
              >
                {/* Image */}
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 
                    ${hoveredId && hoveredId !== s.id ? "brightness-[0.3] grayscale" : "brightness-[0.8]"}
                  `} 
                />

                {/* Vertical Title (Visible when not hovered) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${hoveredId === s.id ? "opacity-0" : "opacity-100"}`}>
                   <span className="rotate-90 whitespace-nowrap font-serif text-2xl tracking-widest text-white/30 uppercase">
                     {s.title}
                   </span>
                </div>

                {/* Hover Content (Overlay) */}
                <div className={`absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-transparent to-transparent transition-opacity duration-500 ${hoveredId === s.id ? "opacity-100" : "opacity-0"}`}>
                  <span className="font-mono text-orange-500 text-xs mb-2">{s.id}</span>
                  <h3 className="text-4xl font-serif italic mb-4">{s.title}</h3>
                  <p className="text-sm text-white/60 font-light max-w-xs mb-6 leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="flex items-center gap-2 text-orange-500 group">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Explore</span>
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Border Accent */}
                <div className={`absolute inset-0 border border-white/5 transition-colors ${hoveredId === s.id ? "border-orange-500/30" : ""}`} />
              </div>
            ))}
          </div>
        )}

        {/* --- MOBILE VIEW: UNCHANGED --- */}
        {isMobile && (
          <div className="flex flex-col h-full w-full px-4 pb-4">
            {services.map((s) => {
              const isActive = expandedId === s.id;
              return (
                <div
                  key={s.id}
                  onClick={() => handleServiceClick(s)}
                  className={`relative w-full border-b border-white/5 transition-all duration-700 ease-in-out flex flex-col justify-center overflow-hidden
                    ${isActive ? "flex-[6]" : "flex-1"}
                  `}
                >
                  <img src={s.img} className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${isActive ? "opacity-60 scale-100" : "opacity-20 scale-110 saturate-0"}`} alt={s.title} />
                  <div className="relative px-8 z-10 flex flex-col">
                    <div className="flex justify-between items-center">
                      <h3 className={`text-2xl font-serif ${isActive ? "italic text-white" : "text-white/40"}`}>{s.title}</h3>
                      <ArrowUpRight size={20} className={isActive ? "text-orange-500" : "opacity-20"} />
                    </div>
                    {isActive && (
                      <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-500">
                        <p className="text-xs text-white/60 font-light leading-relaxed">{s.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </section>
  );
};

export default Service;