import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ArrowUpRight } from "lucide-react";

const services = [
  { 
    id: "01", 
    title: "WEDDINGS", 
    category: "Luxury", 
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", 
    desc: "Timeless narratives for your most significant union." 
  },
  { 
    id: "02", 
    title: "ENGAGEMENT", 
    category: "Intimate", 
    img: "https://images.unsplash.com/photo-1639078007551-b14a57d62c8d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    desc: "Capturing the raw, quiet moments of shared promises." 
  },
  { 
    id: "03", 
    title: "PRE SHOOT", 
    category: "Editorial", 
    img: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop", 
    desc: "Stylized concepts tailored to your unique chemistry." 
  },
  { 
    id: "04", 
    title: "GRADUATION", 
    category: "Milestone", 
    img: "https://images.unsplash.com/photo-1696235584864-a4080ea516f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fEdyYWR1YXRpb258ZW58MHx8MHx8fDA%3D", 
    desc: "Honoring academic excellence and the start of a new legacy." 
  },
  { 
    id: "05", 
    title: "BABY SHOOT", 
    category: "Newborn", 
    img: "https://images.unsplash.com/photo-1673340979193-481dd0eb49c8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    desc: "Gentle, organic portraiture for your newest addition." 
  },
  { 
    id: "06", 
    title: "BD SHOOT", 
    category: "Lifestyle", 
    img: "https://plus.unsplash.com/premium_photo-1677789512582-31adb4a48e8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8", 
    desc: "High-energy celebrations documented with artistic flair." 
  }
];

const Service = () => {
  const [hovered, setHovered] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleServiceClick = (s) => {
    if (isMobile && expandedId !== s.id) {
      // On mobile, first click expands the card
      setExpandedId(s.id);
    } else {
      // On desktop, or second click on mobile, navigate to details
      // Creates a slug like "weddings" or "baby-shoot"
      const slug = s.title.toLowerCase().replace(/\s+/g, '-');
      navigate(`/services/${slug}`);
    }
  };

  return (
    <section id="services" className="bg-[#0a0a0a] text-white border-t border-orange-500/10 relative overflow-hidden">
      
      {/* Background Glow Accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/5 blur-[120px] pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="p-8 lg:p-24 border-b border-white/5">
        <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-orange-500/40" />
            <p className="text-[10px] uppercase tracking-[1em] text-orange-200/30 font-bold">Offerings</p>
        </div>
        <h2 className="text-5xl lg:text-8xl font-serif italic tracking-tighter text-white/90 leading-none">
          Event <span className="not-italic text-orange-50/80">Coverage</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[70vh] lg:h-screen divide-y lg:divide-y-0 lg:divide-x divide-white/5 relative z-10">
        {services.map((s) => {
          const isActive = hovered === s.id || (isMobile && expandedId === s.id);

          return (
            <button
              key={s.id}
              onClick={() => handleServiceClick(s)}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
              className={`relative flex-1 group text-left transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden min-h-[120px] lg:min-h-full
                ${hovered === s.id ? "lg:flex-[2.5]" : "lg:flex-1"} 
                ${isMobile && expandedId === s.id ? "min-h-[450px]" : ""}
              `}
            >
              {/* BACKGROUND IMAGE */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={s.img}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1.5s] ease-out
                    ${isActive ? "grayscale-0 scale-100 brightness-[0.5]" : "grayscale-[0.5] scale-110 brightness-[0.25]"}
                  `}
                  style={{ filter: isActive ? "sepia(0.1) contrast(1.1)" : "sepia(0.4) contrast(0.9)" }}
                  alt={s.title}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 transition-opacity duration-700 ${isActive ? "opacity-60" : "opacity-30"}`} />
              </div>

              {/* CONTENT OVERLAY */}
              <div className="relative h-full w-full p-6 lg:p-10 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className={`font-mono text-[10px] transition-colors duration-500 ${isActive ? "text-orange-400" : "text-white/20"}`}>
                    {s.id}
                  </span>

                  <div className={`transition-all duration-500 ${isActive ? "rotate-45 opacity-100 text-orange-400" : "opacity-0"}`}>
                    <ArrowUpRight size={20} strokeWidth={1} />
                  </div>
                </div>

                <div>
                  <h3 className={`text-2xl lg:text-4xl font-serif tracking-tight uppercase transition-all duration-700 leading-none
                    ${isActive ? "italic text-white" : "text-white/60"}
                  `}>
                    {s.title}
                  </h3>
                  
                  <p className={`text-[9px] uppercase tracking-[0.4em] mt-3 transition-colors duration-500 ${isActive ? "text-orange-500/60" : "text-white/20"}`}>
                    {s.category}
                  </p>

                  <div className={`overflow-hidden transition-all duration-700 ease-in-out
                    ${isActive ? "max-h-32 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"}
                  `}>
                    <p className="text-[11px] lg:text-xs text-white/50 leading-relaxed font-light max-w-[220px]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-700 ${isActive ? "w-full" : "w-0"}`} />
            </button>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-soft-light [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default Service;