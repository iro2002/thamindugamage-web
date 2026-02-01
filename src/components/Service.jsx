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

// 2. DATA ARRAY (Fixed: Now defined correctly)
const services = [
  { id: "01", title: "WEDDINGS", img: weddingImg, desc: "Capturing your timeless love stories." },
  { id: "02", title: "ENGAGEMENT", img: engagementImg, desc: "The beginning of forever." },
  { id: "03", title: "PRE SHOOT", img: preshootImg, desc: "Creative pre-wedding sessions." },
  { id: "04", title: "GRADUATION", img: graduationImg, desc: "Celebrating your academic milestones." },
  { id: "05", title: "BABY SHOOT", img: babyImg, desc: "Little moments, big memories." },
  { id: "06", title: "BD SHOOT", img: birthdayImg, desc: "Fun-filled birthday celebrations." }
];

const Service = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    
    // Debounce resize events for better performance
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(check, 150);
    };
    
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const handleServiceClick = (s) => {
    if (isMobile && expandedId !== s.id) {
      setExpandedId(s.id);
    } else {
      const slug = s.title.toLowerCase().replace(/\s+/g, '-');
      navigate(`/services/${slug}`);
    }
  };

  // Helper for performance-optimized grid animation
  const getGridTemplate = () => {
    if (!hoveredId) return "1fr 1fr 1fr 1fr 1fr 1fr";
    return services.map(s => s.id === hoveredId ? "3fr" : "1fr").join(" ");
  };

  return (
    <section id="services" className="bg-[#0a0a0a] text-white w-full h-screen flex flex-col overflow-hidden">
      
      {/* HEADER */}
      <header className="flex-none pt-12 pb-8 px-8 lg:px-20 z-20">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-8 h-px bg-orange-500" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-orange-500 font-bold">Service</span>
        </div>
        <h2 className="text-5xl lg:text-7xl font-serif italic tracking-tighter leading-none">
          Event <span className="not-italic text-white/10">Coverage</span>
        </h2>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 min-h-0 relative z-10 px-4 lg:px-8 pb-8">
        {!isMobile ? (
          /* DESKTOP: GRID MOSAIC (Smooth performance) */
          <div 
            style={{ 
              display: 'grid',
              gridTemplateColumns: getGridTemplate(),
              transition: 'grid-template-columns 700ms cubic-bezier(0.25, 1, 0.5, 1)',
              height: '100%',
              gap: '12px',
              willChange: hoveredId ? 'grid-template-columns' : 'auto'
            }}
          >
            {services.map((s) => (
              <div
                key={s.id}
                onMouseEnter={() => setHoveredId(s.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleServiceClick(s)}
                className="relative h-full cursor-pointer overflow-hidden group border border-white/5"
              >
                {/* Image */}
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  loading="lazy"
                  style={{ willChange: hoveredId === s.id ? 'transform' : 'auto' }}
                />

                {/* Smooth Dark Overlay (Replaces laggy filters) */}
                <div className={`absolute inset-0 bg-black transition-opacity duration-500 
                  ${hoveredId && hoveredId !== s.id ? "opacity-80" : "opacity-30"}`} 
                />

                {/* Vertical Title (Shown when not hovered) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${hoveredId === s.id ? "opacity-0" : "opacity-100"}`}>
                   <span className="rotate-90 whitespace-nowrap font-serif text-2xl tracking-widest text-white/30 uppercase">
                     {s.title}
                   </span>
                </div>

                {/* Hover Details */}
                <div className={`absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-transparent transition-all duration-500 
                  ${hoveredId === s.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  <span className="font-mono text-orange-500 text-xs mb-2">{s.id}</span>
                  <h3 className="text-4xl font-serif italic mb-2">{s.title}</h3>
                  <p className="text-xs text-white/50 mb-6 max-w-xs">{s.desc}</p>
                  <div className="flex items-center gap-2 text-orange-500">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Explore</span>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* MOBILE VIEW: Vertical Accordion */
          <div className="flex flex-col h-full w-full gap-2">
            {services.map((s) => {
              const isActive = expandedId === s.id;
              return (
                <div
                  key={s.id}
                  onClick={() => handleServiceClick(s)}
                  style={{ flexGrow: isActive ? 6 : 1, transition: 'flex-grow 500ms ease-in-out' }}
                  className="relative w-full border-b border-white/5 flex flex-col justify-center overflow-hidden"
                >
                  <img src={s.img} className="absolute inset-0 w-full h-full object-cover opacity-40" alt={s.title} loading="lazy" />
                  <div className="relative px-8 z-10 flex flex-col">
                    <div className="flex justify-between items-center w-full">
                      <h3 className={`text-2xl font-serif ${isActive ? "italic text-white" : "text-white/40"}`}>{s.title}</h3>
                      <ArrowUpRight size={20} className={isActive ? "text-orange-500" : "opacity-20"} />
                    </div>
                    {isActive && (
                      <p className="text-xs text-white/60 mt-2 animate-in fade-in slide-in-from-top-1 duration-300">{s.desc}</p>
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