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
  { 
    id: "01", 
    title: "WEDDINGS", 
    category: "Ceremony", 
    desc: "Capturing your eternal bond with cinematic precision.", 
    img: weddingImg, 
  },
  { 
    id: "02", 
    title: "ENGAGEMENT", 
    category: "Couples",
    desc: "The beginning of a beautiful journey together.",
    img: engagementImg, 
  },
  { 
    id: "03", 
    title: "PRE SHOOT", 
    category: "Creative",
    desc: "Stylized storytelling before the big day.",
    img: preshootImg, 
  },
  { 
    id: "04", 
    title: "GRADUATION", 
    category: "Milestones",
    desc: "Celebrating academic achievements and new beginnings.",
    img: graduationImg, 
  },
  { 
    id: "05", 
    title: "BABY SHOOT", 
    category: "Family",
    desc: "Preserving the innocence of your little ones.",
    img: babyImg, 
  },
  { 
    id: "06", 
    title: "BD SHOOT", 
    category: "Parties",
    desc: "Vibrant memories of your special celebrations.",
    img: birthdayImg, 
  }
];

const Service = () => {
  const [hovered, setHovered] = useState(null);
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
    <section id="services" className="bg-[#0a0a0a] text-white border-t border-orange-500/10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="p-8 lg:p-24 border-b border-white/5">
        <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-orange-500/40" />
        </div>
        <h2 className="text-5xl lg:text-8xl font-serif italic tracking-tighter text-white/90 leading-none">
          Event <span className="not-italic text-orange-50/80">Coverage</span>
        </h2>
      </div>

      {/* Interactive Grid */}
      <div className="flex flex-col lg:flex-row min-h-[70vh] lg:h-screen divide-y lg:divide-y-0 lg:divide-x divide-white/5 relative z-10">
        {services.map((s) => {
          const isActive = hovered === s.id || (isMobile && expandedId === s.id);

          return (
            <button
              key={s.id}
              onClick={() => handleServiceClick(s)}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
              className={`relative flex-1 group text-left transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden min-h-[140px] lg:min-h-full
                ${hovered === s.id ? "lg:flex-[3]" : "lg:flex-1"} 
                ${isMobile && expandedId === s.id ? "min-h-[500px]" : ""}
              `}
            >
              {/* Image Layer */}
              <div className="absolute inset-0 overflow-hidden bg-neutral-900">
                <img
                  src={s.img}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1s] ease-out
                    ${isActive 
                      ? "saturate-100 scale-100 brightness-90 opacity-100" 
                      : "saturate-[0.4] scale-105 brightness-[0.6] opacity-80"
                    }
                  `}
                  alt={s.title}
                />
                {/* Gradient Overlays: Subtle darkened edges for a cinematic feel */}
                <div className={`absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 transition-opacity duration-700 ${isActive ? "opacity-30" : "opacity-50"}`} />
              </div>

              {/* Text Layer */}
              <div className="relative h-full w-full p-6 lg:p-10 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className={`font-mono text-[10px] transition-colors duration-500 ${isActive ? "text-orange-400" : "text-white/40"}`}>
                    {s.id}
                  </span>
                  <div className={`transition-all duration-500 transform ${isActive ? "rotate-0 opacity-100 text-orange-400" : "-rotate-45 opacity-0"}`}>
                    <ArrowUpRight size={24} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className={`text-2xl lg:text-5xl font-serif tracking-tight uppercase transition-all duration-700 leading-none
                    ${isActive ? "italic text-white" : "text-white/60"}
                  `}>
                    {s.title}
                  </h3>
                  
                  <p className={`text-[10px] uppercase tracking-[0.3em] mt-3 transition-colors duration-500 ${isActive ? "text-orange-400" : "text-white/30"}`}>
                    {s.category}
                  </p>

                  <div className={`overflow-hidden transition-all duration-700 ease-in-out
                    ${isActive ? "max-h-40 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"}
                  `}>
                    <p className="text-xs lg:text-sm text-white/70 leading-relaxed font-light max-w-[280px]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated Accent Line */}
              <div className={`absolute bottom-0 left-0 h-[3px] bg-orange-500 transition-all duration-700 ${isActive ? "w-full" : "w-0"}`} />
            </button>
          );
        })}
      </div>

      {/* Noise Effect */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default Service;